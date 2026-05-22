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

export interface ProfileOverview {
  publicRepos: number;
  totalStars: number;
  topLanguages: { language: string; percentage: number }[];
  avatarUrl: string;
}


export interface RateLimitInfo {
  remaining: number;
  limit: number;
  resetAt: Date;
}

interface FetchOptions {
  token?: string;
}

interface FetchResult {
  users: GitHubUser[];
  rateLimit: RateLimitInfo | null;
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

async function fetchAllPages(
  url: string,
  options: FetchOptions = {}
): Promise<FetchResult> {
  const allUsers: GitHubUser[] = [];
  let page = 1;
  const perPage = 100;
  let lastRateLimit: RateLimitInfo | null = null;

  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (options.token) {
    headers.Authorization = `Bearer ${options.token}`;
  }

  while (true) {
    let response: Response;
    try {
      response = await fetch(
        `${url}?per_page=${perPage}&page=${page}`,
        { headers }
      );
    } catch {
      throw new Error(
        "Network error. Please check your internet connection and try again."
      );
    }

    lastRateLimit = parseRateLimit(response);

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error(
          "Rate limit exceeded. Please provide a GitHub token or try again later."
        );
      }
      if (response.status === 404) {
        throw new Error("User not found.");
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const users: GitHubUser[] = await response.json();

    if (users.length === 0) break;

    allUsers.push(...users);

    if (users.length < perPage) break;
    page++;
  }

  return { users: allUsers, rateLimit: lastRateLimit };
}

export async function getFollowers(
  username: string,
  token?: string
): Promise<FetchResult> {
  return fetchAllPages(
    `https://api.github.com/users/${username}/followers`,
    { token }
  );
}

export async function getFollowing(
  username: string,
  token?: string
): Promise<FetchResult> {
  return fetchAllPages(
    `https://api.github.com/users/${username}/following`,
    { token }
  );
}

export interface FollowData {
  followers: GitHubUser[];
  following: GitHubUser[];
  unfollowers: GitHubUser[];
  notFollowingBack: GitHubUser[];
  mutuals: GitHubUser[];
  rateLimit: RateLimitInfo | null;
}

function validateUsername(username: string): string {
  const sanitized = username.trim();
  if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/.test(sanitized)) {
    throw new Error("Invalid GitHub username format.");
  }
  return encodeURIComponent(sanitized);
}

export async function getFollowData(
  username: string,
  token?: string
): Promise<FollowData> {
  const safeUsername = validateUsername(username);
  const [followersResult, followingResult] = await Promise.all([
    getFollowers(safeUsername, token),
    getFollowing(safeUsername, token),
  ]);

  const followers = followersResult.users;
  const following = followingResult.users;

  const followerLogins = new Set(followers.map((u) => u.login));
  const followingLogins = new Set(following.map((u) => u.login));

  // People you follow who don't follow you back
  const unfollowers = following.filter((u) => !followerLogins.has(u.login));

  // People who follow you but you don't follow back
  const notFollowingBack = followers.filter(
    (u) => !followingLogins.has(u.login)
  );

  // People you follow who also follow you back
  const mutuals = following.filter((u) => followerLogins.has(u.login));

  // Use the lowest remaining rate limit from both requests
  const rateLimit = followingResult.rateLimit ?? followersResult.rateLimit;

  return { followers, following, unfollowers, notFollowingBack, mutuals, rateLimit };
}

export async function getProfileOverview(
  username: string,
  token?: string
): Promise<ProfileOverview> {
  const safeUsername = validateUsername(username);

  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // Fetch all repos (paginated)
  const repos: GitHubRepo[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const response = await fetch(
      `https://api.github.com/users/${safeUsername}/repos?per_page=${perPage}&page=${page}&type=owner`,
      { headers }
    );

    if (!response.ok) break;

    const batch: GitHubRepo[] = await response.json();
    if (batch.length === 0) break;

    repos.push(...batch);
    if (batch.length < perPage) break;
    page++;
  }

  // Only own (non-fork) repos
  const ownRepos = repos.filter((r) => !r.fork);

  const totalStars = ownRepos.reduce((sum, r) => sum + r.stargazers_count, 0);

  // Aggregate stars by language
  const languageStars: Record<string, number> = {};
  for (const repo of ownRepos) {
    if (repo.language) {
      languageStars[repo.language] = (languageStars[repo.language] || 0) + repo.stargazers_count;
    }
  }

  // Sort by stars descending, take top 5
  const sorted = Object.entries(languageStars)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const totalLangStars = sorted.reduce((sum, [, stars]) => sum + stars, 0);

  const topLanguages = sorted.map(([language, stars]) => ({
    language,
    percentage: totalLangStars > 0 ? Math.round((stars / totalLangStars) * 100) : 0,
  }));

  // Fetch user profile for avatar
  let avatarUrl = `https://github.com/${safeUsername}.png`;
  try {
    const userRes = await fetch(
      `https://api.github.com/users/${safeUsername}`,
      { headers }
    );
    if (userRes.ok) {
      const userData = await userRes.json();
      if (userData.avatar_url) {
        avatarUrl = userData.avatar_url;
      }
    }
  } catch {
    // fallback to github.com/{user}.png
  }

  return {
    publicRepos: ownRepos.length,
    totalStars,
    topLanguages,
    avatarUrl,
  };
}
