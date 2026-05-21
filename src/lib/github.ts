export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

interface FetchOptions {
  token?: string;
}

async function fetchAllPages(
  url: string,
  options: FetchOptions = {}
): Promise<GitHubUser[]> {
  const allUsers: GitHubUser[] = [];
  let page = 1;
  const perPage = 100;

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

  return allUsers;
}

export async function getFollowers(
  username: string,
  token?: string
): Promise<GitHubUser[]> {
  return fetchAllPages(
    `https://api.github.com/users/${username}/followers`,
    { token }
  );
}

export async function getFollowing(
  username: string,
  token?: string
): Promise<GitHubUser[]> {
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
  const [followers, following] = await Promise.all([
    getFollowers(safeUsername, token),
    getFollowing(safeUsername, token),
  ]);

  const followerLogins = new Set(followers.map((u) => u.login));
  const followingLogins = new Set(following.map((u) => u.login));

  // People you follow who don't follow you back
  const unfollowers = following.filter((u) => !followerLogins.has(u.login));

  // People who follow you but you don't follow back
  const notFollowingBack = followers.filter(
    (u) => !followingLogins.has(u.login)
  );

  return { followers, following, unfollowers, notFollowingBack };
}
