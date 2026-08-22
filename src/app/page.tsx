"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchForm } from "@/components/search-form";
import { Tabs } from "@/components/tabs";
import { UserGrid } from "@/components/user-grid";
import { StatsBar } from "@/components/stats-bar";
import { ProfileOverviewCard } from "@/components/profile-overview";
import { GitHubStarButton } from "@/components/github-star-button";
import { ProjectSupport } from "@/components/project-support";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";
import { RateLimit } from "@/components/rate-limit";
import { ShareButton } from "@/components/share-button";
import { SkeletonLoader } from "@/components/skeleton-loader";
import { useLocale } from "@/lib/locale-context";
import { LocaleProvider } from "@/lib/locale-context";
import { locales, type Locale } from "@/lib/i18n";
import { getFollowData, getProfileOverview, type FollowData, type ProfileOverview, type RateLimitInfo, type LoadingProgress } from "@/lib/github";
import { guidePages, toolPages } from "@/lib/seo-content";
import { privacyContent } from "@/lib/privacy-content";

type TabId = "unfollowers" | "notFollowingBack" | "mutuals" | "following" | "followers";

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
};

export default function Home() {
  return <HomePage initialLocale="en" />;
}

export function HomePage({ initialLocale }: { initialLocale: Locale }) {
  return (
    <LocaleProvider key={initialLocale} initialLocale={initialLocale}>
      <BrowserLocaleRedirect initialLocale={initialLocale} />
      <HomeContent />
    </LocaleProvider>
  );
}

function BrowserLocaleRedirect({ initialLocale }: { initialLocale: Locale }) {
  useEffect(() => {
    if (initialLocale !== "en" || window.location.pathname !== "/") return;

    // Keep crawlers on the canonical English URL; this redirect is only a convenience for people.
    if (/bot|crawler|spider|crawling|slurp|facebookexternalhit|preview/i.test(navigator.userAgent)) return;

    const storedLocale = localStorage.getItem("locale");
    const browserLocales = navigator.languages || [navigator.language];
    const preferredLocale =
      (storedLocale && locales.includes(storedLocale as Locale) ? storedLocale : undefined) ??
      browserLocales
        .map((language) => language.split("-")[0].toLowerCase())
        .find((language) => locales.includes(language as Locale));

    if (!preferredLocale || preferredLocale === "en") return;

    window.location.replace(`/${preferredLocale}${window.location.search}${window.location.hash}`);
  }, [initialLocale]);

  return null;
}

