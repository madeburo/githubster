import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Pages change only on deployment. Ship their cache without Workers KV writes.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
