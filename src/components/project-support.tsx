"use client";

import Image from "next/image";
import { ArrowRightIcon, GitHubIcon } from "@/components/icons";
import { SupportHeart } from "@/components/support-heart";
import { useLocale } from "@/lib/locale-context";
import { cx, focusRing } from "@/lib/ui";

const GITHUB_URL = "https://github.com/madeburo/githubster";
const PAYPAL_URL = "https://paypal.me/UmidM";
const KOFI_URL = "https://ko-fi.com/githubster";

export function ProjectSupport() {
  const { t } = useLocale();
  const actionClass = cx(
    "group flex min-h-14 items-center gap-3 rounded-xl border border-line bg-card px-5 py-4 text-[15px] font-semibold text-fg transition-colors hover:border-brand/40 hover:bg-brand-soft",
    focusRing,
  );

  return (
    <section
      id="support"
      className="site-content-width scroll-mt-6 py-10 sm:py-12"
      aria-labelledby="support-title"
    >
      <div className="project-support-card grid min-h-[360px] items-center gap-8 rounded-[20px] border border-line bg-linear-to-br from-card via-card to-brand-soft p-7 text-start shadow-[var(--shadow)] sm:p-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-12 lg:min-h-[390px] lg:gap-16 lg:px-14 lg:py-14">
        <div>
          <SupportHeart size={28} className="support-heart-large mb-6" />
          <h2
            id="support-title"
            className="text-3xl font-bold tracking-tight text-fg sm:text-4xl"
          >
            {t.support.title}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-fg-muted sm:text-base">
            {t.support.description}
          </p>
        </div>
        <div className="grid gap-3">
          <a
            href={KOFI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cx(
              "flex min-h-14 items-center gap-3 rounded-xl border border-transparent bg-[var(--signal)] px-5 py-4 text-[15px] font-semibold text-[var(--signal-ink)] transition-colors hover:border-brand/40 hover:bg-[var(--signal)]/80",
              focusRing,
            )}
          >
            <Image
              src="/kofi.svg"
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0"
            />
            <span className="flex-1">{t.support.kofi}</span>
            <ArrowRightIcon size={16} className="shrink-0 rtl:rotate-180" />
          </a>
          <a
            href={PAYPAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={actionClass}
          >
            <Image
              src="/paypal.svg"
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0"
            />
            <span className="flex-1">{t.support.paypal}</span>
            <ArrowRightIcon
              size={16}
              className="shrink-0 text-fg-subtle group-hover:text-brand rtl:rotate-180"
            />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={actionClass}
          >
            <GitHubIcon size={20} className="shrink-0" />
            <span className="flex-1">{t.support.star}</span>
            <ArrowRightIcon
              size={16}
              className="shrink-0 text-fg-subtle group-hover:text-brand rtl:rotate-180"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
