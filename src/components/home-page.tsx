"use client";

import { useEffect, useRef, useState } from "react";
import { AppShell } from "@/components/desktop/app-shell";
import {
  ShortcutDock,
  ShortcutRail,
  type ShortcutItem,
} from "@/components/desktop/desktop-shortcut";
import { ExamplePreview } from "@/components/desktop/example-preview";
import { ExplorerHero } from "@/components/desktop/explorer-hero";
import { ExplorerWindow } from "@/components/desktop/explorer-window";
import { AboutSection } from "@/components/desktop/feature-cards";
import {
  NetworkResults,
  type ExplorerView,
} from "@/components/desktop/network-results";
import {
  SearchPanel,
  type SearchPanelHandle,
} from "@/components/desktop/search-panel";
import { EmptyNetwork, SearchError } from "@/components/desktop/search-status";
import {
  AboutIcon,
  CompareIcon,
  FollowersIcon,
  FollowingIcon,
  HomeIcon,
  GitHubIcon,
  LockIcon,
  InsightsIcon,
  MutualsIcon,
  NotFollowingBackIcon,
} from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { ProjectSupport } from "@/components/project-support";
import { SiteHeader } from "@/components/site-header";
import { SupportHeart } from "@/components/support-heart";
import { SkeletonLoader } from "@/components/skeleton-loader";
import { explorerLabels } from "@/lib/explorer-content";
import { locales, type Locale } from "@/lib/i18n";
import { LocaleProvider, useLocale } from "@/lib/locale-context";
import { workspaceCopy } from "@/lib/workspace-content";
import { useNetworkSearch } from "@/lib/use-network-search";

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
    if (
      /bot|crawler|spider|crawling|slurp|facebookexternalhit|preview/i.test(
        navigator.userAgent,
      )
    )
      return;

    const storedLocale = localStorage.getItem("locale");
    const browserLocales = navigator.languages || [navigator.language];
    const preferredLocale =
      (storedLocale && locales.includes(storedLocale as Locale)
        ? storedLocale
        : undefined) ??
      browserLocales
        .map((language) => {
          const languageCode = language.split("-")[0].toLowerCase();
          return languageCode === "nb" || languageCode === "nn"
            ? "no"
            : languageCode;
        })
        .find((language) => locales.includes(language as Locale));

    if (!preferredLocale || preferredLocale === "en") return;

    window.location.replace(
      `/${preferredLocale}${window.location.search}${window.location.hash}`,
    );
  }, [initialLocale]);

  return null;
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

