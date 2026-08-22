import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPage } from "@/components/seo-page";
import { getSeoPage, toolPages } from "@/lib/seo-content";
import { seoLanguageAlternates } from "@/lib/localized-seo-content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return toolPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getSeoPage("tools", (await params).slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/tools/${page.slug}`, languages: seoLanguageAlternates(`/tools/${page.slug}`) },
    openGraph: { title: page.title, description: page.description, url: `/tools/${page.slug}` },
  };
}

export default async function ToolPage({ params }: PageProps) {
  const page = getSeoPage("tools", (await params).slug);
  if (!page) notFound();
  return <SeoPage page={page} kind="tools" />;
}
