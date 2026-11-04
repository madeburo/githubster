import type { Metadata } from "next";
import { SeoIndexPage } from "@/components/seo-index-page";
import { getSeoIndexContent, seoLanguageAlternates } from "@/lib/localized-seo-content";
import { pageSocial } from "@/lib/site";

const { title, description } = getSeoIndexContent("en", "guides");

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/guides", languages: seoLanguageAlternates("/guides") },
  ...pageSocial({ title, description, path: "/guides" }),
};

export default function IndexPage() {
  return <SeoIndexPage locale="en" kind="guides" />;
}
