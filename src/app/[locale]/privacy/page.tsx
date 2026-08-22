import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyPageContent } from "@/components/privacy-page";
import { locales, type Locale } from "@/lib/i18n";
import { privacyContent, privacyLanguageAlternates } from "@/lib/privacy-content";

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
    openGraph: { title: `${content.title} | Githubster`, description: content.description, url: `/${locale}/privacy`, locale },
    twitter: { card: "summary_large_image", title: `${content.title} | Githubster`, description: content.description, images: ["/og-image.png"] },
  };
}

export default async function LocalizedPrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <PrivacyPageContent locale={locale as Locale} />;
}
