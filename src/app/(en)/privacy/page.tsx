import type { Metadata } from "next";
import { PrivacyPageShell } from "@/components/privacy-page-shell";
import { privacyContent, privacyLanguageAlternates } from "@/lib/privacy-content";
import { pageSocial } from "@/lib/site";

const content = privacyContent.en;

export const metadata: Metadata = {
  title: `${content.title} | Githubster`,
  description: content.description,
  alternates: { canonical: "/privacy", languages: privacyLanguageAlternates() },
  ...pageSocial({ title: `${content.title} | Githubster`, description: content.description, path: "/privacy" }),
};

export default function PrivacyPage() {
  return <PrivacyPageShell locale="en" />;
}
