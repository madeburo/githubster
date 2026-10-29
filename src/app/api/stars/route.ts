import { getCloudflareContext } from "@opennextjs/cloudflare";
import { parseStarCount, repositoryStarsResponse } from "@/lib/repository-stars";

// Changing data uses the Cache API, not Next.js ISR/Workers KV.
export const dynamic = "force-dynamic";

export async function GET() {
  let cache: Cache | undefined;
  try {
    getCloudflareContext();
    cache = await caches.open("githubster-repository-stars-v2");
  } catch {
    // Plain Node.js/standalone runs still fetch GitHub directly.
  }
  return repositoryStarsResponse({
    cache,
    // next.config.ts embeds this public snapshot in the server bundle.
    fallback: parseStarCount(Number(process.env.GITHUBSTER_STARS_SNAPSHOT ?? "NaN")),
  });
}
