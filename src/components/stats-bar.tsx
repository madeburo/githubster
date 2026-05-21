"use client";

import { useLocale } from "@/lib/locale-context";

interface StatsBarProps {
  followers: number;
  following: number;
  unfollowers: number;
  notFollowingBack: number;
  mutuals: number;
}

export function StatsBar({
  followers,
  following,
  unfollowers,
  notFollowingBack,
  mutuals,
}: StatsBarProps) {
  const { t } = useLocale();

  const stats = [
    { label: t.stats.followers, value: followers, color: "#10b981" },
    { label: t.stats.following, value: following, color: "#6366f1" },
    { label: t.stats.mutuals, value: mutuals, color: "#8b5cf6" },
    { label: t.stats.unfollowers, value: unfollowers, color: "#ef4444" },
    { label: t.stats.notFollowingBack, value: notFollowingBack, color: "#f59e0b" },
  ];

  return (
    <div className="stagger-children grid grid-cols-2 gap-3 sm:grid-cols-5">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border p-4 text-center"
          style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
        >
          <p className="text-2xl font-bold" style={{ color: stat.color }}>
            {stat.value}
          </p>
          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
