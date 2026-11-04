"use client";

import Image from "next/image";
import { ArrowRightIcon, GitHubIcon, HeartIcon } from "@/components/icons";
import { useLocale } from "@/lib/locale-context";
import { cx, focusRing } from "@/lib/ui";

const GITHUB_URL = "https://github.com/madeburo/githubster";
const PAYPAL_URL = "https://paypal.me/UmidM";
const KOFI_URL = "https://ko-fi.com/githubster";

export function ProjectSupport() {
  const { t } = useLocale();
  const actionClass = cx(
    "group flex min-h-12 items-center gap-3 rounded-xl border border-line bg-card px-4 py-3 text-sm font-semibold text-fg transition-colors hover:border-brand/40 hover:bg-brand-soft",
    focusRing,
  );

  return (
    <section
      id="support"
      className="scroll-mt-6 px-4 py-10 sm:py-12"
      aria-labelledby="support-title"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-7 rounded-2xl border border-line bg-linear-to-br from-card via-card to-brand-soft p-6 text-start shadow-[var(--shadow)] sm:p-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-12">
        <div>
          <span className="mb-5 flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
            <HeartIcon size={22} />
          </span>
          <h2
            id="support-title"
            className="text-2xl font-bold tracking-tight text-fg sm:text-3xl"
          >
            {t.support.title}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-muted">
            {t.support.description}
          </p>
        </div>
        <div className="grid gap-2.5">
          <a
            href={KOFI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cx(
              "flex min-h-12 items-center gap-3 rounded-xl border border-transparent bg-[var(--signal)] px-4 py-3 text-sm font-semibold text-[var(--signal-ink)] transition-colors hover:border-brand/40 hover:bg-[var(--signal)]/80",
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
