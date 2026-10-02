import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoIndexPage } from "@/components/seo-index-page";
import { locales, type Locale } from "@/lib/i18n";
import { seoLabels, seoLanguageAlternates } from "@/lib/localized-seo-content";
import { translations } from "@/lib/translations";
import { pageSocial } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") return {};
  const activeLocale = locale as Locale;
  const title = `${seoLabels[activeLocale].tools} | Githubster`;
  const description = translations[activeLocale].seo.description;
  return {
    title,
    description,
    alternates: { canonical: `/${locale}/tools`, languages: seoLanguageAlternates("/tools") },
    ...pageSocial({ title, description, path: `/${locale}/tools`, locale: activeLocale }),
  };
}

export default async function LocalizedToolsPage({ params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SeoIndexPage locale={locale as Locale} kind="tools" />;
}
