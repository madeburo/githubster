import Link from "next/link";
import type { SeoPage } from "@/lib/seo-content";

interface SeoPageProps {
  page: SeoPage;
  kind: "tools" | "guides";
}

export function SeoPage({ page, kind }: SeoPageProps) {
  const path = `/${kind}/${page.slug}`;

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
      <nav className="mb-8 text-sm" aria-label="Breadcrumb" style={{ color: "var(--text-muted)" }}>
        <Link href="/" className="hover:underline">Githubster</Link>
        <span aria-hidden="true"> / </span>
        <span>{kind === "tools" ? "Tools" : "Guides"}</span>
      </nav>

      <article>
        <p className="text-sm font-medium" style={{ color: "var(--gradient-start)" }}>
          {kind === "tools" ? "Free GitHub tool" : "Githubster guide"}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl" style={{ color: "var(--text)" }}>
          {page.h1}
        </h1>
        <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {page.intro}
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {page.highlights.map((highlight) => (
            <li key={highlight} className="rounded-xl border p-4 text-sm" style={{ borderColor: "var(--border)", background: "var(--bg-card)", color: "var(--text-muted)" }}>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl border p-6" style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
          <h2 className="text-lg font-semibold" style={{ color: "var(--text)" }}>Try Githubster</h2>
          <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>Enter a public GitHub username to compare followers, following, and mutual connections.</p>
          <Link href="/" className="mt-4 inline-flex rounded-lg px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90" style={{ background: "var(--gradient-start)" }}>
            Open Githubster
          </Link>
        </div>

        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-relaxed" style={{ color: "var(--text-muted)" }}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="mt-12 border-t pt-10" style={{ borderColor: "var(--border)" }}>
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>Frequently asked questions</h2>
          <div className="mt-5 space-y-5">
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-medium" style={{ color: "var(--text)" }}>{faq.question}</h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Githubster", item: "https://www.githubster.com" },
                  { "@type": "ListItem", position: 2, name: kind === "tools" ? "Tools" : "Guides", item: `https://www.githubster.com/${kind}` },
                  { "@type": "ListItem", position: 3, name: page.h1, item: `https://www.githubster.com${path}` },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: page.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
            ],
          }),
        }}
      />
    </main>
  );
}