function HomeContent() {
  const { t, locale } = useLocale();
  const [data, setData] = useState<FollowData | null>(null);
  const [profileOverview, setProfileOverview] = useState<ProfileOverview | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("unfollowers");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [rateLimit, setRateLimit] = useState<RateLimitInfo | null>(null);
  const [lastSearch, setLastSearch] = useState<{ user: string; token?: string } | null>(null);
  const [progress, setProgress] = useState<LoadingProgress | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Keyboard shortcut: "/" to focus search
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const target = e.target as HTMLElement;
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
          return;
        }
        e.preventDefault();
        const input = document.querySelector('input[name="github-username-search"]') as HTMLInputElement;
        input?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSearch = useCallback(async (user: string, token?: string) => {
    // Abort previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setError(null);
    setData(null);
    setProfileOverview(null);
    setProgress(null);
    setLastSearch({ user, token });

    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set("user", user);
    window.history.pushState({}, "", url.toString());

    try {
      const [result, overview] = await Promise.all([
        getFollowData(user, token, controller.signal, (p) => setProgress(p)),
        getProfileOverview(user, token, controller.signal),
      ]);
      setData(result);
      setProfileOverview(overview);
      setUsername(user);
      if (result.rateLimit) {
        setRateLimit(result.rateLimit);
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        return; // silently ignore aborted requests
      }
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
      setProgress(null);
    }
  }, []);

  // Read username from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userFromUrl = params.get("user");
    if (!userFromUrl) return;

    const timeoutId = window.setTimeout(() => {
      void handleSearch(userFromUrl);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [handleSearch]);

  function handleRetry() {
    if (lastSearch) {
      handleSearch(lastSearch.user, lastSearch.token);
    }
  }

  const tabs = data
    ? [
        {
          id: "unfollowers",
          label: t.tabs.unfollowers,
          count: data.unfollowers.length,
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="18" y1="11" x2="23" y2="11" />
            </svg>
          ),
        },
        {
          id: "notFollowingBack",
          label: t.tabs.notFollowingBack,
          count: data.notFollowingBack.length,
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
          ),
        },
        {
          id: "mutuals",
          label: t.tabs.mutuals,
          count: data.mutuals.length,
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <path d="M17 14h6" />
              <path d="M20 11v6" />
            </svg>
          ),
        },
        {
          id: "following",
          label: t.tabs.following,
          count: data.following.length,
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <polyline points="17 11 19 13 23 9" />
            </svg>
          ),
        },
        {
          id: "followers",
          label: t.tabs.followers,
          count: data.followers.length,
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          ),
        },
      ]
    : [];

  const currentUsers = data ? data[activeTab] : [];

  const emptyMessages: Record<TabId, string> = {
    unfollowers: t.empty.unfollowers,
    notFollowingBack: t.empty.notFollowingBack,
    mutuals: t.empty.mutuals,
    following: t.empty.following,
    followers: t.empty.followers,
  };

  return (
    <>
      <main className={`mx-auto max-w-5xl px-4 pb-8 pt-8 sm:pb-12 ${data ? "sm:pt-20" : "sm:pt-12"}`}>
        {/* Top bar */}
        <div className="flex items-center justify-center gap-2 sm:justify-end">
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

        {/* Hero section - centered */}
        <section className={`text-center ${data ? "mb-8" : "mb-0"}`}>
          <div className={`mx-auto max-w-2xl animate-fade-in ${data ? "pt-12 sm:pt-16" : "pt-12 sm:pt-20"}`}>
            <div className="mb-8 flex items-center justify-center">
                <a href={locale === "en" ? "/" : `/${locale}`} className="group relative transition-opacity hover:opacity-80">
                <Image
                  src="/githubster.svg"
                  alt="Githubster"
                  width={425}
                  height={54}
                  loading="eager"
                  className="hidden h-10 w-auto dark:block sm:h-12"
                />
                <Image
                  src="/logo.svg"
                  alt="Githubster"
                  width={425}
                  height={54}
                  loading="eager"
                  className="block h-10 w-auto dark:hidden sm:h-12"
                />
                <span className="sr-only">Githubster</span>
                <span
                  className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-md px-2 py-0.5 text-[10px] opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
                  aria-hidden="true"
                >
                  meow
                </span>
                </a>
            </div>
            <h1
              className="text-xl font-semibold sm:text-2xl"
              style={{ color: "var(--text)" }}
            >
              {t.hero.title}
            </h1>
            <h3
              className="mx-auto mt-4 max-w-md text-base"
              style={{ color: "var(--text-muted)" }}
            >
              {t.hero.description}
            </h3>

            {/* Search - centered */}
            <div className="mt-8">
              <SearchForm onSearch={handleSearch} isLoading={isLoading} />
              {!data && !isLoading && (
                <p className="mt-2 text-[11px]" style={{ color: "var(--text-subtle)" }}>
                  {searchShortcut[locale].before}
                  <kbd dir="ltr" className="rounded border px-1 py-0.5 text-[10px]" style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>/</kbd>
                  {searchShortcut[locale].after}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Error */}
        {error && (
          <div
            role="alert"
            className="mx-auto mt-6 flex max-w-2xl flex-col items-center gap-3 rounded-2xl border px-6 py-8 text-center"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-card)",
              boxShadow: "var(--shadow)",
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full"
              style={{
                background: error.includes("not found")
                  ? "rgba(239, 68, 68, 0.1)"
                  : error.includes("Rate limit") || error.includes("rate limit")
                  ? "rgba(245, 158, 11, 0.1)"
                  : "rgba(99, 102, 241, 0.1)",
              }}
            >
              {error.includes("not found") ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              ) : error.includes("Rate limit") || error.includes("rate limit") ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gradient-start)" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              )}
            </div>
            <div>
              <h3 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                {error.includes("not found")
                  ? t.error.userNotFound
                  : error.includes("Rate limit") || error.includes("rate limit")
                  ? t.error.rateLimit
                  : "Error"}
              </h3>
              <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
                {error.includes("not found")
                  ? t.error.userNotFoundDesc
                  : error.includes("Rate limit") || error.includes("rate limit")
                  ? t.error.rateLimitDesc
                  : error}
              </p>
            </div>
            <button
              type="button"
              onClick={handleRetry}
              disabled={isLoading}
              className="mt-2 shrink-0 cursor-pointer rounded-xl px-5 py-2 text-xs font-medium transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              style={{
                background: "var(--border)",
                color: "var(--text)",
              }}
            >
              <span className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 4 23 10 17 10" />
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                </svg>
                {t.error.retry}
              </span>
            </button>
            {(error.includes("Rate limit") || error.includes("rate limit")) && (
              <button
                type="button"
                onClick={() => {
                  document.querySelector<HTMLButtonElement>("[data-token-toggle]")?.click();
                  document.querySelector<HTMLInputElement>("[name='github-token-input']")?.focus();
                }}
                className="shrink-0 cursor-pointer rounded-xl px-5 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--gradient-start)" }}
              >
                {t.search.tokenToggle}
              </button>
            )}
          </div>
        )}

        {/* Skeleton loading state */}
        {isLoading && <SkeletonLoader progress={progress} />}

        {/* Results */}
        {data && data.followers.length === 0 && data.following.length === 0 && (
          <div
            className="mx-auto mt-6 flex max-w-2xl flex-col items-center gap-3 rounded-2xl border px-6 py-8 text-center animate-fade-in"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-card)",
              boxShadow: "var(--shadow)",
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full"
              style={{ background: "rgba(99, 102, 241, 0.1)" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gradient-start)" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                {t.error.noPublicFollowers}
              </h3>
              <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
                {t.error.noPublicFollowersDesc}
              </p>
            </div>
          </div>
        )}

        {data && (data.followers.length > 0 || data.following.length > 0) && (
          <div className="mt-14 space-y-6 animate-slide-up sm:mt-16">
            {/* Share button row */}
            {username && (
              <div className="flex justify-end">
                <ShareButton username={username} />
              </div>
            )}

            {profileOverview && (
              <ProfileOverviewCard
                overview={profileOverview}
                username={username!}
                avatarUrl={profileOverview.avatarUrl}
              />
            )}

            <StatsBar
              followers={data.followers.length}
              following={data.following.length}
              unfollowers={data.unfollowers.length}
              notFollowingBack={data.notFollowingBack.length}
              mutuals={data.mutuals.length}
            />

            {rateLimit && <RateLimit rateLimit={rateLimit} />}

            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={(id) => setActiveTab(id as TabId)}
            />

            <UserGrid
              users={currentUsers}
              emptyMessage={emptyMessages[activeTab]}
              emptyIcon={
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />

          </div>
        )}

        {/* Empty state */}
        {!data && !isLoading && !error && (
          <div className="mt-12 flex flex-col items-center gap-4 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex gap-3 stagger-children" style={{ color: "var(--text-subtle)" }}>
              <div className="rounded-xl p-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="18" y1="11" x2="23" y2="11" />
                </svg>
              </div>
              <div className="rounded-xl p-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="rounded-xl p-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <polyline points="17 11 19 13 23 9" />
                </svg>
              </div>
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {t.empty.initial}
            </p>
          </div>
        )}
      </main>

      {/* SEO section */}
      <section
        className="border-t px-4 py-12"
        style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
      >
        <div className="mx-auto max-w-5xl space-y-6 text-center">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
              {t.seo.title}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {t.seo.description}
            </p>
            <div className="stagger-children grid gap-6 pt-4 sm:grid-cols-3">
            <div className="space-y-2">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "rgba(99, 102, 241, 0.1)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gradient-start)" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="18" y1="11" x2="23" y2="11" />
                </svg>
              </div>
              <h3 className="text-sm font-medium" style={{ color: "var(--text)" }}>{t.seo.feature1Title}</h3>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.seo.feature1Desc}</p>
            </div>
            <div className="space-y-2">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "rgba(16, 185, 129, 0.1)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-sm font-medium" style={{ color: "var(--text)" }}>{t.seo.feature2Title}</h3>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.seo.feature2Desc}</p>
            </div>
            <div className="space-y-2">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "rgba(245, 158, 11, 0.1)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="text-sm font-medium" style={{ color: "var(--text)" }}>{t.seo.feature3Title}</h3>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.seo.feature3Desc}</p>
            </div>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2 text-xs" aria-label="Githubster tools and guides">
              {[...toolPages, ...guidePages].map((page, index) => {
                const kind = index < toolPages.length ? "tools" : "guides";
                return (
                  <Link key={page.slug} href={`${locale === "en" ? "" : `/${locale}`}/${kind}/${page.slug}`} className="hover:underline" style={{ color: "var(--text-muted)" }}>
                    {page.h1}
                  </Link>
                );
              })}
            </nav>
        </div>
      </section>

      <section className="border-t px-4 py-14 sm:py-16" style={{ borderColor: "#25283d", background: "#0d0e1b" }}>
        <div className="mx-auto max-w-5xl">
          <ProjectSupport />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t px-4 py-6 text-center text-xs"
        style={{ borderColor: "var(--border)", color: "var(--text-subtle)" }}
      >
        <p>
          {t.footer.openSource}{" "}
          <a href="https://github.com/madeburo/githubster" target="_blank" rel="noopener noreferrer" className="transition-colors hover:underline" style={{ color: "var(--text-muted)" }}>
            GitHub
          </a>
          {" · "}© 2026{" · "}
          <a href="mailto:hi@githubster.com" className="transition-colors hover:underline" style={{ color: "var(--text-muted)" }}>
            hi@githubster.com
          </a>
          {" · "}
          <Link href={`${locale === "en" ? "" : `/${locale}`}/privacy`} className="transition-colors hover:underline" style={{ color: "var(--text-muted)" }}>
            {privacyContent[locale].linkLabel}
          </Link>
        </p>
      </footer>


    </>
  );
}
