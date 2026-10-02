import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyPageShell } from "@/components/privacy-page-shell";
import { locales, type Locale } from "@/lib/i18n";
import { privacyContent, privacyLanguageAlternates } from "@/lib/privacy-content";
import { pageSocial } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") return {};
  const content = privacyContent[locale as Locale];
  return {
    title: `${content.title} | Githubster`,
    description: content.description,
    alternates: { canonical: `/${locale}/privacy`, languages: privacyLanguageAlternates() },
    ...pageSocial({ title: `${content.title} | Githubster`, description: content.description, path: `/${locale}/privacy`, locale: locale as Locale }),
  };
}

export default async function LocalizedPrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <PrivacyPageShell locale={locale as Locale} />;
}
