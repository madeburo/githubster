"use client";

import Image from "next/image";
import { GitHubStarButton } from "@/components/github-star-button";
import { LanguageSelector } from "@/components/language-selector";
import { SupportButton } from "@/components/support-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLocale } from "@/lib/locale-context";
import { cx, focusRing } from "@/lib/ui";

export function SiteHeader({ onLogoClick }: { onLogoClick?: () => void }) {
  const { locale } = useLocale();
  const homeHref = locale === "en" ? "/" : `/${locale}`;

  return (
    <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
      <a
        href={homeHref}
        onClick={
          onLogoClick &&
          ((event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
            event.preventDefault();
            onLogoClick();
          })
        }
        className={cx("rounded-lg transition-opacity hover:opacity-80", focusRing)}
        aria-label="Githubster"
      >
        <Image src="/githubster.svg" alt="" width={425} height={54} className="hidden h-7 w-auto dark:block sm:h-8" priority />
        <Image src="/logo.svg" alt="" width={425} height={54} className="block h-7 w-auto dark:hidden sm:h-8" priority />
      </a>
      <div className="flex flex-wrap items-center gap-2">
        <LanguageSelector />
        <ThemeToggle />
        <SupportButton />
        <GitHubStarButton />
      </div>
    </header>
  );
}
