"use client";

import Image from "next/image";
import { GitHubStarButton } from "@/components/github-star-button";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLocale } from "@/lib/locale-context";

export function SiteHeader({ showLogo = true }: { showLogo?: boolean }) {
  const { t, locale } = useLocale();
  const homeHref = locale === "en" ? "/" : `/${locale}`;

  return (
    <header className={`flex items-center gap-4 ${showLogo ? "flex-col sm:flex-row sm:justify-between" : "justify-center sm:justify-end"}`}>
      {showLogo && (
        <a href={homeHref} className="transition-opacity hover:opacity-80" aria-label="Githubster">
          <Image
            src="/githubster.svg"
            alt="Githubster"
            width={425}
            height={54}
            className="hidden h-7 w-auto dark:block sm:h-8"
            priority
          />
          <Image
            src="/logo.svg"
            alt="Githubster"
            width={425}
            height={54}
            className="block h-7 w-auto dark:hidden sm:h-8"
            priority
          />
        </a>
      )}
      <div className="flex items-center justify-center gap-2">
        <LanguageSelector />
        <ThemeToggle />
        <a
          href="#support"
          className="rounded-lg border px-3 py-1.5 text-xs font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{ borderColor: "var(--border)", background: "var(--bg-card)", color: "var(--text-muted)" }}
        >
          {t.support.nav}
        </a>
        <GitHubStarButton />
      </div>
    </header>
  );
}
