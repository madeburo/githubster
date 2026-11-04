import { detailedSeoPages } from "./detailed-seo-content";
import type { Locale } from "./i18n";
import { getSeoHighlights, getSeoPageSummary } from "./localized-seo-content";
import type { SeoPage } from "./seo-content";
import { translations } from "./translations";

/** Full articles are used by server-rendered pages; the desktop only imports small summaries. */
export function getLocalizedSeoPage(locale: Locale, page: SeoPage): SeoPage {
  if (locale === "en") return page;
  if (locale === "ru" || locale === "id") {
    const localized = detailedSeoPages[locale].find(({ slug }) => slug === page.slug);
    if (!localized) throw new Error(`Missing ${locale} SEO page: ${page.slug}`);
    return localized;
  }
  const summary = getSeoPageSummary(locale, page);
  const t = translations[locale];
  return {
    ...page,
    ...summary,
    intro: summary.description,
    highlights: getSeoHighlights(locale, page.slug),
    sections: [{ heading: summary.h1, paragraphs: [summary.description] }],
    faqs: page.slug === "what-is-github" ? [] : [
      { question: t.search.tokenToggle, answer: t.search.tokenPrivacy },
      { question: t.error.rateLimit, answer: t.error.rateLimitDesc },
    ],
  };
}
