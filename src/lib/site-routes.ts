import { locales } from "./i18n";
import { guidePages, toolPages } from "./seo-content";
import { languageAlternates } from "./site";

/** Canonical, indexable document routes; never include transient profile query strings. */
export function publicPageUrls(): string[] {
  const paths = [
    "",
    "/tools",
    ...toolPages.map(({ slug }) => `/tools/${slug}`),
    "/guides",
    ...guidePages.map(({ slug }) => `/guides/${slug}`),
    "/privacy",
  ];
  return paths.flatMap((path) => {
    const languages = languageAlternates(path);
    return locales.map((locale) => languages[locale]);
  });
}
