import { glob, readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";

// Seed only a successful build-time count; never overwrite a good snapshot with null.
for await (const path of glob(".open-next/cache/**/api/stars.cache")) {
  const entry = JSON.parse(await readFile(path, "utf8"));
  const { stars } = JSON.parse(entry.body);
  if (!Number.isSafeInteger(stars) || stars < 0) continue;
  const result = spawnSync(process.execPath, [
    "node_modules/wrangler/bin/wrangler.js", "kv", "key", "put",
    "--binding", "NEXT_INC_CACHE_KV", "--remote",
    "githubster:repo-stars:last-known", JSON.stringify({ stars }),
  ], { stdio: "inherit" });
  if (result.error) throw result.error;
  process.exit(result.status ?? 1);
}
console.log("No successful build-time star count; retaining the existing snapshot.");
