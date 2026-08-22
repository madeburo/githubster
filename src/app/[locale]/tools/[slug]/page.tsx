import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPage } from "@/components/seo-page";
import { locales, type Locale } from "@/lib/i18n";
import { getLocalizedSeoPage, seoLanguageAlternates } from "@/lib/localized-seo-content";
import { getSeoPage, toolPages } from "@/lib/seo-content";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").flatMap((locale) => toolPages.map(({ slug }) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") return {};
  const source = getSeoPage("tools", slug);
  if (!source) return {};
  const page = getLocalizedSeoPage(locale as Locale, source);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${locale}/tools/${slug}`, languages: seoLanguageAlternates(`/tools/${slug}`) },
    openGraph: { title: page.title, description: page.description, url: `/${locale}/tools/${slug}`, locale },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/og-image.png"] },
  };
}

export default async function LocalizedToolPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  const source = getSeoPage("tools", slug);
  if (!source) notFound();
  return <SeoPage page={getLocalizedSeoPage(locale as Locale, source)} kind="tools" locale={locale} />;
}
