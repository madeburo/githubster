import assert from "node:assert/strict";
import { test } from "node:test";
import { mkdtemp, mkdir, copyFile, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { repositoryStarsResponse, REPOSITORY_STARS_CACHE_KEY } from "../src/lib/repository-stars.ts";

test("deployment guard rejects a stale KV build before deployment can write keys", async () => {
  const root = await mkdtemp(join(tmpdir(), "githubster-cache-guard-"));
  try {
    await mkdir(join(root, "scripts"));
    await mkdir(join(root, ".open-next/.build"), { recursive: true });
    const script = join(root, "scripts/check-cloudflare-cache.mjs");
    await copyFile(new URL("./check-cloudflare-cache.mjs", import.meta.url), script);
    for (const [name, expectedStatus] of [["cf-kv-incremental-cache", 1], ["cf-static-assets-incremental-cache", 0]]) {
      await writeFile(join(root, ".open-next/.build/open-next.config.mjs"),
        `export default {default:{override:{incrementalCache:()=>({name:${JSON.stringify(name)}})}}};`);
      const result = spawnSync(process.execPath, [script], { encoding: "utf8" });
      assert.equal(result.status, expectedStatus, result.stderr);
      if (expectedStatus === 1) assert.match(result.stderr, /Refusing deployment/);
    }
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("a warm edge cache serves the count without contacting GitHub", async () => {
  const response = await repositoryStarsResponse({
    fallback: 17,
    cache: {
      async match(request) {
        assert.equal(request.url, REPOSITORY_STARS_CACHE_KEY);
        return Response.json({ stars: 23 }, { headers: { "Cache-Control": "public,max-age=3600" } });
      },
      async put() { assert.fail("must not rewrite a cache hit"); },
    },
    async fetcher() { assert.fail("must not fetch on a cache hit"); },
  });
  assert.deepEqual(await response.json(), { stars: 23 });
  assert.equal(response.headers.get("x-githubster-stars-cache"), "HIT");
  assert.match(response.headers.get("cache-control"), /max-age=60$/);
});

test("a fresh count is cached for an hour and replaces the build-time fallback", async () => {
  let saved;
  const response = await repositoryStarsResponse({
    fallback: 17,
    cache: {
      async match() { return undefined; },
      async put(_request, value) { saved = value; },
    },
    async fetcher(_url, options) {
      assert.equal(options.cache, "no-store");
      assert(options.headers["User-Agent"]);
      return Response.json({ stargazers_count: 24 });
    },
  });
  assert.deepEqual(await response.json(), { stars: 24 });
  assert.match(saved.headers.get("cache-control"), /max-age=3600$/);
  assert.deepEqual(await saved.json(), { stars: 24 });
});

test("GitHub throttling uses the build snapshot and caches it to prevent repeated requests", async () => {
  let saved;
  const response = await repositoryStarsResponse({
    fallback: 17,
    cache: { async match() { return undefined; }, async put(_request, value) { saved = value; } },
    async fetcher() { return Response.json({ message: "rate limit exceeded" }, { status: 403 }); },
  });
  assert.deepEqual(await response.json(), { stars: 17 });
  assert.deepEqual(await saved.json(), { stars: 17 });
});

test("cache errors, network failures, and malformed counts never break the optional button", async () => {
  for (const upstream of [() => { throw new Error("offline"); }, () => Response.json({ stargazers_count: -1 }), () => Response.json({ stargazers_count: "bad" })]) {
    const response = await repositoryStarsResponse({
      fallback: 17,
      cache: { async match() { throw new Error("unavailable"); }, async put() { throw new Error("unavailable"); } },
      fetcher: upstream,
    });
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { stars: 17 });
  }
});
