"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { FollowersIcon, LockIcon, NotFollowingBackIcon } from "@/components/icons";
import { useLocale } from "@/lib/locale-context";
import { homeFaq } from "@/lib/home-faq-content";
import { getLocalizedSeoPage, seoLabels } from "@/lib/localized-seo-content";
import { guidePages, toolPages } from "@/lib/seo-content";
import { cx, focusRing } from "@/lib/ui";

type Feature = { title: string; description: string; icon: ComponentType<{ size?: number }>; tone: string };

export function FeatureCards({ features }: { features: Feature[] }) {
  return (
    <ul className="grid gap-4 text-start sm:grid-cols-3">
      {features.map(({ title, description, icon: Icon, tone }) => (
        <li key={title} className="relative rounded-3xl border border-line bg-card p-6 shadow-[var(--shadow)]">
          <span aria-hidden="true" className="absolute end-5 top-5 flex gap-1">
            <span className="size-1.5 rounded-full bg-line" />
            <span className="size-1.5 rounded-full bg-line" />
            <span className="size-1.5 rounded-full bg-line" />
          </span>
          <span className={cx("flex size-11 items-center justify-center rounded-2xl", tone)}>
            <Icon size={22} />
          </span>
          <h3 className="mt-4 text-[15px] font-semibold text-fg">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{description}</p>
        </li>
      ))}
    </ul>
  );
}

/** Questions people ask before trying the tool; the same items are published as FAQPage structured data. */
function HomeFaq() {
  const { locale } = useLocale();

  return (
    <section aria-labelledby="faq-title" className="mx-auto mt-14 max-w-3xl text-start">
      <h2 id="faq-title" className="text-center font-display text-xl font-bold tracking-tight text-fg sm:text-2xl">
        {seoLabels[locale].faq}
      </h2>
      <div className="mt-6 space-y-2.5">
        {homeFaq[locale].map(({ question, answer }) => (
          <details key={question} className="group rounded-2xl border border-line bg-card shadow-[var(--shadow)]">
            <summary
              className={cx(
                "flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-[15px] font-semibold text-fg [&::-webkit-details-marker]:hidden",
                focusRing
              )}
            >
              <h3>{question}</h3>
              <span
                aria-hidden="true"
                className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand transition-transform group-open:rotate-45"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M7 2v10M2 7h10" />
                </svg>
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-fg-muted">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** SEO-friendly explanation below the desktop, plus internal links to tools and guides. */
export function AboutSection() {
  const { t, locale } = useLocale();
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-6 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="about-title" className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
            {t.seo.title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-fg-muted">{t.seo.description}</p>
        </div>

        <div className="mt-10">
          <FeatureCards
            features={[
              {
                title: t.seo.feature1Title,
                description: t.seo.feature1Desc,
                icon: NotFollowingBackIcon,
                tone: "bg-orange-100 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300",
              },
              {
                title: t.seo.feature2Title,
                description: t.seo.feature2Desc,
                icon: FollowersIcon,
                tone: "bg-violet-100 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300",
              },
              {
                title: t.seo.feature3Title,
                description: t.seo.feature3Desc,
                icon: LockIcon,
                tone: "bg-emerald-100 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
              },
            ]}
          />
        </div>

        <HomeFaq />

        <nav className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Githubster tools and guides">
          {[...toolPages, ...guidePages].map((sourcePage, index) => {
            const kind = index < toolPages.length ? "tools" : "guides";
            const page = getLocalizedSeoPage(locale, sourcePage);
            return (
              <Link
                key={page.slug}
                href={`${prefix}/${kind}/${page.slug}`}
                className={cx(
                  "rounded-full border border-line bg-card px-3.5 py-1.5 text-xs pointer-coarse:py-3 font-medium text-fg-muted transition-colors hover:border-brand/40 hover:text-fg",
                  focusRing
                )}
              >
                {page.h1}
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
