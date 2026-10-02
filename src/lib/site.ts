import type { Metadata } from "next";
import { locales, type Locale } from "./i18n";

export const siteUrl = "https://www.githubster.com";

const ogImages = [{ url: "/og-image.png", width: 1200, height: 630, alt: "Githubster" }];

/** hreflang map for a route that exists in every locale; `path` is the English path ("" for home). */
export function languageAlternates(path = ""): Record<string, string> {
  const urlFor = (locale: Locale) => `${siteUrl}${locale === "en" ? "" : `/${locale}`}${path}`;
  return {
    "x-default": urlFor("en"),
    ...Object.fromEntries(locales.map((locale) => [locale, urlFor(locale)])),
  };
}

/**
 * Open Graph and Twitter metadata for one page. Next.js replaces these objects wholesale when a page
 * defines its own, so every page builds them here to keep the shared image, site name and card type.
 */
export function pageSocial({
  title,
  description,
  path,
  locale = "en",
}: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      siteName: "Githubster",
      locale: locale === "en" ? "en_US" : locale,
      url: path,
      title,
      description,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

/** Defaults shared by both root layouts; pages override what differs. */
export const baseMetadata: Metadata = {
  title: "GitHub Followers Checker — Find Who Doesn’t Follow Back | Githubster",
  description:
    "Compare public GitHub followers and following lists to find people who do not follow back, mutuals, and profile insights. Free and no Githubster account required.",
  authors: [{ name: "Made Büro", url: "https://github.com/madeburo" }],
  creator: "Made Büro",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.githubster.com",
    siteName: "Githubster",
    title: "GitHub Followers Checker — Find Who Doesn’t Follow Back | Githubster",
    description:
      "Compare public GitHub followers and following lists to find people who do not follow back, mutuals, and profile insights.",
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Followers Checker — Find Who Doesn’t Follow Back | Githubster",
    description:
      "Compare public GitHub followers and following lists. No Githubster account required.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://www.githubster.com",
    languages: languageAlternates(),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true, follow: true,
      "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1,
    },
  },
};
