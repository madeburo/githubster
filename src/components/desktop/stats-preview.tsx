"use client";

import type { ComponentType } from "react";
import { FollowersIcon, FollowingIcon, MutualsIcon, NotFollowingBackIcon } from "@/components/icons";
import { cx, focusRing } from "@/lib/ui";

export type StatKey = "followers" | "following" | "mutuals" | "unfollowers";

export type StatItem = { key: StatKey; label: string; value: string };

const tones: Record<StatKey, { icon: ComponentType<{ size?: number }>; bubble: string; card?: string }> = {
  followers: { icon: FollowersIcon, bubble: "bg-violet-100 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300" },
  following: { icon: FollowingIcon, bubble: "bg-sky-100 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300" },
  mutuals: { icon: MutualsIcon, bubble: "bg-emerald-100 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300" },
  unfollowers: {
    icon: NotFollowingBackIcon,
    bubble: "bg-orange-100 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300",
    card: "border-orange-100 bg-orange-50/60 dark:border-orange-400/15 dark:bg-orange-400/[0.06]",
  },
};

/** Four relationship counters. When `onSelect` is given each card opens its list. */
export function StatsPreview({ stats, onSelect }: { stats: StatItem[]; onSelect?: (key: StatKey) => void }) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
      {stats.map(({ key, label, value }) => {
        const tone = tones[key];
        const Icon = tone.icon;
        const className = cx(
          "flex min-w-0 items-center gap-3 rounded-2xl border p-3 text-start sm:p-4",
          tone.card ?? "border-line bg-card",
          onSelect && cx("cursor-pointer transition-[transform,box-shadow] hover:shadow-[var(--shadow-lg)] motion-safe:hover:-translate-y-0.5", focusRing)
        );
        const content = (
          <>
            <span className={cx("hidden size-11 shrink-0 items-center justify-center rounded-full sm:flex", tone.bubble)}>
              <Icon size={22} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-xs font-medium text-fg-muted">{label}</span>
              <span className="mt-0.5 block font-display text-xl font-bold tabular-nums text-fg sm:text-2xl">{value}</span>
            </span>
          </>
        );

        return onSelect ? (
          <button key={key} type="button" onClick={() => onSelect(key)} className={className}>
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
