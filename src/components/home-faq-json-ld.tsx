import { homeFaq } from "@/lib/home-faq-content";
import type { Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import { translations } from "@/lib/translations";
import { StructuredData } from "@/components/structured-data";

/** FAQPage structured data for the homepage, built from the same items as the visible FAQ. */
export function HomeFaqJsonLd({ locale }: { locale: Locale }) {
  const url = `${siteUrl}${locale === "en" ? "/" : `/${locale}`}`;
  const t = translations[locale];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: t.hero.title,
        description: t.seo.description,
        inLanguage: locale,
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/#application` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        inLanguage: locale,
        mainEntity: homeFaq[locale].map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return <StructuredData data={structuredData} />;
}
