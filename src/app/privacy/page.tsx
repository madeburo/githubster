import type { Metadata } from "next";
import { PrivacyPageContent } from "@/components/privacy-page";
import { privacyContent, privacyLanguageAlternates } from "@/lib/privacy-content";

const content = privacyContent.en;

export const metadata: Metadata = {
  title: `${content.title} | Githubster`,
  description: content.description,
  alternates: { canonical: "/privacy", languages: privacyLanguageAlternates() },
  openGraph: { title: `${content.title} | Githubster`, description: content.description, url: "/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyPageContent locale="en" />;
}
