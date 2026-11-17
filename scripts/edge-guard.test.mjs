import test from "node:test";
import assert from "node:assert/strict";
import { createRequestHandler } from "../cloudflare/request-handler.mjs";
import { backupRuleExpression } from "../cloudflare/backup-policy.mjs";

const manifest = {
  indexNowKey: "build-public-key",
  documents: ["/", "/ru", "/ar", "/tools", "/ja/tools/github-followers-checker", "/sitemap.xml", "/robots.txt", "/llms.txt"],
  handlers: ["/api/stars", "/api/indexnow", "/api/indexnow/verification", "/.well-known/security.txt"],
  assets: ["/favicon.svg", "/_next/static/chunk.js"],
  notFound: {
    en: { title: "Page not found", description: "This page does not exist.", button: "Go home" },
    ru: { title: "Страница не найдена", description: "Такой страницы нет.", button: "На главную" },
    ar: { title: "الصفحة غير موجودة", description: "هذه الصفحة غير موجودة.", button: "الرئيسية" },
  },
};

function guarded(loadNext = () => assert.fail("Unknown requests must not load Next.js")) {
  return createRequestHandler({ manifest, loadNext });
}
const req = (path, init) => new Request(`https://www.githubster.com${path}`, init);

test("random missing pages, API paths and asset paths never load Next.js", async () => {
  const handle = guarded();
  for (const path of ["/unknown", "/xx", "/tools/unknown", "/ru/guides/unknown", "/api/missing", "/api/stars.rsc", "/_next/static/missing.js", "/cdn-cgi/_next_cache/private", ...Array.from({ length: 30 }, (_, index) => `/scanner-${index}`)]) {
    const response = await handle(req(path), {}, {});
    assert.equal(response.status, 404, path);
    assert.equal(response.headers.get("x-githubster-handler"), "static-404");
    assert.equal(response.headers.get("x-robots-tag"), "noindex");
    const html = await response.text();
    assert(!html.includes("<script"));
    assert(!html.includes("/_next/"));
    assert(Buffer.byteLength(html) < 2000);
  }
});

test("backup scans are blocked on canonical, apex and workers.dev hosts before redirects or Next.js", async () => {
  const handle = guarded();
  for (const origin of ["https://www.githubster.com", "https://githubster.com", "https://githubster.umid-ddf.workers.dev"]) {
    for (const path of ["/backup.zip", "/DATABASE.SQL.GZ", "/public_html.7z", "/config.sqlite", "/file.tar.xz", "/back%75p%2ezip", "/nested/dump.sql/extra", "/file~"]) {
      const response = await handle(new Request(origin + path), {}, {});
      assert.equal(response.status, 403, origin + path);
      assert.equal(response.headers.get("x-githubster-handler"), "edge-guard");
    }
  }
  assert(backupRuleExpression().length < 4000);
});

test("404 stays localized, uses RTL where needed, and HEAD has no response body", async () => {
  const handle = guarded();
  const ru = await handle(req("/ru/missing"), {}, {});
  assert.equal(ru.headers.get("content-language"), "ru");
  assert.match(await ru.text(), /Страница не найдена/);
  const ar = await (await handle(req("/ar/missing"), {}, {})).text();
  assert.match(ar, /lang="ar" dir="rtl"/);
  assert.match(ar, /href="\/ar"/);
  const head = await handle(req("/missing", { method: "HEAD" }), {}, {});
  assert.equal(head.status, 404);
  assert.equal(await head.text(), "");
  assert.equal((await handle(req("/%ZZ"), {}, {})).status, 400);
});

test("real documents, RSC, assets and exact API endpoints still delegate with original request and bindings", async () => {
  let loads = 0;
  const env = { INDEXNOW_KEY: "public-key" };
  const ctx = {};
  const handle = guarded(async () => {
    loads++;
    return { default: { fetch(request, receivedEnv, receivedCtx) {
      assert.equal(receivedEnv, env);
      assert.equal(receivedCtx, ctx);
      return new Response(request.url);
    } } };
  });
  for (const path of [...manifest.documents, "/ru/", "/ru.rsc", "/ru?_rsc=123&user=madeburo", ...manifest.assets, ...manifest.handlers, "/public-key.txt", "/_next/image?url=test"]) {
    const request = req(path);
    const response = await handle(request, env, ctx);
    assert.equal(response.status, 200, path);
    assert.equal(await response.text(), request.url);
  }
  assert.equal(loads, 1, "Next.js should only initialize once");
});

test("hostname and Japanese alias redirects preserve the path and query without loading Next.js", async () => {
  const handle = guarded();
  const apex = await handle(new Request("http://githubster.com/ar?user=madeburo"), {}, {});
  assert.equal(apex.status, 301);
  assert.equal(apex.headers.get("location"), "https://www.githubster.com/ar?user=madeburo");
  const alias = await handle(req("/jp/tools/github-followers-checker?user=madeburo"), {}, {});
  assert.equal(alias.status, 308);
  assert.equal(alias.headers.get("location"), "https://www.githubster.com/ja/tools/github-followers-checker?user=madeburo");
});


test("the public build-time IndexNow key works in local preview; the runtime binding takes priority", async () => {
  const handle = guarded(async () => ({ default: { fetch() { return new Response("verified"); } } }));
  assert.equal((await handle(req("/build-public-key.txt"), {}, {})).status, 200);
  assert.equal((await handle(req("/runtime-key.txt"), { INDEXNOW_KEY: "runtime-key" }, {})).status, 200);
  assert.equal((await handle(req("/build-public-key.txt"), { INDEXNOW_KEY: "runtime-key" }, {})).status, 404);
});
