import Link from "next/link";
import { SitePageChrome } from "@/components/site-page-chrome";
import { StructuredData } from "@/components/structured-data";
import { isRtl, type Locale } from "@/lib/i18n";
import { getSeoIndexContent } from "@/lib/localized-seo-content";
import { getLocalizedSeoPage } from "@/lib/seo-pages";
import { guidePages, toolPages } from "@/lib/seo-content";
import { siteUrl } from "@/lib/site";
import { cx, focusRing } from "@/lib/ui";

export function SeoIndexPage({ locale, kind }: { locale: Locale; kind: "tools" | "guides" }) {
  const copy = getSeoIndexContent(locale, kind);
  const pages = (kind === "tools" ? toolPages : guidePages).map((page) => getLocalizedSeoPage(locale, page));
  const prefix = locale === "en" ? "" : `/${locale}`;
  const url = `${siteUrl}${prefix}/${kind}`;

  return (
    <SitePageChrome locale={locale}>
      <main dir={isRtl(locale) ? "rtl" : "ltr"} className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <h1 className="text-3xl font-bold text-fg sm:text-5xl">{copy.heading}</h1>
        <p className="mt-5 text-lg leading-relaxed text-fg-muted">{copy.description}</p>
        <div className={`mt-10 ${kind === "tools" ? "grid gap-4 sm:grid-cols-2" : "space-y-4"}`}>
          {pages.map((page) => (
            <Link key={page.slug} href={`${prefix}/${kind}/${page.slug}`} className={cx("block rounded-xl border border-line bg-card p-5 transition-colors hover:bg-card-hover", focusRing)}>
              <h2 className="font-semibold text-fg">{page.h1}</h2>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{page.description}</p>
            </Link>
          ))}
        </div>
        <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${url}#webpage`,
          url,
          name: copy.heading,
          description: copy.description,
          inLanguage: locale,
          isPartOf: { "@id": `${siteUrl}/#website` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: pages.map((page, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: page.h1,
              url: `${siteUrl}${prefix}/${kind}/${page.slug}`,
            })),
          },
        }} />
      </main>
    </SitePageChrome>
  );
}
