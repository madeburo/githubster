import Link from "next/link";
import { SitePageChrome } from "@/components/site-page-chrome";
import { StructuredData } from "@/components/structured-data";
import { explorerLabels } from "@/lib/explorer-content";
import { isRtl, type Locale } from "@/lib/i18n";
import { seoLabels, seoSourceLabels } from "@/lib/localized-seo-content";
import type { SeoPage } from "@/lib/seo-content";
import { seoSourcesFor } from "@/lib/seo-sources";
import { siteUrl } from "@/lib/site";
import { translations } from "@/lib/translations";
import { cx, focusRing } from "@/lib/ui";

interface SeoPageProps {
  page: SeoPage;
  kind: "tools" | "guides";
  locale?: Locale;
}

export function SeoPage({ page, kind, locale = "en" }: SeoPageProps) {
  const labels = seoLabels[locale];
  const t = translations[locale];
  const prefix = locale === "en" ? "" : `/${locale}`;
  const path = `${prefix}/${kind}/${page.slug}`;
  const url = `${siteUrl}${path}`;
  const sources = seoSourcesFor(page.slug);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Githubster", item: `${siteUrl}${prefix}` },
        { "@type": "ListItem", position: 2, name: labels[kind], item: `${siteUrl}${prefix}/${kind}` },
        { "@type": "ListItem", position: 3, name: page.h1, item: url },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.h1,
      description: page.description,
      inLanguage: locale,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#application` },
      citation: sources.map(({ url }) => url),
      ...(kind === "guides" ? { mainEntity: { "@id": `${url}#article` } } : {}),
    },
  ];
  if (kind === "guides") {
    graph.push({
      "@type": "TechArticle",
      "@id": `${url}#article`,
      url,
      headline: page.h1,
      description: page.description,
      inLanguage: locale,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      author: { "@id": `${siteUrl}/#publisher` },
      publisher: { "@id": `${siteUrl}/#publisher` },
      citation: sources.map(({ url }) => url),
    });
  }
  if (page.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: locale,
      isPartOf: { "@id": `${url}#webpage` },
      mainEntity: page.faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
  }

  return (
    <SitePageChrome locale={locale}>
      <main dir={isRtl(locale) ? "rtl" : "ltr"} className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-xs text-fg-muted">
          <Link href={prefix || "/"} className={cx("rounded hover:text-fg", focusRing)}>{explorerLabels[locale].home}</Link>
          <span aria-hidden="true">/</span>
          <Link href={`${prefix}/${kind}`} className={cx("rounded hover:text-fg", focusRing)}>{labels[kind]}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{page.h1}</span>
        </nav>
        <article>
          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">{page.h1}</h1>
          <p className="mt-5 text-lg leading-relaxed text-fg-muted">{page.intro}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {page.highlights.map((highlight) => (
              <li key={highlight} className="rounded-xl border border-line bg-card p-4 text-sm text-fg-muted">{highlight}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-line bg-card p-6">
            <h2 className="text-lg font-semibold text-fg">Githubster</h2>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{t.seo.feature3Desc}</p>
            <Link href={prefix || "/"} className={cx("mt-4 inline-flex rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white dark:text-[var(--signal-ink)]", focusRing)}>
              {t.search.button}
            </Link>
          </div>
          <div className="mt-12 space-y-10">
            {page.sections.map(({ heading, paragraphs }) => (
              <section key={heading}>
                <h2 className="text-2xl font-semibold text-fg">{heading}</h2>
                {paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 leading-relaxed text-fg-muted">{paragraph}</p>)}
              </section>
            ))}
          </div>
          {page.faqs.length > 0 && (
            <section id="faq" className="mt-12 border-t border-line pt-10">
              <h2 className="text-2xl font-semibold text-fg">{labels.faq}</h2>
              <div className="mt-5 space-y-5">
                {page.faqs.map(({ question, answer }) => (
                  <div key={question}>
                    <h3 className="font-medium text-fg">{question}</h3>
                    <p className="mt-1 leading-relaxed text-fg-muted">{answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          <aside className="mt-12 border-t border-line pt-8" aria-labelledby="sources-title">
            <h2 id="sources-title" className="text-sm font-semibold text-fg">{seoSourceLabels[locale]}</h2>
            <ul className="mt-3 space-y-2 text-sm text-fg-muted">
              {sources.map(({ name, url }) => (
                <li key={url}><a href={url} lang="en" className={cx("rounded underline decoration-line underline-offset-4 hover:text-fg", focusRing)}>{name}</a></li>
              ))}
            </ul>
          </aside>
        </article>
        <StructuredData data={{ "@context": "https://schema.org", "@graph": graph }} />
      </main>
    </SitePageChrome>
  );
}
