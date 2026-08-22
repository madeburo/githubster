"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import type { Locale } from "@/lib/i18n";

const onboarding: Record<Locale, string> = {
  en: "Enter a GitHub username — the data is public and a token is optional.",
  de: "Gib einen GitHub-Benutzernamen ein — die Daten sind öffentlich und ein Token ist optional.",
  fr: "Saisissez un nom d’utilisateur GitHub — les données sont publiques et le jeton est facultatif.",
  es: "Introduce un nombre de usuario de GitHub — los datos son públicos y el token es opcional.",
  it: "Inserisci un nome utente GitHub — i dati sono pubblici e il token è facoltativo.",
  pt: "Insira um nome de usuário do GitHub — os dados são públicos e o token é opcional.",
  nl: "Voer een GitHub-gebruikersnaam in — de gegevens zijn openbaar en een token is optioneel.",
  pl: "Wpisz nazwę użytkownika GitHub — dane są publiczne, a token jest opcjonalny.",
  da: "Indtast et GitHub-brugernavn — dataene er offentlige, og et token er valgfrit.",
  tr: "Bir GitHub kullanıcı adı girin — veriler herkese açıktır ve token isteğe bağlıdır.",
  uk: "Введіть ім’я користувача GitHub — дані публічні, а токен необов’язковий.",
  zh: "输入 GitHub 用户名 — 数据是公开的，令牌可选。",
  ja: "GitHub ユーザー名を入力してください。データは公開情報で、トークンは任意です。",
  ko: "GitHub 사용자 이름을 입력하세요. 데이터는 공개 정보이며 토큰은 선택 사항입니다.",
  he: "הזינו שם משתמש ב-GitHub — הנתונים ציבוריים והאסימון אופציונלי.",
  ar: "أدخل اسم مستخدم GitHub — البيانات عامة والرمز اختياري.",
};

interface SearchFormProps {
  onSearch: (username: string, token?: string) => void;
  isLoading: boolean;
}

export function SearchForm({ onSearch, isLoading }: SearchFormProps) {
  const { t, locale } = useLocale();
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [showTokenField, setShowTokenField] = useState(false);
  const [tokenVisible, setTokenVisible] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim(), token.trim() || undefined);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" role="search" autoComplete="off">
      <div
        className="flex flex-col gap-3 rounded-2xl border p-2 sm:flex-row sm:items-center"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-card)",
          boxShadow: "var(--shadow)",
        }}
      >
        <div className="flex flex-1 items-center gap-2 px-3">
          <svg
            width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" className="shrink-0"
            style={{ color: "var(--text-muted)" }}
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <input
            type="search"
            placeholder={t.search.placeholder}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (username.trim()) {
                  onSearch(username.trim(), token.trim() || undefined);
                }
              }
            }}
            className="w-full bg-transparent py-3 text-sm outline-none placeholder:opacity-50"
            style={{ color: "var(--text)" }}
            disabled={isLoading}
            autoComplete="off"
            name="github-username-search"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !username.trim()}
          className="cursor-pointer rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          style={{ background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))" }}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {t.search.loading}
            </span>
          ) : (
            t.search.button
          )}
        </button>
      </div>

      <div className="px-1">
        <button
          type="button"
          onClick={() => setShowTokenField(!showTokenField)}
          data-token-toggle
          className="flex items-center gap-1 text-xs transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          {showTokenField ? t.search.tokenHide : t.search.tokenToggle}
        </button>
        {showTokenField && (
          <div className="mt-2 space-y-2">
            <div
              className="flex items-center overflow-hidden rounded-xl border"
              style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
            >
              <input
                type={tokenVisible ? "text" : "password"}
                placeholder={t.search.tokenPlaceholder}
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:opacity-40"
                style={{ color: "var(--text)" }}
                disabled={isLoading}
                autoComplete="off"
                spellCheck={false}
                aria-describedby="github-token-privacy"
                name="github-token-input"
              />
              <button
                type="button"
                onClick={() => setTokenVisible(!tokenVisible)}
                className="cursor-pointer px-3 py-2.5 text-xs transition-opacity hover:opacity-70"
                style={{ color: "var(--text-muted)" }}
                aria-label={tokenVisible ? t.search.tokenMask : t.search.tokenShow}
                title={tokenVisible ? t.search.tokenMask : t.search.tokenShow}
              >
                {tokenVisible ? (
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 3 18 18" />
                    <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                    <path d="M9.9 4.2A10.8 10.8 0 0 1 12 4c5.5 0 9 8 9 8a18 18 0 0 1-2.1 3.2" />
                    <path d="M6.6 6.6C4.4 8.1 3 12 3 12s3.5 8 9 8a9.8 9.8 0 0 0 4.1-.9" />
                  </svg>
                ) : (
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
              {token && (
                <button
                  type="button"
                  onClick={() => {
                    setToken("");
                    setTokenVisible(false);
                  }}
                  className="cursor-pointer px-3 py-2.5 text-sm transition-opacity hover:opacity-70"
                  style={{ color: "var(--text-muted)" }}
                  aria-label={t.search.tokenClear}
                  title={t.search.tokenClear}
                >
                  ×
                </button>
              )}
            </div>
            <p id="github-token-privacy" className="px-1 text-left text-[11px] leading-relaxed" style={{ color: "var(--text-subtle)" }}>
              {t.search.tokenPrivacy}
            </p>
          </div>
        )}
      </div>
      <p className="px-1 text-center text-[11px] leading-relaxed" style={{ color: "var(--text-subtle)" }}>
        {onboarding[locale]}
      </p>
    </form>
  );
}
