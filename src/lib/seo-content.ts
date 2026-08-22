export type SeoSection = {
  heading: string;
  paragraphs: string[];
};

export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  highlights: string[];
  sections: SeoSection[];
  faqs: { question: string; answer: string }[];
};

export const toolPages: SeoPage[] = [
  {
    slug: "github-followers-checker",
    title: "GitHub Followers Checker — Followers, Following & Mutuals | Githubster",
    description: "Compare public GitHub followers and following lists. Find mutuals, people who do not follow back, and profile insights with Githubster.",
    h1: "GitHub Followers Checker",
    intro: "Compare a public GitHub profile’s followers and following lists in one place. Githubster makes the relationship between the two lists easy to understand without a Githubster account.",
    highlights: ["See followers and following side by side", "Find mutual connections", "Filter and search large public lists"],
    sections: [
      { heading: "What this checker shows", paragraphs: ["Githubster reads public follower and following data from the GitHub API, then groups the result into mutuals, people you follow who do not follow back, and people who follow you that you do not follow back.", "It is useful for developers, open-source maintainers, and communities that want a clearer view of a public GitHub network."] },
      { heading: "Use it with public data", paragraphs: ["Enter a GitHub username on the homepage to start. An optional fine-grained GitHub token can raise API limits for larger profiles; the token remains in the current browser session and is sent directly to GitHub."] },
    ],
    faqs: [
      { question: "Do I need a Githubster account?", answer: "No. Githubster does not require a Githubster account to compare public GitHub follower and following lists." },
      { question: "Does Githubster access private followers?", answer: "No. The checker works with public GitHub data available through the GitHub API." },
    ],
  },
  {
    slug: "github-not-following-back",
    title: "Who Doesn’t Follow You Back on GitHub? | Githubster",
    description: "Find public GitHub accounts you follow that do not currently follow you back. Compare followers and following lists with Githubster.",
    h1: "Who Doesn’t Follow You Back on GitHub?",
    intro: "Githubster compares a public profile’s current following list with its current followers list, so you can see the people you follow who do not currently follow you back.",
    highlights: ["Current list comparison", "No Githubster login", "Search and sort the resulting list"],
    sections: [
      { heading: "A current comparison, not historical tracking", paragraphs: ["GitHub does not provide Githubster with a history of every past follow or unfollow. The result is a current snapshot: accounts present in following but absent from followers.", "That distinction keeps the result accurate. It answers who does not follow back now, rather than claiming to know who unfollowed at a specific time."] },
      { heading: "How to check", paragraphs: ["Open Githubster, enter the public GitHub username, and choose the Not Following Back tab. Use the in-page search and name sorting controls to review the list."] },
    ],
    faqs: [
      { question: "Can Githubster tell who unfollowed me yesterday?", answer: "No. Githubster compares the current public lists and does not store historical follower snapshots." },
      { question: "Why might a result be incomplete?", answer: "GitHub API rate limits or unavailable public data can limit a request. An optional token can raise the API limit for a larger profile." },
    ],
  },
  {
    slug: "github-mutual-followers",
    title: "GitHub Mutual Followers Checker | Githubster",
    description: "See public GitHub mutual followers: accounts you follow that also follow you back. Compare public follower relationships with Githubster.",
    h1: "GitHub Mutual Followers Checker",
    intro: "Mutual followers are public GitHub accounts that appear in both a profile’s followers and following lists. Githubster calculates this intersection for you.",
    highlights: ["Identify two-way connections", "Review public GitHub relationships", "Open each profile directly from the list"],
    sections: [
      { heading: "Why mutuals are useful", paragraphs: ["Mutual connections can reveal maintainers, collaborators, and peers with an active two-way relationship. They are often easier to review than two separate lists.", "Githubster keeps mutuals separate from one-way follower relationships, so the comparison is clear at a glance."] },
      { heading: "Check mutual followers", paragraphs: ["Search for a public GitHub username on the Githubster homepage, then open the Mutuals tab after the comparison finishes."] },
    ],
    faqs: [
      { question: "What counts as a mutual follower?", answer: "A mutual is an account that is present in both the profile’s public followers list and public following list." },
      { question: "Are mutuals updated automatically?", answer: "The result reflects the public data returned by GitHub when you run a comparison." },
    ],
  },
  {
    slug: "github-profile-overview",
    title: "GitHub Profile Overview — Repositories, Stars & Languages | Githubster",
    description: "Get a public GitHub profile overview with repositories, stars, and top languages by stars alongside follower relationship insights.",
    h1: "GitHub Profile Overview",
    intro: "Alongside follower relationships, Githubster summarizes public repositories, total stars, and the languages associated with starred repositories for a quick public profile overview.",
    highlights: ["Public repositories and stars", "Top languages by stars", "Follower, following, and mutual counts"],
    sections: [
      { heading: "A lightweight public profile summary", paragraphs: ["The overview focuses on public repository data. Forked repositories are excluded from the repository summary so the result better represents the profile’s own public work.", "If GitHub repository data cannot be retrieved, Githubster clearly marks the metrics as unavailable instead of showing misleading zeroes."] },
      { heading: "Start with a username", paragraphs: ["Enter any public GitHub username on the homepage. The profile overview appears with the follower relationship results when GitHub data is available."] },
    ],
    faqs: [
      { question: "How are top languages calculated?", answer: "Githubster groups the public profile’s non-fork repositories by their GitHub language field and weights the displayed languages by repository stars." },
      { question: "Why are repository metrics unavailable?", answer: "Githubster marks them unavailable when the required GitHub repository data cannot be retrieved completely." },
    ],
  },
];

