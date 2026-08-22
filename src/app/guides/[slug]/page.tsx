import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPage } from "@/components/seo-page";
import { getSeoPage, guidePages } from "@/lib/seo-content";
import { seoLanguageAlternates } from "@/lib/localized-seo-content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guidePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getSeoPage("guides", (await params).slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/guides/${page.slug}`, languages: seoLanguageAlternates(`/guides/${page.slug}`) },
    openGraph: { title: page.title, description: page.description, url: `/guides/${page.slug}` },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const page = getSeoPage("guides", (await params).slug);
  if (!page) notFound();
  return <SeoPage page={page} kind="guides" />;
}
