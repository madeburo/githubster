// Validate the built configuration too: deploying an old KV-based build would
// repopulate hundreds of keys even after open-next.config.ts has been fixed.
let config;
try {
  ({ default: config } = await import("../.open-next/.build/open-next.config.mjs"));
} catch {
  throw new Error("Build the Worker with npm run cf:build before deploying.");
}
const override = config.default?.override?.incrementalCache;
const cache = typeof override === "function" ? await override() : override;
if (cache?.name !== "cf-static-assets-incremental-cache") {
  throw new Error("Refusing deployment: rebuild with the read-only Static Assets cache to avoid Workers KV writes.");
}
console.log("Verified read-only Static Assets cache: no Workers KV population.");
