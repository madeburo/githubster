"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/lib/locale-context";
import { locales, localeNames, type Locale } from "@/lib/i18n";

const languageNameCollator = new Intl.Collator("en", { sensitivity: "base" });

export function LanguageSelector() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
        className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-card)",
          color: "var(--text-muted)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {locale.toUpperCase()}
      </button>

      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-2 grid w-72 grid-cols-2 overflow-visible rounded-xl border p-1 sm:left-auto sm:right-0 sm:w-80"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-card)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {[...locales].sort((a, b) => languageNameCollator.compare(localeNames[a], localeNames[b])).map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setLocale(loc as Locale);
                setOpen(false);
                const suffix = `${window.location.search}${window.location.hash}`;
                window.location.assign(loc === "en" ? `/${suffix}` : `/${loc}${suffix}`);
              }}
              className="flex w-full items-center rounded-lg px-3 py-2 text-xs transition-colors"
              style={{
                background: loc === locale ? "var(--bg-card-hover)" : "transparent",
                color: loc === locale ? "var(--text)" : "var(--text-muted)",
              }}
            >
              {localeNames[loc as Locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
