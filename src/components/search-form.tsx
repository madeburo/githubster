"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";

interface SearchFormProps {
  onSearch: (username: string, token?: string) => void;
  isLoading: boolean;
}

export function SearchForm({ onSearch, isLoading }: SearchFormProps) {
  const { t } = useLocale();
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [showToken, setShowToken] = useState(false);

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
          onClick={() => setShowToken(!showToken)}
          className="flex items-center gap-1 text-xs transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          {showToken ? t.search.tokenHide : t.search.tokenToggle}
        </button>
        {showToken && (
          <div
            className="mt-2 overflow-hidden rounded-xl border"
            style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
          >
            <input
              type="text"
              placeholder={t.search.tokenPlaceholder}
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full bg-transparent px-4 py-2.5 text-sm outline-none placeholder:opacity-40"
              style={{
                color: "var(--text)",
                WebkitTextSecurity: "disc",
              } as React.CSSProperties}
              disabled={isLoading}
              autoComplete="off"
              spellCheck={false}
              name="github-token-input"
            />
          </div>
        )}
      </div>
    </form>
  );
}
