"use client";

import { useState, useEffect } from "react";
import { SearchForm } from "@/components/search-form";
import { Tabs } from "@/components/tabs";
import { UserGrid } from "@/components/user-grid";
import { StatsBar } from "@/components/stats-bar";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";
import { useLocale } from "@/lib/locale-context";
import { getFollowData, type FollowData } from "@/lib/github";

type TabId = "unfollowers" | "notFollowingBack" | "following" | "followers";

export default function Home() {
  const { t } = useLocale();
  const [data, setData] = useState<FollowData | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("unfollowers");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    if (!showPrivacy) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPrivacy(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [showPrivacy]);

  async function handleSearch(user: string, token?: string) {
    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const result = await getFollowData(user, token);
      setData(result);
      setUsername(user);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
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
    following: t.empty.following,
    followers: t.empty.followers,
  };

  return (
    <>
      <main className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
        {/* Top bar */}
        <div className="flex items-center justify-end gap-2">
          <LanguageSelector />
          <ThemeToggle />
        </div>

        {/* Hero section - centered */}
        <section className={`text-center ${data ? "mb-8" : "mb-0"}`}>
          <div className={`mx-auto max-w-2xl animate-fade-in ${data ? "" : "pt-12 sm:pt-20"}`}>
            <h1 className="mb-8 flex items-center justify-center">
              <a href="/" className="group relative transition-opacity hover:opacity-80">
                <img
                  src="/githubster.svg"
                  alt="Githubster"
                  className="hidden h-10 dark:block sm:h-12"
                />
                <img
                  src="/logo.svg"
                  alt="Githubster"
                  className="block h-10 dark:hidden sm:h-12"
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
            </h1>
            <p
              className="mx-auto mt-5 max-w-md text-base"
              style={{ color: "var(--text-muted)" }}
            >
              {t.hero.description}
            </p>

            {/* Search - centered */}
            <div className="mt-8">
              <SearchForm onSearch={handleSearch} isLoading={isLoading} />
            </div>
          </div>
        </section>

        {/* Error */}
        {error && (
          <div
            role="alert"
            className="mx-auto mt-6 flex max-w-2xl items-center gap-2 rounded-xl border px-4 py-3 text-sm"
            style={{
              borderColor: "rgba(239, 68, 68, 0.3)",
              background: "rgba(239, 68, 68, 0.08)",
              color: "#ef4444",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            {error}
          </div>
        )}

        {/* Results */}
        {data && (
          <div className="mt-8 space-y-6 animate-slide-up">
            {/* User info */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1" style={{ background: "var(--border)" }} />
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                @{username}
              </a>
              <div className="h-px flex-1" style={{ background: "var(--border)" }} />
            </div>

            <StatsBar
              followers={data.followers.length}
              following={data.following.length}
              unfollowers={data.unfollowers.length}
              notFollowingBack={data.notFollowingBack.length}
            />

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
        <div className="mx-auto max-w-3xl space-y-6 text-center">
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
          <button
            type="button"
            onClick={() => setShowPrivacy(true)}
            className="cursor-pointer transition-colors hover:underline"
            style={{ color: "var(--text-muted)" }}
          >
            Privacy
          </button>
        </p>
      </footer>

      {/* Privacy popup */}
      {showPrivacy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-title"
          onClick={() => setShowPrivacy(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl p-6 sm:p-8"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow-lg)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPrivacy(false)}
              className="absolute right-4 top-4 cursor-pointer rounded-full p-1 transition-colors"
              style={{ color: "var(--text-muted)" }}
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <h2 id="privacy-title" className="mb-4 text-lg font-semibold" style={{ color: "var(--text)" }}>Privacy Policy</h2>
            <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <p>
                <strong style={{ color: "var(--text)" }}>Your data stays with you.</strong> Githubster works entirely in your browser. We do not collect, store, or transmit any personal information to our servers.
              </p>
              <p>
                <strong style={{ color: "var(--text)" }}>Direct GitHub communication.</strong> When you enter a username or token, your browser communicates directly with the GitHub API. Your credentials never pass through our infrastructure.
              </p>
              <p>
                <strong style={{ color: "var(--text)" }}>Minimal local storage.</strong> We save only your theme and language preferences in your browser's localStorage. No cookies, no fingerprinting, no tracking.
              </p>
              <p>
                <strong style={{ color: "var(--text)" }}>Privacy-friendly analytics.</strong> We use anonymous, cookie-free analytics to understand general usage patterns (e.g. page views, country). No personal data is collected or shared with third parties. This is fully compliant with GDPR — no consent banner is required.
              </p>
              <p>
                <strong style={{ color: "var(--text)" }}>Email communication.</strong> If you reach out to us by email, we may collect your name and email address solely to respond to your inquiry. We will never share this information with third parties or use it for marketing.
              </p>
              <p>
                <strong style={{ color: "var(--text)" }}>Fully open source.</strong> Every line of code is publicly available on{" "}
                <a href="https://github.com/madeburo/githubster" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--text)" }}>
                  GitHub
                </a>
                . You can verify exactly how the app works.
              </p>
              <p>
                <strong style={{ color: "var(--text)" }}>Questions?</strong> Reach out at{" "}
                <a href="mailto:hi@githubster.com" className="underline" style={{ color: "var(--text)" }}>
                  hi@githubster.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
