"use client";

import { GitHubIcon } from "@/components/icons";
import { UserGrid } from "@/components/user-grid";
import { explorerLabels } from "@/lib/explorer-content";
import type { FollowData, GitHubUser } from "@/lib/github";
import { useLocale } from "@/lib/locale-context";
import { workspaceCopy } from "@/lib/workspace-content";
import { ExplorerTabs, tabId } from "./explorer-tabs";
import { NetworkMap } from "./network-map";
import type { ExplorerView } from "./network-results";
import { StatsPreview } from "./stats-preview";

// Deliberately illustrative. Derive every category from the two lists so that
// counts stay consistent; no GitHub request runs until someone starts a lookup.
const handles = [
  "mona",
  "hubot",
  "defunkt",
  "mojombo",
  "pjhyett",
  "tpope",
  "schacon",
  "dhh",
  "mdo",
  "sindresorhus",
  "rauchg",
  "gaearon",
  "cassidoo",
  "yyx990803",
  "antfu",
];
const colors = ["#526a3b", "#687583", "#785f89", "#906f3f"];
const people: GitHubUser[] = handles.map((login, i) => ({
  id: i + 1,
  login,
  html_url: `https://github.com/${login}`,
  avatar_url: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" rx="10" fill="${colors[i % colors.length]}"/><text x="20" y="25" text-anchor="middle" fill="white" font-size="12" font-family="monospace">${login.slice(0, 2).toUpperCase()}</text></svg>`)}`,
}));
const followers = people.slice(0, 12);
const following = [...people.slice(0, 5), ...people.slice(12)];
const followerIds = new Set(followers.map((p) => p.id));
const followingIds = new Set(following.map((p) => p.id));
const sample: FollowData = {
  followers,
  following,
  mutuals: followers.filter((p) => followingIds.has(p.id)),
  unfollowers: following.filter((p) => !followerIds.has(p.id)),
  notFollowingBack: followers.filter((p) => !followingIds.has(p.id)),
  rateLimit: null,
};

export function ExamplePreview({
  view,
  onViewChange,
}: {
  view: ExplorerView;
  onViewChange: (view: ExplorerView) => void;
}) {
  const { t, locale } = useLocale();
  const labels = explorerLabels[locale];
  const copy = workspaceCopy[locale];
  const tabs = [
    { id: "overview" as const, label: labels.overview },
    {
      id: "followers" as const,
      label: t.tabs.followers,
      count: followers.length,
    },
    {
      id: "following" as const,
      label: t.tabs.following,
      count: following.length,
    },
    {
      id: "mutuals" as const,
      label: t.tabs.mutuals,
      count: sample.mutuals.length,
    },
    {
      id: "unfollowers" as const,
      label: t.tabs.unfollowers,
      count: sample.unfollowers.length,
    },
    {
      id: "notFollowingBack" as const,
      label: t.tabs.notFollowingBack,
      count: sample.notFollowingBack.length,
    },
  ];
  return (
    <div className="workspace-demo">
      <div className="workspace-demo-header">
        <div className="flex items-center gap-2.5">
          <span className="workspace-demo-avatar">
            <GitHubIcon size={20} />
          </span>
          <h2 dir="ltr" className="font-mono text-sm font-medium">@octocat</h2>
        </div>
        <span className="workspace-sample-label">
          <span aria-hidden="true" />
          {copy.sample}
        </span>
      </div>
      <ExplorerTabs
        idPrefix="example"
        label={`${labels.example}: octocat`}
        items={tabs}
        active={view}
        onChange={onViewChange}
      />
      <div
        id="example-panel"
        role="tabpanel"
        aria-labelledby={tabId("example", view)}
        className="workspace-demo-panel"
      >
        {view === "overview" ? (
          <>
            <StatsPreview
              onSelect={onViewChange}
              stats={[
                {
                  key: "followers",
                  label: t.stats.followers,
                  value: String(followers.length),
                },
                {
                  key: "following",
                  label: t.stats.following,
                  value: String(following.length),
                },
                {
                  key: "mutuals",
                  label: t.stats.mutuals,
                  value: String(sample.mutuals.length),
                },
                {
                  key: "unfollowers",
                  label: t.tabs.unfollowers,
                  value: String(sample.unfollowers.length),
                },
              ]}
            />
            <NetworkMap
              data={sample}
              username="octocat"
              onSelect={onViewChange}
            />
          </>
        ) : (
          <div className="workspace-demo-list">
            <UserGrid users={sample[view]} />
          </div>
        )}
      </div>
    </div>
  );
}
