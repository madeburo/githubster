import { StructuredData } from "@/components/structured-data";
import { locales, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import { translations } from "@/lib/translations";

export function JsonLd({ locale }: { locale: Locale }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Githubster",
        url: siteUrl,
        inLanguage: locales,
        publisher: { "@id": `${siteUrl}/#publisher` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#publisher`,
        name: "MadeBuro",
        alternateName: "Made Büro",
        url: "https://github.com/madeburo",
      },
      {
        "@type": "WebApplication",
        "@id": `${siteUrl}/#application`,
        name: "Githubster",
        url: "https://www.githubster.com",
        description: translations[locale].seo.description,
        inLanguage: locales,
        sameAs: "https://github.com/madeburo/githubster",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        author: { "@id": `${siteUrl}/#publisher` },
        publisher: { "@id": `${siteUrl}/#publisher` },
        license: "https://opensource.org/licenses/MIT",
        isAccessibleForFree: true,
        browserRequirements: "Requires JavaScript",
      },
    ],
  };

  return <StructuredData data={structuredData} />;
}
