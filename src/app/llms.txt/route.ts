import { locales, localeNames } from "@/lib/i18n";
import { guidePages, toolPages, type SeoPage } from "@/lib/seo-content";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

function links(kind: "tools" | "guides", pages: SeoPage[]) {
  return pages.map((page) => `- [${page.h1}](${siteUrl}/${kind}/${page.slug}): ${page.description}`).join("\n");
}

/** Plain-language summary for AI assistants and answer engines (https://llmstxt.org). */
export function GET() {
  const languages = locales.map((locale) => localeNames[locale]).join(", ");

  const body = `# Githubster

> Githubster is a free, open-source GitHub followers checker. Enter any public GitHub username to compare its followers and following lists and see mutuals, accounts that do not follow back, accounts the user does not follow back, and a profile overview. No Githubster account is required.

## How it works

- Runs in the browser and reads public data directly from the GitHub REST API; there is no Githubster login.
- Results are a snapshot of the current public lists. Githubster does not store history, so it cannot tell when someone unfollowed.
- "Not following back" means accounts the user follows that do not follow them; "You don't follow" means followers the user does not follow back; "Mutuals" follow each other.
- The profile overview shows the user's own (non-fork) public repositories, total stars and top languages.
- Without a token GitHub allows 60 API requests per hour per IP address, enough for a little under 6,000 followers and following combined. An optional personal access token raises this to 5,000 requests per hour. The token is sent only to GitHub and is not saved or sent to Githubster.
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
- Available in ${locales.length} languages: ${languages}. Localized pages live under a language prefix, for example ${siteUrl}/de
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
