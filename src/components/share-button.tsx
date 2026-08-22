"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";

interface ShareButtonProps {
  username: string;
}

export function ShareButton({ username }: ShareButtonProps) {
  const { t, locale } = useLocale();
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const localePath = locale === "en" ? "" : `/${locale}`;
    const url = `${window.location.origin}${localePath}?user=${encodeURIComponent(username)}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: `Githubster — @${username}`, url });
        return;
      } catch {
        // fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silent fail
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg-card)",
        color: "var(--text-muted)",
      }}
      title={t.share?.tooltip || "Share link"}
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {t.share?.copied || "Copied!"}
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          {t.share?.button || "Share"}
        </>
      )}
    </button>
  );
}
