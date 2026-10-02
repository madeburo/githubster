import { homeFaq } from "@/lib/home-faq-content";
import type { Locale } from "@/lib/i18n";

/** FAQPage structured data for the homepage, built from the same items as the visible FAQ. */
export function HomeFaqJsonLd({ locale }: { locale: Locale }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: homeFaq[locale].map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
