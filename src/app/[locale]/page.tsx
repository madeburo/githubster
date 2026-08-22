import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HomePage } from "../page";
import { locales, type Locale } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const siteUrl = "https://www.githubster.com";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") return {};

  const t = translations[locale as Locale];
  const url = `${siteUrl}/${locale}`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((supportedLocale) => [
          supportedLocale,
          supportedLocale === "en" ? siteUrl : `${siteUrl}/${supportedLocale}`,
        ])
      ),
    },
    openGraph: {
      locale: locale.replace("-", "_"),
      url,
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();

  return <HomePage initialLocale={locale as Locale} />;
}
