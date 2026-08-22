export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Githubster",
        url: "https://www.githubster.com",
      },
      {
        "@type": "WebApplication",
        name: "Githubster",
        url: "https://www.githubster.com",
        description: "Free GitHub followers checker to compare public followers, following, mutuals, and people who do not follow back.",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        author: {
          "@type": "Organization",
          name: "Made Büro",
          url: "https://github.com/madeburo",
        },
        license: "https://opensource.org/licenses/MIT",
        isAccessibleForFree: true,
        browserRequirements: "Requires JavaScript",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
