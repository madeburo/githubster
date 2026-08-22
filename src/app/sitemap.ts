import type { MetadataRoute } from "next";
import { guidePages, toolPages } from "@/lib/seo-content";
import { locales } from "@/lib/i18n";

const siteUrl = "https://www.githubster.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...locales
      .filter((locale) => locale !== "en")
      .map((locale) => ({
        url: `${siteUrl}/${locale}`,
        changeFrequency: "weekly" as const,
        priority: 0.9,
      })),
    {
      url: `${siteUrl}/tools`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...toolPages.map(({ slug }) => ({
      url: `${siteUrl}/tools/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${siteUrl}/guides`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...guidePages.map(({ slug }) => ({
      url: `${siteUrl}/guides/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
