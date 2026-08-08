export const en = {
  meta: {
    title: "Githubster — Track Your GitHub Followers & Unfollowers",
    description: "Free open-source tool to see who doesn't follow you back on GitHub, discover your fans, and manage your following list. No login required.",
  },
  notFound: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has been moved.",
    button: "Back to home",
  },
  hero: {
    title: "Explore your GitHub network",
    description:
      "Explore followers, mutuals, unfollowers and public profile insights. No Githubster account required. Your optional token stays in this tab.",
  },
  search: {
    placeholder: "Enter GitHub username",
    button: "Explore",
    loading: "Loading...",
    tokenToggle: "Add token (optional, increases rate limit)",
    tokenHide: "Hide token (optional, increases rate limit)",
    tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Show token",
    tokenMask: "Mask token",
    tokenClear: "Clear token",
    tokenPrivacy: "Used only for direct GitHub API requests. It is not saved or sent to Githubster.",
  },
  tabs: {
    unfollowers: "Not Following Back",
    notFollowingBack: "You Don't Follow",
    mutuals: "Mutuals",
    following: "Following",
    followers: "Followers",
  },
  stats: {
    followers: "Followers",
    following: "Following",
    mutuals: "Mutuals",
    unfollowers: "Don't follow back",
    notFollowingBack: "You don't follow",
  },
  empty: {
    unfollowers: "Everyone you follow follows you back! 🎉",
    notFollowingBack: "You follow everyone who follows you! 🤝",
    mutuals: "No mutual connections yet.",
    following: "Not following anyone yet.",
    followers: "No followers yet.",
    initial: "Enter a username above to see the full picture",
  },
  grid: {
    searchPlaceholder: "Search {count} users...",
  },
  rateLimit: {
    resets: "resets {time}",
    now: "now",
  },
  error: {
    retry: "Retry",
    userNotFound: "User not found",
    userNotFoundDesc: "Check the GitHub username and try again.",
    rateLimit: "GitHub rate limit reached",
    rateLimitDesc: "Add a token or try again in a few minutes.",
    noPublicFollowers: "No public followers found",
    noPublicFollowersDesc: "This profile may have limited public activity.",
  },
  seo: {
    title: "What is Githubster",
    description:
      "Githubster is a free, open-source tool that helps you understand your GitHub social graph. Instantly see who doesn't follow you back, discover followers you haven't followed yet, and get a clear overview of your connections — without creating a Githubster account.",
    feature1Title: "Track Unfollowers",
    feature1Desc: "See who you follow that doesn't follow you back. Clean up your following list.",
    feature2Title: "Followers",
    feature2Desc: "Discover people who follow you that you haven't followed back yet.",
    feature3Title: "Browser-based",
    feature3Desc: "Profile analysis runs in your browser. Optional access tokens are never stored.",
  },
  profileOverview: {
    title: "Profile Overview",
    ownProjects: "Own Projects",
    repositories: "repositories",
    totalStars: "Total Stars",
    topLanguages: "Top Languages by Stars",
    repositoriesUnavailable: "Repository data unavailable",
  },
  banner: {
    text: "Githubster is 100% free and open-source. If it helped you, a GitHub star keeps it alive.",
    cta: "Star on GitHub",
  },
  footer: {
    openSource: "Open source on",
    madeWith: "Made with ♥ in",
  },
  share: {
    button: "Share",
    copied: "Copied!",
    tooltip: "Share profile link",
  },
  sort: {
    label: "Sort users",
    default: "Default",
    nameAsc: "Name A→Z",
    nameDesc: "Name Z→A",
  },
  loading: {
    title: "Loading profile data...",
    followers: "Followers",
    following: "Following",
  },
};

// New keys are optional — not all translations need to provide them immediately
type BaseTranslations = Omit<typeof en, "share" | "sort" | "loading">;
type OptionalTranslations = {
  share?: typeof en.share;
  sort?: typeof en.sort;
  loading?: typeof en.loading;
};

export type Translations = BaseTranslations & OptionalTranslations;
