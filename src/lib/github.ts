export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface GitHubRepo {
  name: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

export interface GitHubProfile {
  login: string;
  avatarUrl: string;
  followers: number;
  following: number;
}

export interface ProfileOverview {
  repositoryStats: {
    publicRepos: number;
    totalStars: number;
    topLanguages: { language: string; percentage: number }[];
  } | null;
  avatarUrl: string;
}

export interface RateLimitInfo {
  remaining: number;
  limit: number;
  resetAt: Date;
}

export type GitHubErrorCode =
  | "not_found"
  | "rate_limit"
  | "bad_token"
  | "too_large"
  | "invalid_username"
  | "network"
  | "unknown";

/** Every failure of a lookup, classified so the UI never has to parse message text. */
export class GitHubApiError extends Error {
  constructor(
    readonly code: GitHubErrorCode,
    message: string,
    /** For `too_large`: API requests the lookup needs vs. what the current limit still allows. */
    readonly budget?: { needed: number; remaining: number }
  ) {
    super(message);
    this.name = "GitHubApiError";
  }
}

export interface FollowData {
  followers: GitHubUser[];
  following: GitHubUser[];
  unfollowers: GitHubUser[];
  notFollowingBack: GitHubUser[];
  mutuals: GitHubUser[];
  rateLimit: RateLimitInfo | null;
}

export interface LoadingProgress {
  followersLoaded: number;
  followingLoaded: number;
  followersTotal: number;
  followingTotal: number;
}

export interface NetworkResult {
  profile: GitHubProfile;
  data: FollowData;
  overview: ProfileOverview;
}

const API = "https://api.github.com";
const PER_PAGE = 100;

function isAbort(error: unknown) {
  return error instanceof DOMException && error.name === "AbortError";
}

function parseRateLimit(response: Response): RateLimitInfo | null {
  const remaining = response.headers.get("X-RateLimit-Remaining");
  const limit = response.headers.get("X-RateLimit-Limit");
  const reset = response.headers.get("X-RateLimit-Reset");

  if (remaining && limit && reset) {
    return {
      remaining: parseInt(remaining, 10),
      limit: parseInt(limit, 10),
      resetAt: new Date(parseInt(reset, 10) * 1000),
    };
  }
  return null;
}

/** Keeps whichever reading has fewer requests left, i.e. the most recent state of the limit. */
function lowestRateLimit(...limits: (RateLimitInfo | null)[]): RateLimitInfo | null {
  return limits.reduce<RateLimitInfo | null>(
    (lowest, limit) => (limit && (!lowest || limit.remaining < lowest.remaining) ? limit : lowest),
    null
  );
}

function errorForStatus(response: Response, rateLimit: RateLimitInfo | null, hasToken: boolean): GitHubApiError {
  const { status } = response;
  if (status === 404) return new GitHubApiError("not_found", "User not found.");
  if (status === 401) return new GitHubApiError("bad_token", "GitHub rejected the token.");

  // GitHub signals both primary and secondary rate limits with 403 or 429.
  const limited =
    status === 429 ||
    (status === 403 && (rateLimit?.remaining === 0 || response.headers.has("Retry-After") || !hasToken));
  if (limited) {
    return new GitHubApiError("rate_limit", "Rate limit exceeded. Please provide a GitHub token or try again later.");
  }

  return new GitHubApiError("unknown", `GitHub API error: ${status}`);
}

async function githubFetch(
  path: string,
  token?: string,
  signal?: AbortSignal
): Promise<{ response: Response; rateLimit: RateLimitInfo | null }> {
  if (signal?.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }

  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let response: Response;
  try {
    response = await fetch(`${API}${path}`, { headers, signal });
  } catch (error) {
    if (isAbort(error)) throw error;
    throw new GitHubApiError("network", "Network error. Please check your internet connection and try again.");
  }

  const rateLimit = parseRateLimit(response);
  if (!response.ok) {
    throw errorForStatus(response, rateLimit, Boolean(token));
  }
  return { response, rateLimit };
}

async function fetchAllPages<T>(
  path: string,
  token?: string,
  signal?: AbortSignal,
  onProgress?: (loaded: number) => void
): Promise<{ items: T[]; rateLimit: RateLimitInfo | null }> {
  const items: T[] = [];
  let rateLimit: RateLimitInfo | null = null;
  const separator = path.includes("?") ? "&" : "?";

  for (let page = 1; ; page++) {
    const result = await githubFetch(`${path}${separator}per_page=${PER_PAGE}&page=${page}`, token, signal);
    rateLimit = result.rateLimit;

    const batch: T[] = await result.response.json();
    items.push(...batch);
    onProgress?.(items.length);

    if (batch.length < PER_PAGE) break;
  }

  return { items, rateLimit };
}

function validateUsername(username: string): string {
  const sanitized = username.trim();
  if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/.test(sanitized)) {
    throw new GitHubApiError("invalid_username", "Invalid GitHub username format.");
  }
  return encodeURIComponent(sanitized);
}

/** Requests needed to page through a list of `count` users (a full last page costs one extra). */
function pagesFor(count: number) {
  return Math.floor(count / PER_PAGE) + 1;
}

/**
 * One cheap request that tells us whether the account exists, how big its lists are, and how much
 * of the rate limit is left, so an oversized lookup fails up front instead of halfway through.
 */
