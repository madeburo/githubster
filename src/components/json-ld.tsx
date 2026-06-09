export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Githubster",
    url: "https://www.githubster.com",
    description:
      "Free open-source tool to see who doesn't follow you back on GitHub, discover your fans, and manage your following list.",
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