export const guidePages: SeoPage[] = [
  {
    slug: "what-is-github",
    title: "What Is GitHub? Repositories, Collaboration & Open Source | Githubster",
    description: "Learn what GitHub is, how it relates to Git, and how repositories, pull requests, issues, stars, followers, and open-source collaboration work.",
    h1: "What Is GitHub?",
    intro: "GitHub is an online platform for hosting Git repositories and collaborating on software. It combines version control with tools for reviewing code, managing projects, publishing open-source work, and building a public developer profile.",
    highlights: ["Host and manage Git repositories", "Collaborate with issues and pull requests", "Discover developers and open-source projects"],
    sections: [
      { heading: "Git and GitHub are different", paragraphs: ["Git is a distributed version control system that records changes to files. GitHub is a service built around Git that hosts repositories online and adds collaboration, discovery, security, and project-management features."] },
      { heading: "Repositories and collaboration", paragraphs: ["A repository can contain source code, documentation, release history, issues, and contribution guidelines. Developers can copy a repository, create a branch, propose changes with a pull request, and review those changes before they are merged."] },
      { heading: "Profiles, followers, and open source", paragraphs: ["GitHub profiles show public repositories, contributions, followers, followed accounts, and starred projects. These public signals help developers discover maintainers, collaborators, communities, and software they may want to use or contribute to."] },
    ],
    faqs: [
      { question: "Is GitHub the same as Git?", answer: "No. Git is the version control system; GitHub is an online platform that hosts Git repositories and provides collaboration tools around them." },
      { question: "Do I need to pay to use GitHub?", answer: "GitHub offers free accounts and public or private repositories, with optional paid plans for additional features and organizations." },
    ],
  },
  {
    slug: "github-followers-vs-following",
    title: "GitHub Followers vs Following: What’s the Difference? | Githubster",
    description: "Learn the difference between GitHub followers, following, mutuals, and people who do not follow back. Compare public GitHub lists with Githubster.",
    h1: "GitHub Followers vs Following: What’s the Difference?",
    intro: "GitHub exposes two different public relationship lists: followers and following. Comparing them gives you a clearer view of one-way and two-way connections.",
    highlights: ["Followers are accounts following you", "Following are accounts you follow", "Mutuals appear in both lists"],
    sections: [
      { heading: "Followers", paragraphs: ["Followers are GitHub accounts that follow a profile. They can see public activity more easily through GitHub’s social features, but a follower does not need to be followed back."] },
      { heading: "Following", paragraphs: ["Following is the list of accounts a profile chooses to follow. When an account is in following but not followers, that is a current one-way relationship rather than proof of a historical unfollow."] },
      { heading: "Compare the lists", paragraphs: ["Githubster turns the two public lists into followers, following, mutuals, not following back, and not followed back views. This is faster to review than switching between GitHub profile pages."] },
    ],
    faqs: [
      { question: "Can someone follow me without me following them?", answer: "Yes. A follower relationship on GitHub can be one-way." },
      { question: "What is a mutual on GitHub?", answer: "A mutual is an account that both follows you and is followed by you." },
    ],
  },
  {
    slug: "github-api-rate-limits-for-followers",
    title: "GitHub API Rate Limits for Followers and Following Lists | Githubster",
    description: "Understand GitHub API rate limits when checking public followers and following lists, and when an optional token helps in Githubster.",
    h1: "GitHub API Rate Limits for Followers and Following Lists",
    intro: "Large GitHub follower and following lists can require several API requests. GitHub applies rate limits to protect its API, which can affect how quickly a public profile comparison completes.",
    highlights: ["Public API requests have rate limits", "Larger lists need pagination", "Optional tokens can raise the limit"],
    sections: [
      { heading: "Why follower checks use multiple requests", paragraphs: ["GitHub returns public followers and following lists in pages. A profile with many connections requires more pages, which means more API requests than a small profile."] },
      { heading: "When to use an optional token", paragraphs: ["If GitHub reports a rate limit or you need to inspect a larger public profile, Githubster can use an optional fine-grained personal access token for direct requests to GitHub. Use the minimum permissions and an expiration date."] },
      { heading: "Keep the token private", paragraphs: ["Never paste a token into an untrusted site. Githubster keeps an optional token in the current page session and sends it directly to GitHub for the requested API calls."] },
    ],
    faqs: [
      { question: "Does Githubster store my token?", answer: "No. The optional token stays in the current page session and is not saved to localStorage or sent to Githubster application servers." },
      { question: "Do public follower lists require a token?", answer: "No. Public GitHub data can be requested without a token, subject to GitHub’s unauthenticated rate limits." },
    ],
  },
];

export function getSeoPage(kind: "tools" | "guides", slug: string): SeoPage | undefined {
  return (kind === "tools" ? toolPages : guidePages).find((page) => page.slug === slug);
}