async function getProfile(
  safeUsername: string,
  token?: string,
  signal?: AbortSignal
): Promise<{ profile: GitHubProfile; rateLimit: RateLimitInfo | null }> {
  const { response, rateLimit } = await githubFetch(`/users/${safeUsername}`, token, signal);
  const user = await response.json();

  const profile: GitHubProfile = {
    login: user.login,
    avatarUrl: user.avatar_url,
    followers: user.followers ?? 0,
    following: user.following ?? 0,
  };

  if (rateLimit) {
    const needed = pagesFor(profile.followers) + pagesFor(profile.following);
    if (needed > rateLimit.remaining) {
      throw new GitHubApiError("too_large", "This profile needs more GitHub API requests than the current limit allows.", {
        needed,
        remaining: rateLimit.remaining,
      });
    }
  }

  return { profile, rateLimit };
}

async function getFollowData(
  safeUsername: string,
  profile: GitHubProfile,
  token?: string,
  signal?: AbortSignal,
  onProgress?: (progress: LoadingProgress) => void
): Promise<FollowData> {
  const progress: LoadingProgress = {
    followersLoaded: 0,
    followingLoaded: 0,
    followersTotal: profile.followers,
    followingTotal: profile.following,
  };
  const report = (patch: Partial<LoadingProgress>) => {
    Object.assign(progress, patch);
    onProgress?.({ ...progress });
  };

  const [followersResult, followingResult] = await Promise.all([
    fetchAllPages<GitHubUser>(`/users/${safeUsername}/followers`, token, signal, (loaded) => report({ followersLoaded: loaded })),
    fetchAllPages<GitHubUser>(`/users/${safeUsername}/following`, token, signal, (loaded) => report({ followingLoaded: loaded })),
  ]);

  const followers = followersResult.items;
  const following = followingResult.items;

  const followerLogins = new Set(followers.map((u) => u.login));
  const followingLogins = new Set(following.map((u) => u.login));

  // People you follow who don't follow you back
  const unfollowers = following.filter((u) => !followerLogins.has(u.login));

  // People who follow you but you don't follow back
  const notFollowingBack = followers.filter((u) => !followingLogins.has(u.login));

  // People you follow who also follow you back
  const mutuals = following.filter((u) => followerLogins.has(u.login));

  const rateLimit = lowestRateLimit(followersResult.rateLimit, followingResult.rateLimit);

  return { followers, following, unfollowers, notFollowingBack, mutuals, rateLimit };
}

/**
 * Top five languages as whole percentages that always add up to 100.
 * Weighted by stars; profiles without any stars fall back to the number of repositories per language.
 */
export function topLanguageShares(repos: GitHubRepo[], limit = 5): { language: string; percentage: number }[] {
  const hasStars = repos.some((repo) => repo.language && repo.stargazers_count > 0);
  const weights = new Map<string, number>();
  for (const repo of repos) {
    if (!repo.language) continue;
    weights.set(repo.language, (weights.get(repo.language) ?? 0) + (hasStars ? repo.stargazers_count : 1));
  }

  const top = [...weights.entries()]
    .filter(([, weight]) => weight > 0)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit);
  const total = top.reduce((sum, [, weight]) => sum + weight, 0);
  if (total === 0) return [];

  // Largest-remainder rounding: floor every share, then hand the leftover points to the biggest fractions.
  const shares = top.map(([language, weight]) => {
    const exact = (weight / total) * 100;
    return { language, percentage: Math.floor(exact), remainder: exact - Math.floor(exact) };
  });
  let leftover = 100 - shares.reduce((sum, share) => sum + share.percentage, 0);
  for (const share of [...shares].sort((a, b) => b.remainder - a.remainder)) {
    if (leftover-- <= 0) break;
    share.percentage += 1;
  }

  return shares.map(({ language, percentage }) => ({ language, percentage }));
}

/** Repository metrics are a bonus: any failure leaves them unavailable rather than failing the lookup. */
async function getRepositoryStats(
  safeUsername: string,
  token?: string,
  signal?: AbortSignal
): Promise<{ stats: ProfileOverview["repositoryStats"]; rateLimit: RateLimitInfo | null }> {
  try {
    const { items: repos, rateLimit } = await fetchAllPages<GitHubRepo>(`/users/${safeUsername}/repos?type=owner`, token, signal);

    // Only own (non-fork) repos
    const ownRepos = repos.filter((r) => !r.fork);
    const totalStars = ownRepos.reduce((sum, r) => sum + r.stargazers_count, 0);

    return { stats: { publicRepos: ownRepos.length, totalStars, topLanguages: topLanguageShares(ownRepos) }, rateLimit };
  } catch (error) {
    if (isAbort(error)) throw error;
    // Repository metrics remain explicitly unavailable instead of becoming false zeroes.
    return { stats: null, rateLimit: null };
  }
}

/** Loads everything the explorer shows for one public profile. */
export async function getNetwork(
  username: string,
  token?: string,
  signal?: AbortSignal,
  onProgress?: (progress: LoadingProgress) => void
): Promise<NetworkResult> {
  const safeUsername = validateUsername(username);
  const { profile, rateLimit: profileRateLimit } = await getProfile(safeUsername, token, signal);

  const [data, repositories] = await Promise.all([
    getFollowData(safeUsername, profile, token, signal, onProgress),
    getRepositoryStats(safeUsername, token, signal),
  ]);

  return {
    profile,
    data: { ...data, rateLimit: lowestRateLimit(profileRateLimit, data.rateLimit, repositories.rateLimit) },
    overview: { repositoryStats: repositories.stats, avatarUrl: profile.avatarUrl },
  };
}
