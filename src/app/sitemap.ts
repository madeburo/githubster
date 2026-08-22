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
      url: `${siteUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...locales.filter((locale) => locale !== "en").map((locale) => ({
      url: `${siteUrl}/${locale}/privacy`,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
    {
      url: `${siteUrl}/tools`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...locales.filter((locale) => locale !== "en").map((locale) => ({
      url: `${siteUrl}/${locale}/tools`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...toolPages.map(({ slug }) => ({
      url: `${siteUrl}/tools/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...locales.filter((locale) => locale !== "en").flatMap((locale) => toolPages.map(({ slug }) => ({
      url: `${siteUrl}/${locale}/tools/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))),
    {
      url: `${siteUrl}/guides`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...locales.filter((locale) => locale !== "en").map((locale) => ({
      url: `${siteUrl}/${locale}/guides`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...guidePages.map(({ slug }) => ({
      url: `${siteUrl}/guides/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...locales.filter((locale) => locale !== "en").flatMap((locale) => guidePages.map(({ slug }) => ({
      url: `${siteUrl}/${locale}/guides/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))),
  ];
}
