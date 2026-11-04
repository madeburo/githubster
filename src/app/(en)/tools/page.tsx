import type { Metadata } from "next";
import { SeoIndexPage } from "@/components/seo-index-page";
import { getSeoIndexContent, seoLanguageAlternates } from "@/lib/localized-seo-content";
import { pageSocial } from "@/lib/site";

const { title, description } = getSeoIndexContent("en", "tools");

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/tools", languages: seoLanguageAlternates("/tools") },
  ...pageSocial({ title, description, path: "/tools" }),
};

export default function IndexPage() {
  return <SeoIndexPage locale="en" kind="tools" />;
}
