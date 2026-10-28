import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";
import doQueue from "@opennextjs/cloudflare/overrides/queue/do-queue";

// Keep prerendered pages and the hourly /api/stars refresh across Worker instances.
export default defineCloudflareConfig({
  incrementalCache: kvIncrementalCache,
  queue: doQueue,
});
