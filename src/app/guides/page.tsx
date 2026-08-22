import type { Metadata } from "next";
import Link from "next/link";
import { SitePageChrome } from "@/components/site-page-chrome";
import { guidePages } from "@/lib/seo-content";
import { seoLanguageAlternates } from "@/lib/localized-seo-content";

export const metadata: Metadata = {
  title: "GitHub Followers Guides | Githubster",
  description: "Practical guides to GitHub followers, following, mutuals, and API rate limits.",
  alternates: { canonical: "/guides", languages: seoLanguageAlternates("/guides") },
};

export default function GuidesIndexPage() {
  return (
    <SitePageChrome locale="en">
    <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="text-3xl font-bold sm:text-5xl" style={{ color: "var(--text)" }}>Understand public GitHub relationships</h1>
      <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>Short, practical explanations of GitHub followers, following, mutuals, and API limits.</p>
      <div className="mt-10 space-y-4">
        {guidePages.map((page) => (
          <Link key={page.slug} href={`/guides/${page.slug}`} className="block rounded-xl border p-5 transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
            <h2 className="font-semibold" style={{ color: "var(--text)" }}>{page.h1}</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{page.description}</p>
          </Link>
        ))}
      </div>
    </main>
    </SitePageChrome>
  );
}
