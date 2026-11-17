import { createRequestHandler } from "./request-handler.mjs";
import manifest from "../.generated/edge-routes.json" with { type: "json" };

// Preserve the historical Durable Object exports without importing Next.js.
export { DOQueueHandler } from "../.open-next/.build/durable-objects/queue.js";
export { DOShardedTagCache } from "../.open-next/.build/durable-objects/sharded-tag-cache.js";
export { BucketCachePurge } from "../.open-next/.build/durable-objects/bucket-cache-purge.js";

const worker = {
  fetch: createRequestHandler({ manifest, loadNext: () => import("../.open-next/worker.js") }),
};

export default worker;
