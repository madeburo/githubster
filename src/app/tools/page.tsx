import type { Metadata } from "next";
import Link from "next/link";
import { toolPages } from "@/lib/seo-content";

export const metadata: Metadata = {
  title: "Free GitHub Tools — Followers, Mutuals & Profile Overview | Githubster",
  description: "Free tools to compare public GitHub followers and following lists, find mutuals, and view repository profile insights.",
  alternates: { canonical: "/tools" },
};

export default function ToolsIndexPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
      <p className="text-sm font-medium" style={{ color: "var(--gradient-start)" }}>Githubster tools</p>
      <h1 className="mt-3 text-3xl font-bold sm:text-5xl" style={{ color: "var(--text)" }}>Free GitHub relationship tools</h1>
      <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>Use public GitHub data to compare followers, following, mutuals, and profile insights.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {toolPages.map((page) => (
          <Link key={page.slug} href={`/tools/${page.slug}`} className="rounded-xl border p-5 transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
            <h2 className="font-semibold" style={{ color: "var(--text)" }}>{page.h1}</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{page.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
