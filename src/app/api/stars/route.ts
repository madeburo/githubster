import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const SNAPSHOT_KEY = "githubster:repo-stars:last-known";

function snapshotCache() {
  try {
    return getCloudflareContext().env.NEXT_INC_CACHE_KV;
  } catch {
    // Plain Node.js builds and standalone deployments have no Worker bindings.
    return undefined;
  }
}

// Prerendered and refreshed hourly: one GitHub request per hour for all visitors combined.
export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  let stars: number | null = null;
  const cache = snapshotCache();

  try {
    const response = await fetch("https://api.github.com/repos/madeburo/githubster", {
      headers: {
        Accept: "application/vnd.github+json",
        // Workers fetch has no default User-Agent; GitHub requires one.
        "User-Agent": "Githubster (+https://www.githubster.com)",
      },
    });
    if (response.ok) {
      const repo = await response.json();
      if (typeof repo.stargazers_count === "number") {
        stars = repo.stargazers_count;
        if (cache) {
          await cache.put(SNAPSHOT_KEY, JSON.stringify({ stars }));
        }
      }
    } else {
      console.warn("GitHub stars request failed", {
        status: response.status,
        rateLimitRemaining: response.headers.get("x-ratelimit-remaining"),
      });
    }
  } catch (error) {
    console.warn("GitHub stars request failed", error instanceof Error ? error.message : "Unknown error");
    // The button simply renders without a count.
  }

  // Shared Workers egress IPs can exhaust GitHub's unauthenticated quota.
  // Keep the last successful count instead of making it disappear for visitors.
  if (stars === null && cache) {
    try {
      const snapshot = await cache.get<{ stars: number }>(SNAPSHOT_KEY, "json");
      if (snapshot && Number.isSafeInteger(snapshot.stars) && snapshot.stars >= 0) {
        stars = snapshot.stars;
      }
    } catch {
      // The counter is optional, including if KV is temporarily unavailable.
    }
  }

  return NextResponse.json({ stars });
}
