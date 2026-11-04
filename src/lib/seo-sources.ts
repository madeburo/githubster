const followers = {
  name: "GitHub Docs — REST API: followers",
  url: "https://docs.github.com/en/rest/users/followers",
};
const rateLimits = {
  name: "GitHub Docs — REST API rate limits",
  url: "https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api",
};
const repositories = {
  name: "GitHub Docs — REST API: repositories",
  url: "https://docs.github.com/en/rest/repos/repos",
};
const about = {
  name: "GitHub Docs — About GitHub and Git",
  url: "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git",
};

export function seoSourcesFor(slug: string) {
  if (slug === "what-is-github") return [about, followers];
  if (slug === "github-api-rate-limits-for-followers") return [rateLimits, followers];
  if (slug === "github-profile-overview") return [repositories, rateLimits];
  return [followers, rateLimits];
}
