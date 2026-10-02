"use client";

import { useEffect, useRef, useState } from "react";
import { AppShell } from "@/components/desktop/app-shell";
import { ShortcutDock, ShortcutRail, type ShortcutItem } from "@/components/desktop/desktop-shortcut";
import { ExamplePreview } from "@/components/desktop/example-preview";
import { ExplorerHero } from "@/components/desktop/explorer-hero";
import { ExplorerWindow } from "@/components/desktop/explorer-window";
import { AboutSection } from "@/components/desktop/feature-cards";
import { NetworkResults, type ExplorerView } from "@/components/desktop/network-results";
import { SearchPanel, type SearchPanelHandle } from "@/components/desktop/search-panel";
import { EmptyNetwork, SearchError } from "@/components/desktop/search-status";
import {
  AboutIcon,
  CompareIcon,
  FollowersIcon,
  FollowingIcon,
  HomeIcon,
  InsightsIcon,
  MutualsIcon,
  NotFollowingBackIcon,
  SupportIcon,
} from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkeletonLoader } from "@/components/skeleton-loader";
import { explorerLabels } from "@/lib/explorer-content";
import { locales, type Locale } from "@/lib/i18n";
import { LocaleProvider, useLocale } from "@/lib/locale-context";
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
    if (/bot|crawler|spider|crawling|slurp|facebookexternalhit|preview/i.test(navigator.userAgent)) return;

    const storedLocale = localStorage.getItem("locale");
    const browserLocales = navigator.languages || [navigator.language];
    const preferredLocale =
      (storedLocale && locales.includes(storedLocale as Locale) ? storedLocale : undefined) ??
      browserLocales
        .map((language) => {
          const languageCode = language.split("-")[0].toLowerCase();
          return languageCode === "nb" || languageCode === "nn" ? "no" : languageCode;
        })
        .find((language) => locales.includes(language as Locale));

    if (!preferredLocale || preferredLocale === "en") return;

    window.location.replace(`/${preferredLocale}${window.location.search}${window.location.hash}`);
  }, [initialLocale]);

  return null;
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function HomeContent() {
  const { t, locale } = useLocale();
  const labels = explorerLabels[locale];
  const { data, profileOverview, username, rateLimit, progress, isLoading, error, search, retry, reset } = useNetworkSearch();
  const [view, setView] = useState<ExplorerView>("overview");
  const searchRef = useRef<SearchPanelHandle>(null);
  const prefix = locale === "en" ? "" : `/${locale}`;
  const hasResults = !!data && (data.followers.length > 0 || data.following.length > 0);

  /** Desktop shortcuts pick a view; without results they preselect it and send the user to the search box. */
  function openView(next: ExplorerView, targetId = "explorer-results") {
    setView(next);
    if (hasResults) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
    } else {
      searchRef.current?.focusUsername();
    }
  }

  function goHome() {
    reset();
    setView("overview");
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  }

  const viewShortcuts: ShortcutItem[] = [
    { id: "home", label: labels.home, icon: HomeIcon, href: prefix || "/", onSelect: goHome, active: view === "overview" },
    { id: "followers", label: t.tabs.followers, icon: FollowersIcon, onSelect: () => openView("followers"), active: view === "followers" },
    { id: "following", label: t.tabs.following, icon: FollowingIcon, onSelect: () => openView("following"), active: view === "following" },
    { id: "mutuals", label: t.tabs.mutuals, icon: MutualsIcon, onSelect: () => openView("mutuals"), active: view === "mutuals" },
    { id: "unfollowers", label: t.tabs.unfollowers, icon: NotFollowingBackIcon, onSelect: () => openView("unfollowers"), active: view === "unfollowers" },
  ];

  const resourceShortcuts: ShortcutItem[] = [
    { id: "compare", label: labels.compare, icon: CompareIcon, href: `${prefix}/guides/github-followers-vs-following` },
    { id: "insights", label: labels.insights, icon: InsightsIcon, onSelect: () => openView("overview", "insights") },
    { id: "about", label: labels.about, icon: AboutIcon, href: "#about" },
  ];
  const supportShortcut: ShortcutItem = { id: "support", label: t.support.nav, icon: SupportIcon, href: "#support" };

  let explorerBody: React.ReactNode;
  if (error) {
    explorerBody = (
      <SearchError error={error} isLoading={isLoading} onRetry={retry} onAddToken={() => searchRef.current?.openToken()} />
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
    explorerBody = <ExamplePreview />;
  }

  return (
    <AppShell
      header={<SiteHeader onLogoClick={goHome} />}
      footer={
        <>
          <AboutSection />
          <SiteFooter />
        </>
      }
    >
      <main className="mx-auto w-full max-w-[1680px] px-3 pb-16 pt-5 sm:px-6 sm:pt-7 xl:grid xl:grid-cols-[7.5rem_minmax(0,1fr)_7.5rem] xl:gap-6">
        <ShortcutRail items={viewShortcuts} label={labels.viewsNav} className="hidden xl:block" />

        <div className="min-w-0">
          {/* Support already lives in the header, so the tablet dock skips it. */}
          <ShortcutDock
            items={[...viewShortcuts, ...resourceShortcuts]}
            label={labels.viewsNav}
            className="mb-4 hidden md:block xl:hidden"
          />
          <div className="mx-auto max-w-[66rem]">
            <ExplorerWindow title="Githubster Explorer">
              <div className="relative px-4 pb-4 pt-7 sm:px-8 sm:pb-8 sm:pt-12 lg:px-10">
                <ExplorerHero />
                <div className="mt-7">
                  <SearchPanel ref={searchRef} onSearch={search} isLoading={isLoading} />
                </div>
                <div id="explorer-results" className="mt-8 scroll-mt-6 sm:mt-10">
                  {explorerBody}
                </div>
              </div>
            </ExplorerWindow>
          </div>
        </div>

        <ShortcutRail items={[...resourceShortcuts, supportShortcut]} label={labels.moreNav} className="hidden xl:block xl:pt-44" />
      </main>
    </AppShell>
  );
}
