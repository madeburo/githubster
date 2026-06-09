"use client";

import type { LoadingProgress } from "@/lib/github";
import { useLocale } from "@/lib/locale-context";

interface SkeletonLoaderProps {
  progress: LoadingProgress | null;
}

function SkeletonCard() {
  return (
    <div
      className="flex items-center gap-3 rounded-xl border p-3"
      style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
    >
      <div
        className="h-10 w-10 animate-pulse-soft rounded-full"
        style={{ background: "var(--border)" }}
      />
      <div className="flex-1 space-y-2">
        <div
          className="h-3 w-24 animate-pulse-soft rounded"
          style={{ background: "var(--border)" }}
        />
        <div
          className="h-2.5 w-32 animate-pulse-soft rounded"
          style={{ background: "var(--border)", opacity: 0.6 }}
        />
      </div>
    </div>
  );
}

export function SkeletonLoader({ progress }: SkeletonLoaderProps) {
  const { t } = useLocale();

  return (
    <div className="mt-8 space-y-6 animate-fade-in">
      {/* Progress indicator */}
      <div
        className="flex items-center gap-4 rounded-xl border px-4 py-3"
        style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
      >
        <svg className="h-5 w-5 animate-spin shrink-0" viewBox="0 0 24 24" fill="none" style={{ color: "var(--gradient-start)" }}>
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <div className="flex-1">
          <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
            {t.loading?.title || "Loading profile data..."}
          </p>
          {progress && (
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              {t.loading?.followers || "Followers"}: {progress.followersLoaded} · {t.loading?.following || "Following"}: {progress.followingLoaded}
            </p>
          )}
        </div>
      </div>

      {/* Stats skeleton */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border p-4 text-center"
            style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
          >
            <div
              className="mx-auto h-7 w-10 animate-pulse-soft rounded"
              style={{ background: "var(--border)" }}
            />
            <div
              className="mx-auto mt-2 h-3 w-16 animate-pulse-soft rounded"
              style={{ background: "var(--border)", opacity: 0.6 }}
            />
          </div>
        ))}
      </div>

      {/* Cards skeleton */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
