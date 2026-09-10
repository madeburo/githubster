"use client";

import { useEffect, useId, useImperativeHandle, useRef, useState, type Ref } from "react";
import { ArrowRightIcon, LockIcon, SpinnerIcon, UserIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";
import { cx, focusRing } from "@/lib/ui";

const searchShortcut: Record<Locale, { before: string; after: string }> = {
  en: { before: "Press ", after: " to focus search" },
  zh: { before: "按 ", after: " 聚焦搜索框" },
  ko: { before: "", after: " 키를 눌러 검색창에 포커스" },
  ja: { before: "", after: " キーで検索欄にフォーカス" },
  pt: { before: "Pressione ", after: " para focar na busca" },
  es: { before: "Pulsa ", after: " para enfocar la búsqueda" },
  de: { before: "Drücke ", after: ", um die Suche zu fokussieren" },
  fr: { before: "Appuyez sur ", after: " pour activer la recherche" },
  it: { before: "Premi ", after: " per attivare la ricerca" },
  uk: { before: "Натисніть ", after: ", щоб перейти до пошуку" },
  he: { before: "לחצו על ", after: " כדי להתמקד בחיפוש" },
  tr: { before: "Aramaya odaklanmak için ", after: " tuşuna basın" },
  ar: { before: "اضغط على ", after: " للتركيز على البحث" },
  pl: { before: "Naciśnij ", after: ", aby przejść do wyszukiwania" },
  nl: { before: "Druk op ", after: " om de zoekbalk te activeren" },
  da: { before: "Tryk på ", after: " for at fokusere søgningen" },
  sv: { before: "Tryck på ", after: " för att fokusera sökfältet" },
  no: { before: "Trykk på ", after: " for å fokusere søkefeltet" },
  cs: { before: "Stiskněte ", after: " pro přechod do vyhledávání" },
  hu: { before: "Nyomd meg a ", after: " billentyűt a kereséshez" },
};

export type SearchPanelHandle = {
  focusUsername: () => void;
  /** Reveals the optional token field and focuses it (used by the rate-limit error). */
  openToken: () => void;
};

interface SearchPanelProps {
  ref?: Ref<SearchPanelHandle>;
  onSearch: (username: string, token?: string) => void;
  isLoading: boolean;
}

export function SearchPanel({ ref, onSearch, isLoading }: SearchPanelProps) {
  const { t, locale } = useLocale();
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [showTokenField, setShowTokenField] = useState(false);
  const [tokenVisible, setTokenVisible] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const tokenRef = useRef<HTMLInputElement>(null);
  const inputId = useId();
  const tokenId = useId();
  const shortcutHint = `${searchShortcut[locale].before}/${searchShortcut[locale].after}`;

  useImperativeHandle(ref, () => ({
    focusUsername: () => usernameRef.current?.focus(),
    openToken: () => {
      setShowTokenField(true);
      // The field mounts on the next render.
      requestAnimationFrame(() => tokenRef.current?.focus());
    },
  }));

  // Keyboard shortcut: "/" to focus search
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return;
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable) {
        return;
      }
      e.preventDefault();
      usernameRef.current?.focus();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const user = username.trim();
    if (!user) {
      usernameRef.current?.focus();
      return;
    }
    onSearch(user, token.trim() || undefined);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-xl text-start" role="search" autoComplete="off">
      <div className="flex items-center gap-2 rounded-2xl border border-line bg-card p-1.5 ps-4 shadow-[0_12px_32px_-20px_rgba(76,60,170,0.55)] transition-[border-color,box-shadow] focus-within:border-brand/50 focus-within:ring-4 focus-within:ring-brand/15">
        <UserIcon size={20} className="hidden shrink-0 text-fg-subtle sm:block" />
        <label htmlFor={inputId} className="sr-only">
          {t.search.placeholder}
        </label>
        <input
          ref={usernameRef}
          id={inputId}
          type="search"
          name="github-username-search"
          placeholder={t.search.placeholder}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="min-w-0 flex-1 bg-transparent py-2.5 text-[15px] text-fg outline-none placeholder:text-fg-subtle"
          disabled={isLoading}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="search"
          aria-keyshortcuts="/"
        />
        {!username && (
          <kbd
            title={shortcutHint}
            className="hidden h-6 min-w-6 items-center justify-center rounded-md border border-line bg-canvas px-1.5 font-sans text-[11px] text-fg-subtle sm:inline-flex"
          >
            /
          </kbd>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className={cx(
            "inline-flex h-11 shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-(--cta-from) to-(--cta-to) px-4 text-[15px] font-semibold text-white shadow-[0_10px_22px_-10px_var(--cta-from)] transition-[filter,transform] hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:px-5",
            focusRing
          )}
        >
          {isLoading ? (
            <>
              <SpinnerIcon size={16} className="animate-spin" />
              {t.search.loading}
            </>
          ) : (
            <>
              {t.search.button}
              <ArrowRightIcon size={17} className="rtl:rotate-180" />
            </>
          )}
        </button>
      </div>

      <div className="mt-2.5 px-1">
        <button
          type="button"
          onClick={() => setShowTokenField(!showTokenField)}
          aria-expanded={showTokenField}
          aria-controls={tokenId}
          className={cx("inline-flex cursor-pointer items-center gap-1.5 rounded text-xs text-fg-muted transition-colors hover:text-fg", focusRing)}
        >
          <LockIcon size={13} />
          {showTokenField ? t.search.tokenHide : t.search.tokenToggle}
        </button>
        {showTokenField && (
          <div id={tokenId} className="mt-2 space-y-2 animate-fade-in">
            <div className="flex items-center overflow-hidden rounded-xl border border-line bg-card transition-[border-color,box-shadow] focus-within:border-brand/50 focus-within:ring-4 focus-within:ring-brand/15">
              <input
                ref={tokenRef}
                type={tokenVisible ? "text" : "password"}
                placeholder={t.search.tokenPlaceholder}
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-fg outline-none placeholder:text-fg-subtle"
                disabled={isLoading}
                autoComplete="off"
                spellCheck={false}
                aria-label={t.search.tokenToggle}
                aria-describedby={`${tokenId}-privacy`}
                name="github-token-input"
              />
              <button
                type="button"
                onClick={() => setTokenVisible(!tokenVisible)}
                className="cursor-pointer px-3 py-2.5 text-fg-muted transition-opacity hover:opacity-70"
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
                  className="cursor-pointer px-3 py-2.5 text-sm text-fg-muted transition-opacity hover:opacity-70"
                  aria-label={t.search.tokenClear}
                  title={t.search.tokenClear}
                >
                  ×
                </button>
              )}
            </div>
            <p id={`${tokenId}-privacy`} className="px-1 text-[11px] leading-relaxed text-fg-subtle">
              {t.search.tokenPrivacy}
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
