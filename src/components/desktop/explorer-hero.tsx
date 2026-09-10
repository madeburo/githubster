"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

/** Highlights the "GitHub" word (plus inflections such as "GitHubu") inside a localized title. */
function highlightGitHub(title: string) {
  const match = title.match(/GitHub[a-z]*/);
  if (!match || match.index === undefined) return title;
  const end = match.index + match[0].length;
  return (
    <>
      {title.slice(0, match.index)}
      <span className="text-brand">{match[0]}</span>
      {title.slice(end)}
    </>
  );
}

export function ExplorerHero() {
  const { t } = useLocale();

  return (
    <div className="relative mx-auto max-w-xl text-center">
      <div className="group relative mx-auto hidden w-fit sm:block">
        <Image src="/githubster.svg" alt="Githubster" width={425} height={54} loading="eager" className="hidden h-12 w-auto dark:block" />
        <Image src="/logo.svg" alt="Githubster" width={425} height={54} loading="eager" className="block h-12 w-auto dark:hidden" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-md border border-line bg-card px-2 py-0.5 text-[10px] text-fg-muted opacity-0 shadow-[var(--shadow)] transition-opacity group-hover:opacity-100"
        >
          meow
        </span>
      </div>
      <h1 className="font-display text-[1.85rem] font-bold leading-[1.15] tracking-tight text-balance text-fg sm:mt-6 sm:text-4xl lg:text-[2.6rem]">
        {highlightGitHub(t.hero.title)}
      </h1>
      <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-balance text-fg-muted">{t.hero.description}</p>
    </div>
  );
}
