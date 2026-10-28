import assert from "node:assert/strict";

const origin = new URL(process.argv[2] || "https://www.githubster.com").origin;
let checks = 0;

async function request(path, expectedStatus = 200, init = {}) {
  const response = await fetch(new URL(path, origin), {
    redirect: "manual",
    signal: AbortSignal.timeout(30000),
    ...init,
  });
  assert.equal(response.status, expectedStatus, `${path}: unexpected HTTP status`);
  checks++;
  return response;
}

const home = await request("/");
const html = await home.text();
assert.match(html, /Githubster Explorer/);
assert.match(home.headers.get("content-security-policy") || "", /api\.github\.com/);
assert.equal(home.headers.get("x-content-type-options"), "nosniff");

const assets = [...new Set([...html.matchAll(/(?:src|href)="([^"<>]*\/_next\/static\/[^"<>]+)"/g)]
  .map((match) => match[1].replaceAll("&amp;", "&")))];
assert(assets.some((path) => path.includes(".css")), "No stylesheet links in HTML");
assert(assets.some((path) => path.includes(".js")), "No JavaScript links in HTML");
for (const path of assets) {
  const asset = await request(path);
  assert.match(asset.headers.get("cache-control") || "", /immutable/);
  if (path.includes(".css")) assert.match(asset.headers.get("content-type") || "", /text\/css/);
  if (path.includes(".js")) assert.match(asset.headers.get("content-type") || "", /javascript/);
  await asset.body?.cancel();
}

const sitemap = await (await request("/sitemap.xml")).text();
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
assert(pages.length >= 200, `Incomplete sitemap: ${pages.length} pages`);
const languages = new Set(["zh", "ko", "ja", "pt", "es", "de", "fr", "it", "uk", "he", "tr", "ar", "pl", "nl", "da", "sv", "no", "cs", "hu"]);
let cursor = 0;
await Promise.all(Array.from({ length: 6 }, async () => {
  while (cursor < pages.length) {
    const path = pages[cursor++];
    const page = await (await request(path)).text();
    const first = path.split("/")[1];
    const locale = languages.has(first) ? first : "en";
    assert.match(page, new RegExp(`<html[^>]+lang="${locale}"`), `${path}: wrong language`);
    assert.match(page, new RegExp(`<link[^>]+rel="canonical"[^>]+href="https://www.githubster.com${path === "/" ? "" : path}/?"`), `${path}: wrong canonical`);
  }
}));

for (const path of ["/backgrounds/githubster-light-desk.avif", "/backgrounds/githubster-dark-desk.avif", "/manifest.json", "/sw.js", "/.well-known/security.txt"]) {
  await (await request(path)).body?.cancel();
}
assert.match(await (await request("/robots.txt")).text(), /https:\/\/www\.githubster\.com\/sitemap.xml/);
const stars = await (await request("/api/stars")).json();
assert.equal(typeof stars.stars, "number", "Star count was not loaded");

const alias = await request("/jp/tools/github-followers-checker?user=madeburo", 308);
assert.equal(new URL(alias.headers.get("location"), origin).pathname, "/ja/tools/github-followers-checker");
assert.equal(new URL(alias.headers.get("location"), origin).search, "?user=madeburo");
await request("/api/indexnow", 405);
await request("/api/indexnow", 401, { method: "POST" });
await request("/api/indexnow", 401, { method: "POST", headers: { Authorization: "Bearer invalid" } });
await request("/this-page-does-not-exist", 404);
await request("/ar/this-page-does-not-exist", 404);

if (process.env.INDEXNOW_KEY) {
  assert.equal(await (await request(`/${process.env.INDEXNOW_KEY}.txt`)).text(), process.env.INDEXNOW_KEY);
}

if (origin === "https://www.githubster.com") {
  for (const source of ["http://www.githubster.com", "https://githubster.com"]) {
    const redirect = await request(`${source}/ar?user=madeburo`, 301);
    assert.equal(redirect.headers.get("location"), "https://www.githubster.com/ar?user=madeburo");
  }
}

console.log(JSON.stringify({ origin, checks, pages: pages.length, assets: assets.length, stars: stars.stars, result: "passed" }));