function HomeContent() {
  const { t, locale } = useLocale();
  const labels = explorerLabels[locale];
  const copy = workspaceCopy[locale];
  const {
    data,
    profileOverview,
    username,
    rateLimit,
    progress,
    isLoading,
    error,
    searchedUser,
    search,
    retry,
    reset,
  } = useNetworkSearch();
  const [view, setView] = useState<ExplorerView>("overview");
  const searchRef = useRef<SearchPanelHandle>(null);
  const prefix = locale === "en" ? "" : `/${locale}`;
  const hasResults =
    !!data && (data.followers.length > 0 || data.following.length > 0);
  // Once a lookup is on screen the hero shrinks so results start above the fold.
  const isExploring = isLoading || !!error || !!data;

  /** With no lookup, navigation explores the clearly labelled sample instead. */
  function openView(next: ExplorerView, targetId = "explorer-results") {
    setView(next);
    if (hasResults) {
      document
        .getElementById(targetId)
        ?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
    }
  }

  function goHome() {
    reset();
    setView("overview");
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  }

  const viewShortcuts: ShortcutItem[] = [
    {
      id: "home",
      label: labels.home,
      icon: HomeIcon,
      href: prefix || "/",
      onSelect: goHome,
      active: view === "overview",
    },
    {
      id: "followers",
      label: t.tabs.followers,
      icon: FollowersIcon,
      onSelect: () => openView("followers"),
      active: view === "followers",
      count: data?.followers.length,
    },
    {
      id: "following",
      label: t.tabs.following,
      icon: FollowingIcon,
      onSelect: () => openView("following"),
      active: view === "following",
      count: data?.following.length,
    },
    {
      id: "mutuals",
      label: t.tabs.mutuals,
      icon: MutualsIcon,
      onSelect: () => openView("mutuals"),
      active: view === "mutuals",
      count: data?.mutuals.length,
    },
    {
      id: "unfollowers",
      label: t.tabs.unfollowers,
      icon: NotFollowingBackIcon,
      onSelect: () => openView("unfollowers"),
      active: view === "unfollowers",
      count: data?.unfollowers.length,
    },
    {
      id: "notFollowingBack",
      label: t.tabs.notFollowingBack,
      icon: FollowersIcon,
      onSelect: () => openView("notFollowingBack"),
      active: view === "notFollowingBack",
      count: data?.notFollowingBack.length,
    },
  ];

  const resourceShortcuts: ShortcutItem[] = [
    {
      id: "compare",
      label: labels.compare,
      icon: CompareIcon,
      href: `${prefix}/guides/github-followers-vs-following`,
    },
    {
      id: "insights",
      label: labels.insights,
      icon: InsightsIcon,
      onSelect: () => openView("overview", "insights"),
    },
    { id: "about", label: labels.about, icon: AboutIcon, href: "#about" },
  ];
  const supportShortcut: ShortcutItem = {
    id: "support",
    label: t.support.nav,
    icon: SupportHeart,
    href: "#support",
  };

  let explorerBody: React.ReactNode;
  if (error) {
    explorerBody = (
      <SearchError
        error={error}
        isLoading={isLoading}
        onRetry={retry}
        onAddToken={() => searchRef.current?.openToken()}
      />
    );
  } else if (isLoading) {
    explorerBody = <SkeletonLoader progress={progress} />;
  } else if (data && username && hasResults) {
    explorerBody = (
      <NetworkResults
        data={data}
        profileOverview={profileOverview}
        username={username}
        rateLimit={rateLimit}
        view={view}
        onViewChange={setView}
      />
    );
  } else if (data) {
    explorerBody = <EmptyNetwork />;
  } else {
    explorerBody = <ExamplePreview view={view} onViewChange={setView} />;
  }

  return (
    <AppShell
      header={<SiteHeader onLogoClick={goHome} />}
      footer={
        <>
          <ProjectSupport />
          <AboutSection />
          <SiteFooter showSupport={false} />
        </>
      }
    >
      <main className="workspace-main">
        <ExplorerWindow title="Githubster Explorer">
          <div className="workspace-frame">
            <aside className="workspace-sidebar">
              <div className="workspace-sidebar-heading">
                <GitHubIcon size={22} />
                <span>
                  Githubster<small>{copy.workspace}</small>
                </span>
              </div>
              <ShortcutRail items={viewShortcuts} label={labels.viewsNav} />
              <ShortcutRail
                items={[...resourceShortcuts, supportShortcut]}
                label={labels.moreNav}
                className="mt-8"
              />
              <div className="workspace-sidebar-footer">
                <LockIcon size={17} />
                <span>
                  {t.seo.feature3Title}
                  <small>{t.footer.openSource} GitHub</small>
                </span>
              </div>
            </aside>
            <div className="workspace-content">
              <ShortcutDock
                items={viewShortcuts}
                label={labels.viewsNav}
                className="workspace-mobile-nav"
              />
              <div
                className={isExploring ? "workspace-live" : "workspace-welcome"}
              >
                <div className="workspace-search-area">
                  <ExplorerHero compact={isExploring} />
                  <SearchPanel
                    ref={searchRef}
                    onSearch={search}
                    isLoading={isLoading}
                    searchedUser={searchedUser}
                  />
                  {!isExploring && (
                    <div className="workspace-trust">
                      <span>
                        <LockIcon size={13} />
                        {t.seo.feature3Title}
                      </span>
                      <span>
                        <GitHubIcon size={13} />
                        {t.footer.openSource} GitHub
                      </span>
                    </div>
                  )}
                </div>
                <div
                  id="explorer-results"
                  className="workspace-results scroll-mt-6"
                >
                  {explorerBody}
                </div>
              </div>
            </div>
          </div>
        </ExplorerWindow>
        <div className="workspace-bottom-line">
          <span>
            <span className="workspace-status-dot" />
            {copy.ready}
          </span>
          <span className="workspace-credits" dir="ltr">
            <span>GITHUBSTER / V.04</span>
            <span aria-hidden="true">/</span>
            <a
              href="https://github.com/madeburo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm py-1 text-fg-muted transition-colors hover:text-fg hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              By MadeBuro
            </a>
          </span>
        </div>
      </main>
    </AppShell>
  );
}
