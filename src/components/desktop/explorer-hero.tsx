"use client";

import { useLocale } from "@/lib/locale-context";
import { workspaceCopy } from "@/lib/workspace-content";

function highlightGitHub(title: string) {
  const match = title.match(/GitHub[a-z]*/);
  if (!match || match.index === undefined) return title;
  const end = match.index + match[0].length;
  return (
    <>
      {title.slice(0, match.index)}
      <span className="workspace-headline-highlight">{match[0]}</span>
      {title.slice(end)}
    </>
  );
}

export function ExplorerHero({ compact = false }: { compact?: boolean }) {
  const { t, locale } = useLocale();
  return (
    <div
      className={
        compact ? "workspace-hero workspace-hero-compact" : "workspace-hero"
      }
    >
      <p className="workspace-eyebrow">
        <span aria-hidden="true" />
        GitHub / {workspaceCopy[locale].workspace}
      </p>
      <h1>{highlightGitHub(t.hero.title)}</h1>
      {!compact && (
        <p className="workspace-hero-description">{t.hero.description}</p>
      )}
    </div>
  );
}
