import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HomeFaqJsonLd } from "@/components/home-faq-json-ld";
import { HomePage } from "@/components/home-page";
import { locales, type Locale } from "@/lib/i18n";
import { languageAlternates, pageSocial, siteUrl } from "@/lib/site";
import { translations } from "@/lib/translations";

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
      languages: languageAlternates(),
    },
    ...pageSocial({ title: t.meta.title, description: t.meta.description, path: `/${locale}`, locale: locale as Locale }),
  };
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();

  return (
    <>
      <HomeFaqJsonLd locale={locale as Locale} />
      <HomePage initialLocale={locale as Locale} />
    </>
  );
}
