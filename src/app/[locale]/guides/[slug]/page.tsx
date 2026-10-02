import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPage } from "@/components/seo-page";
import { locales, type Locale } from "@/lib/i18n";
import { getLocalizedSeoPage, seoLanguageAlternates } from "@/lib/localized-seo-content";
import { getSeoPage, guidePages } from "@/lib/seo-content";
import { pageSocial } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() { return locales.filter((locale) => locale !== "en").flatMap((locale) => guidePages.map(({ slug }) => ({ locale, slug }))); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") return {};
  const source = getSeoPage("guides", slug); if (!source) return {};
  const page = getLocalizedSeoPage(locale as Locale, source);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${locale}/guides/${slug}`, languages: seoLanguageAlternates(`/guides/${slug}`) },
    ...pageSocial({ title: page.title, description: page.description, path: `/${locale}/guides/${slug}`, locale: locale as Locale }),
  };
}
export default async function LocalizedGuidePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  const source = getSeoPage("guides", slug); if (!source) notFound();
  return <SeoPage page={getLocalizedSeoPage(locale as Locale, source)} kind="guides" locale={locale} />;
}
