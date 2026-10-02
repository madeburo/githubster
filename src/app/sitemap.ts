import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { guidePages, toolPages } from "@/lib/seo-content";
import { languageAlternates } from "@/lib/site";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

/**
 * Date of the last commit touching the given sources, so `lastmod` only moves when that content
 * really changed. The sitemap is generated at build time; without git history the field is omitted.
 */
function lastCommitDate(...paths: string[]): Date | undefined {
  try {
    const output = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...paths], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return output ? new Date(output) : undefined;
  } catch {
    return undefined;
  }
}

/** One entry per locale for a route, each listing every language version as an alternate. */
function localizedEntries(
  path: string,
  options: { changeFrequency: ChangeFrequency; priority: number; lastModified?: Date }
): MetadataRoute.Sitemap {
  const languages = languageAlternates(path);

  return locales.map((locale) => ({
    url: languages[locale],
    lastModified: options.lastModified,
    changeFrequency: options.changeFrequency,
    // Localized copies rank slightly below the English original, as before.
    priority: locale === "en" ? options.priority : Math.round((options.priority - 0.1) * 10) / 10,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homeUpdated = lastCommitDate("src/components/home-page.tsx", "src/components/desktop", "src/lib/translations");
  const seoUpdated = lastCommitDate("src/lib/seo-content.ts", "src/lib/localized-seo-content.ts", "src/components/seo-page.tsx");
  const privacyUpdated = lastCommitDate("src/lib/privacy-content.ts");

  return [
    ...localizedEntries("", { changeFrequency: "weekly", priority: 1, lastModified: homeUpdated }),
    ...localizedEntries("/tools", { changeFrequency: "monthly", priority: 0.8, lastModified: seoUpdated }),
    ...toolPages.flatMap(({ slug }) =>
      localizedEntries(`/tools/${slug}`, { changeFrequency: "monthly", priority: 0.9, lastModified: seoUpdated })
    ),
    ...localizedEntries("/guides", { changeFrequency: "monthly", priority: 0.7, lastModified: seoUpdated }),
    ...guidePages.flatMap(({ slug }) =>
      localizedEntries(`/guides/${slug}`, { changeFrequency: "monthly", priority: 0.8, lastModified: seoUpdated })
    ),
    ...localizedEntries("/privacy", { changeFrequency: "yearly", priority: 0.3, lastModified: privacyUpdated }),
  ];
}
