export const REPOSITORY_STARS_CACHE_KEY = "https://www.githubster.com/api/stars?cache=repository-v2";

export function parseStarCount(value: unknown): number | null {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 0 ? value : null;
}

export async function fetchRepositoryStars(fetcher: typeof fetch = fetch): Promise<number | null> {
  try {
    const response = await fetcher("https://api.github.com/repos/madeburo/githubster", {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "Githubster (+https://www.githubster.com)",
      },
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) {
      await response.body?.cancel();
      return null;
    }
    return parseStarCount((await response.json()).stargazers_count);
  } catch {
    return null;
  }
}

type StarsCache = Pick<Cache, "match" | "put">;

/** Cache API writes do not use Workers KV; the cache is local to each location. */
export async function repositoryStarsResponse({ cache, fallback, fetcher = fetch }: {
  cache?: StarsCache;
  fallback: number | null;
  fetcher?: typeof fetch;
}): Promise<Response> {
  const cacheKey = new Request(REPOSITORY_STARS_CACHE_KEY);
  try {
    const hit = await cache?.match(cacheKey);
    if (hit) {
      const response = new Response(hit.body, hit);
      response.headers.set("Cache-Control", "public, max-age=60");
      response.headers.set("X-Githubster-Stars-Cache", "HIT");
      return response;
    }
  } catch {
    // A cache outage must not prevent the optional counter from rendering.
  }

  const stars = (await fetchRepositoryStars(fetcher)) ?? fallback;
  const response = Response.json({ stars }, {
    headers: {
      "Cache-Control": "public, max-age=60",
      "X-Githubster-Stars-Cache": "MISS",
    },
  });
  if (cache) {
    try {
      const stored = response.clone();
      stored.headers.set("Cache-Control", "public, max-age=3600");
      await cache.put(cacheKey, stored);
    } catch {
      // The response and build-time fallback require no external storage.
    }
  }
  return response;
}
