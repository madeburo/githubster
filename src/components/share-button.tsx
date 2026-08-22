"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import type { Locale } from "@/lib/i18n";

const copyLabels: Record<Locale, string> = {
  en: "Copy profile link", de: "Profillink kopieren", fr: "Copier le lien du profil", es: "Copiar enlace del perfil",
  it: "Copia link del profilo", pt: "Copiar link do perfil", nl: "Profiellink kopiëren", pl: "Kopiuj link do profilu",
  da: "Kopiér profillink", tr: "Profil bağlantısını kopyala", uk: "Копіювати посилання профілю", zh: "复制个人资料链接",
  ja: "プロフィールリンクをコピー", ko: "프로필 링크 복사", he: "העתקת קישור לפרופיל", ar: "نسخ رابط الملف الشخصي",
  sv: "Kopiera profillänk", no: "Kopier profillenke", cs: "Kopírovat odkaz na profil", hu: "Profilhivatkozás másolása",
};

interface ShareButtonProps {
  username: string;
}

export function ShareButton({ username }: ShareButtonProps) {
  const { t, locale } = useLocale();
  const [copied, setCopied] = useState<"share" | "copy" | null>(null);
  const localePath = locale === "en" ? "" : `/${locale}`;
  const url = `${typeof window === "undefined" ? "" : window.location.origin}${localePath}?user=${encodeURIComponent(username)}`;

  function markCopied(source: "share" | "copy") {
    setCopied(source);
    window.setTimeout(() => setCopied(null), 2000);
  }

  async function handleShare() {
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
      markCopied("share");
    } catch {
      // silent fail
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      markCopied("copy");
    } catch {
      // Clipboard access can be unavailable in an insecure browser context.
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleShare}
        className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
        style={{ borderColor: "var(--border)", background: "var(--bg-card)", color: "var(--text-muted)" }}
        title={t.share?.tooltip || "Share link"}
      >
      {copied === "share" ? (
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
      <button type="button" onClick={handleCopy} className="rounded-lg border px-3 py-1.5 text-xs font-medium transition-all hover:scale-[1.02] active:scale-[0.98]" style={{ borderColor: "var(--border)", background: "var(--bg-card)", color: "var(--text-muted)" }}>
        {copied === "copy" ? t.share?.copied || "Copied!" : copyLabels[locale]}
      </button>
    </div>
  );
}
