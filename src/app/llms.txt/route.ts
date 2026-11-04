import { locales, localeNames } from "@/lib/i18n";
import { guidePages, toolPages, type SeoPage } from "@/lib/seo-content";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

function links(kind: "tools" | "guides", pages: SeoPage[]) {
  return pages.map((page) => `- [${page.h1}](${siteUrl}/${kind}/${page.slug}): ${page.description}`).join("\n");
}

/** Optional discovery summary; ordinary crawlable pages remain the source of truth. */
export function GET() {
  const languageLinks = locales.map((locale) => `- [${localeNames[locale]}](${siteUrl}${locale === "en" ? "" : `/${locale}`}): ${locale}`).join("\n");

  const body = `# Githubster

> Githubster is a free, open-source GitHub followers checker. Enter any public GitHub username to compare its followers and following lists and see mutuals, accounts that do not follow back, accounts the user does not follow back, and a profile overview. No Githubster account is required.

## How it works

- Runs in the browser and reads public data directly from the GitHub REST API; there is no Githubster login.
- Results are a snapshot of the current public lists. Githubster does not store history, so it cannot tell when someone unfollowed.
- "Not following back" means accounts the user follows that do not follow them; "You don't follow" means followers the user does not follow back; "Mutuals" follow each other.
- The profile overview shows the user's own (non-fork) public repositories, total stars and top languages.
- GitHub's primary limit is normally 60 unauthenticated API requests per hour per IP address, or 5,000 authenticated requests per hour per user with a personal access token. Lists are paginated at up to 100 accounts per request; available limits and additional rate limits still apply. The optional token is sent only to GitHub and is not saved or sent to Githubster.
- Githubster only reads data. It does not follow or unfollow accounts for the user, and it is an independent open-source project rather than an official GitHub service.
- A profile can be opened by link: ${siteUrl}/?user=USERNAME

## Tools

${links("tools", toolPages)}

## Guides

${links("guides", guidePages)}

## Project

- [Homepage](${siteUrl}): the followers checker itself
- [Source code](https://github.com/madeburo/githubster): MIT-licensed, built with Next.js and React
- [Privacy policy](${siteUrl}/privacy)
- Contact: hi@githubster.com

## Languages

Available in ${locales.length} languages. Each localized homepage links to its tools, guides and privacy page. The URL determines the page language.

${languageLinks}

## Official API references

- [GitHub followers API](https://docs.github.com/en/rest/users/followers)
- [GitHub REST API rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
