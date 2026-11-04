"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, GitHubIcon, LockIcon } from "@/components/icons";
import { ProjectSupport } from "@/components/project-support";
import { SupportHeart } from "@/components/support-heart";
import { explorerLabels } from "@/lib/explorer-content";
import { useLocale } from "@/lib/locale-context";
import { seoLabels } from "@/lib/localized-seo-content";
import { privacyContent } from "@/lib/privacy-content";
import { cx, focusRing } from "@/lib/ui";

export function SiteFooter({ showSupport = true }: { showSupport?: boolean }) {
  const { t, locale } = useLocale();
  const prefix = locale === "en" ? "" : `/${locale}`;
  const linkClass = cx(
    "tap-target inline-flex min-h-10 max-w-full items-center gap-2.5 rounded text-sm text-fg-muted [overflow-wrap:anywhere] transition-colors hover:text-fg",
    focusRing,
  );

  return (
    <>
      {showSupport && <ProjectSupport />}
      <footer className="site-footer border-t border-line bg-canvas text-start">
        <div className="site-content-width">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 pb-10 pt-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,0.7fr)_minmax(0,1fr)] lg:pb-14 lg:pt-16">
            <div className="col-span-2 md:col-span-1">
              <Link
                href={prefix || "/"}
                aria-label="Githubster"
                className={cx("inline-flex rounded-lg", focusRing)}
              >
                <Image
                  src="/logo.svg"
                  alt=""
                  width={425}
                  height={54}
                  className="h-7 w-auto dark:hidden"
                />
                <Image
                  src="/githubster.svg"
                  alt=""
                  width={425}
                  height={54}
                  className="hidden h-7 w-auto dark:block"
                />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
                {t.hero.title}
              </p>
              <a
                href="https://github.com/madeburo/githubster"
                target="_blank"
                rel="noopener noreferrer"
                className={cx(
                  "mt-5 inline-flex min-h-10 items-center gap-2 rounded text-xs font-medium text-brand hover:underline",
                  focusRing,
                )}
              >
                <GitHubIcon size={15} />
                {t.footer.openSource} GitHub
                <ArrowRightIcon size={13} className="rtl:rotate-180" />
              </a>
            </div>
            <nav aria-labelledby="footer-explore-title">
              <h2
                id="footer-explore-title"
                className="mb-3 text-xs font-semibold uppercase tracking-widest text-fg-subtle"
              >
                {t.search.button}
              </h2>
              <ul>
                <li>
                  <Link href={prefix || "/"} className={linkClass}>
                    {explorerLabels[locale].home}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/tools`} className={linkClass}>
                    {seoLabels[locale].tools}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/guides`} className={linkClass}>
                    {seoLabels[locale].guides}
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-labelledby="footer-more-title">
              <h2
                id="footer-more-title"
                className="mb-3 text-xs font-semibold uppercase tracking-widest text-fg-subtle"
              >
                {explorerLabels[locale].moreNav}
              </h2>
              <ul>
                <li>
                  <a href="#support" className={linkClass}>
                    <SupportHeart size={12} />
                    {t.support.nav}
                  </a>
                </li>
                <li>
                  <Link href={`${prefix}/privacy`} className={linkClass}>
                    {privacyContent[locale].linkLabel}
                  </Link>
                </li>
                <li>
                  <a href="mailto:hi@githubster.com" className={cx(linkClass, "break-all")}>
                    hi@githubster.com
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-line py-5 font-mono text-[10px] text-fg-subtle sm:text-[11px]">
            <span>© 2026 Githubster / V.04</span>
            <span className="inline-flex items-center gap-2">
              <LockIcon size={12} />
              {t.seo.feature3Title}
            </span>
            <a
              href="https://github.com/madeburo"
              target="_blank"
              rel="noopener noreferrer"
              className={cx(
                "rounded py-1 text-fg-muted hover:text-fg hover:underline",
                focusRing,
              )}
            >
              By MadeBuro ↗
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
