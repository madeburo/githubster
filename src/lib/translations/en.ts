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
    description:
      "Find out who doesn't follow you back, who you're not following, and manage your GitHub connections.",
  },
  search: {
    placeholder: "Enter GitHub username",
    button: "Check",
    loading: "Loading...",
    tokenToggle: "Add token (optional, increases rate limit)",
    tokenHide: "Hide token (optional, increases rate limit)",
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
  },
  tabs: {
    unfollowers: "Not Following Back",
    notFollowingBack: "You Don't Follow",
    following: "Following",
    followers: "Followers",
  },
  stats: {
    followers: "Followers",
    following: "Following",
    unfollowers: "Don't follow back",
    notFollowingBack: "You don't follow",
  },
  empty: {
    unfollowers: "Everyone you follow follows you back! 🎉",
    notFollowingBack: "You follow everyone who follows you! 🤝",
    following: "Not following anyone yet.",
    followers: "No followers yet.",
    initial: "Enter a username above to see the full picture",
  },
  grid: {
    searchPlaceholder: "Search {count} users...",
  },
  seo: {
    title: "What is Githubster?",
    description:
      "Githubster is a free, open-source tool that helps you understand your GitHub social graph. Instantly see who doesn't follow you back, discover followers you haven't followed yet, and get a clear overview of your connections — all without signing in or sharing any personal data.",
    feature1Title: "Unfollowers",
    feature1Desc: "See who you follow that doesn't follow you back. Clean up your following list.",
    feature2Title: "Fans",
    feature2Desc: "Discover people who follow you that you haven't followed back yet.",
    feature3Title: "Private & Secure",
    feature3Desc: "Runs entirely in your browser. No data is stored or sent to any server.",
  },
  footer: {
    openSource: "Open source on",
    madeWith: "Made with ♥ in",
  },
};

export type Translations = typeof en;
