import Link from "next/link";
import { isRtl, type Locale } from "@/lib/i18n";
import { getLocalizedSeoPage, seoLabels } from "@/lib/localized-seo-content";
import { guidePages, toolPages } from "@/lib/seo-content";
import { translations } from "@/lib/translations";

export function SeoIndexPage({ locale, kind }: { locale: Locale; kind: "tools" | "guides" }) {
  const labels = seoLabels[locale];
  const t = translations[locale];
  const pages = (kind === "tools" ? toolPages : guidePages).map((page) => getLocalizedSeoPage(locale, page));
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <main dir={isRtl(locale) ? "rtl" : "ltr"} className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
      <Link href={prefix || "/"} className="text-sm font-medium hover:underline" style={{ color: "var(--gradient-start)" }}>Githubster</Link>
      <h1 className="mt-3 text-3xl font-bold sm:text-5xl" style={{ color: "var(--text)" }}>{labels[kind]}</h1>
      <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>{t.seo.description}</p>
      <div className={`mt-10 ${kind === "tools" ? "grid gap-4 sm:grid-cols-2" : "space-y-4"}`}>
        {pages.map((page) => (
          <Link key={page.slug} href={`${prefix}/${kind}/${page.slug}`} className="block rounded-xl border p-5 transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
            <h2 className="font-semibold" style={{ color: "var(--text)" }}>{page.h1}</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{page.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
