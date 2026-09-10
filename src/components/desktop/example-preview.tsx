"use client";

import { explorerLabels, withUser } from "@/lib/explorer-content";
import { useLocale } from "@/lib/locale-context";
import { ExplorerTabs } from "./explorer-tabs";
import { NetworkPanel, PublicProfileBadge } from "./network-panel";
import { PeopleList, type Person } from "./people-list";
import { StatsPreview } from "./stats-preview";

/**
 * Illustrative, static sample shown before the first search — not live GitHub data.
 * Keep it in sync with the design mock rather than the real profile.
 */
const EXAMPLE = {
  login: "torvalds",
  counts: { followers: 203_000, following: 0, mutuals: 0, unfollowers: 203_000 },
  followers: [
    { login: "kubernetes", subtitle: "Kubernetes", accent: "#326ce5" },
    { login: "vercel", subtitle: "Vercel", accent: "#111118" },
    { login: "printfd", subtitle: "printfd", accent: "#8b7cf6" },
  ],
  following: [
    { login: "linux", subtitle: "The Linux Kernel", accent: "#2f2f3a" },
    { login: "git", subtitle: "Git", accent: "#f05032" },
    { login: "subsurface", subtitle: "Subsurface", accent: "#2b6fd6" },
  ],
} satisfies { login: string; counts: Record<string, number>; followers: Person[]; following: Person[] };

const noop = () => {};

export function ExamplePreview() {
  const { t, locale } = useLocale();
  const labels = explorerLabels[locale];
  const compact = new Intl.NumberFormat(locale, { notation: "compact", maximumFractionDigits: 0 });
  const openLabel = (login: string) => withUser(labels.openProfile, login);

  return (
    // `inert`: the sample looks like the real panel but is not interactive or announced as live data.
    <div inert className="select-none">
      <NetworkPanel
        heading={
          <>
            <h2 className="font-display text-lg font-semibold text-fg">
              <span className="font-medium text-fg-muted">{labels.example}:</span> {EXAMPLE.login}
            </h2>
            <PublicProfileBadge login={EXAMPLE.login} label={labels.publicProfile} />
          </>
        }
        aside={
          <ExplorerTabs
            className="max-sm:hidden"
            idPrefix="example"
            label={labels.example}
            active="overview"
            onChange={noop}
            items={[
              { id: "overview", label: labels.overview },
              { id: "followers", label: t.tabs.followers },
              { id: "following", label: t.tabs.following },
              { id: "mutuals", label: t.tabs.mutuals },
            ]}
          />
        }
      >
        <StatsPreview
          stats={[
            { key: "followers", label: t.stats.followers, value: compact.format(EXAMPLE.counts.followers) },
            { key: "following", label: t.stats.following, value: compact.format(EXAMPLE.counts.following) },
            { key: "mutuals", label: t.stats.mutuals, value: compact.format(EXAMPLE.counts.mutuals) },
            { key: "unfollowers", label: t.tabs.unfollowers, value: compact.format(EXAMPLE.counts.unfollowers) },
          ]}
        />
        <div className="mt-3 hidden gap-3 md:grid md:grid-cols-2">
          <PeopleList title={t.tabs.followers} people={EXAMPLE.followers} openLabel={openLabel} viewAllLabel={labels.viewAll} onViewAll={noop} />
          <PeopleList
            title={withUser(labels.peopleFollows, EXAMPLE.login)}
            people={EXAMPLE.following}
            openLabel={openLabel}
            viewAllLabel={labels.viewAll}
            onViewAll={noop}
          />
        </div>
      </NetworkPanel>
    </div>
  );
}
