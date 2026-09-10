"use client";

import Image from "next/image";
import { ProfileOverviewCard } from "@/components/profile-overview";
import { RateLimit } from "@/components/rate-limit";
import { ShareButton } from "@/components/share-button";
import { UserGrid } from "@/components/user-grid";
import { explorerLabels, withUser } from "@/lib/explorer-content";
import type { FollowData, GitHubUser, ProfileOverview, RateLimitInfo } from "@/lib/github";
import { useLocale } from "@/lib/locale-context";
import { ExplorerTabs, tabId } from "./explorer-tabs";
import { NetworkPanel, PublicProfileBadge } from "./network-panel";
import { PeopleList, type Person } from "./people-list";
import { StatsPreview } from "./stats-preview";

export type ExplorerView = "overview" | "followers" | "following" | "mutuals" | "unfollowers" | "notFollowingBack";

type ListView = Exclude<ExplorerView, "overview">;

const OVERVIEW_LIST_SIZE = 5;

interface NetworkResultsProps {
  data: FollowData;
  profileOverview: ProfileOverview | null;
  username: string;
  rateLimit: RateLimitInfo | null;
  view: ExplorerView;
  onViewChange: (view: ExplorerView) => void;
}

function toPeople(users: GitHubUser[]): Person[] {
  return users.slice(0, OVERVIEW_LIST_SIZE).map((user) => ({ login: user.login, avatarUrl: user.avatar_url }));
}

export function NetworkResults({ data, profileOverview, username, rateLimit, view, onViewChange }: NetworkResultsProps) {
  const { t, locale } = useLocale();
  const labels = explorerLabels[locale];
  const format = (value: number) => value.toLocaleString(locale);
  const openLabel = (login: string) => withUser(labels.openProfile, login);

  const emptyMessages: Record<ListView, string> = {
    followers: t.empty.followers,
    following: t.empty.following,
    mutuals: t.empty.mutuals,
    unfollowers: t.empty.unfollowers,
    notFollowingBack: t.empty.notFollowingBack,
  };

  const tabs: { id: ExplorerView; label: string; count?: number }[] = [
    { id: "overview", label: labels.overview },
    { id: "followers", label: t.tabs.followers, count: data.followers.length },
    { id: "following", label: t.tabs.following, count: data.following.length },
    { id: "mutuals", label: t.tabs.mutuals, count: data.mutuals.length },
    { id: "unfollowers", label: t.tabs.unfollowers, count: data.unfollowers.length },
    { id: "notFollowingBack", label: t.tabs.notFollowingBack, count: data.notFollowingBack.length },
  ];

  return (
    <div className="animate-slide-up">
      <NetworkPanel
        heading={
          <>
            {profileOverview?.avatarUrl && (
              <Image src={profileOverview.avatarUrl} alt="" width={32} height={32} className="size-8 rounded-full ring-2 ring-card" unoptimized />
            )}
            <h2 className="min-w-0 truncate font-display text-lg font-semibold text-fg">@{username}</h2>
            <PublicProfileBadge login={username} label={labels.publicProfile} />
          </>
        }
        aside={<ShareButton username={username} />}
      >
        <div className="space-y-3">
          {rateLimit && <RateLimit rateLimit={rateLimit} />}
          <ExplorerTabs idPrefix="results" label={`@${username}`} items={tabs} active={view} onChange={onViewChange} />
        </div>

        <div id="results-panel" role="tabpanel" aria-labelledby={tabId("results", view)} className="mt-4">
          {view === "overview" ? (
            <div className="space-y-3">
              {profileOverview && (
                <div id="insights" className="scroll-mt-24">
                  <ProfileOverviewCard overview={profileOverview} username={username} avatarUrl={profileOverview.avatarUrl} />
                </div>
              )}
              <StatsPreview
                onSelect={onViewChange}
                stats={[
                  { key: "followers", label: t.stats.followers, value: format(data.followers.length) },
                  { key: "following", label: t.stats.following, value: format(data.following.length) },
                  { key: "mutuals", label: t.stats.mutuals, value: format(data.mutuals.length) },
                  { key: "unfollowers", label: t.tabs.unfollowers, value: format(data.unfollowers.length) },
                ]}
              />
              <div className="grid gap-3 md:grid-cols-2">
                <PeopleList
                  title={t.tabs.followers}
                  people={toPeople(data.followers)}
                  openLabel={openLabel}
                  viewAllLabel={labels.viewAll}
                  onViewAll={() => onViewChange("followers")}
                  emptyText={t.empty.followers}
                />
                <PeopleList
                  title={withUser(labels.peopleFollows, username)}
                  people={toPeople(data.following)}
                  openLabel={openLabel}
                  viewAllLabel={labels.viewAll}
                  onViewAll={() => onViewChange("following")}
                  emptyText={t.empty.following}
                />
              </div>
            </div>
          ) : (
            <UserGrid
              users={data[view]}
              emptyMessage={emptyMessages[view]}
              emptyIcon={
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
          )}
        </div>
      </NetworkPanel>
    </div>
  );
}
