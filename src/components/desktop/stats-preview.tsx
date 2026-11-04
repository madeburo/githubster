"use client";

import type { ComponentType } from "react";
import {
  FollowersIcon,
  FollowingIcon,
  MutualsIcon,
  NotFollowingBackIcon,
} from "@/components/icons";
import { cx, focusRing } from "@/lib/ui";

export type StatKey = "followers" | "following" | "mutuals" | "unfollowers";

export type StatItem = { key: StatKey; label: string; value: string };

const tones: Record<StatKey, { icon: ComponentType<{ size?: number }> }> = {
  followers: { icon: FollowersIcon },
  following: { icon: FollowingIcon },
  mutuals: { icon: MutualsIcon },
  unfollowers: { icon: NotFollowingBackIcon },
};

/** Four relationship counters. When `onSelect` is given each card opens its list. */
export function StatsPreview({
  stats,
  onSelect,
}: {
  stats: StatItem[];
  onSelect?: (key: StatKey) => void;
}) {
  return (
    <div className="workspace-stats">
      {stats.map(({ key, label, value }) => {
        const tone = tones[key];
        const Icon = tone.icon;
        const className = cx(
          "workspace-stat",
          `workspace-stat-${key}`,
          onSelect && cx("workspace-stat-button", focusRing),
        );
        const content = (
          <>
            <span className="workspace-stat-label">
              <Icon size={14} />
              <span>{label}</span>
            </span>
            <span className="workspace-stat-value">
              {value}
              <span aria-hidden="true">↗</span>
            </span>
          </>
        );

        return onSelect ? (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(key)}
            className={className}
          >
            {content}
          </button>
        ) : (
          <div key={key} className={className}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
