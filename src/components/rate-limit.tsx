"use client";

import { useState, useEffect } from "react";
import type { RateLimitInfo } from "@/lib/github";
import { useLocale } from "@/lib/locale-context";

interface RateLimitProps {
  rateLimit: RateLimitInfo;
}

export function RateLimit({ rateLimit }: RateLimitProps) {
  const { t } = useLocale();
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const diff = rateLimit.resetAt.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft(t.rateLimit.now);
        return;
      }
      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${minutes}m ${seconds}s`);
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [rateLimit.resetAt, t.rateLimit.now]);

  const percentage = (rateLimit.remaining / rateLimit.limit) * 100;
  const isLow = percentage < 20;
  const isCritical = percentage < 5;

  const barColor = isCritical
    ? "#ef4444"
    : isLow
      ? "#f59e0b"
      : "#10b981";

  return (
    <div
      className="flex items-center gap-3 rounded-xl border px-4 py-2.5"
      style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke={barColor}
        strokeWidth="2"
        className="shrink-0"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>

      <div className="flex flex-1 items-center gap-3">
        <div className="flex-1">
          <div
            className="h-1.5 overflow-hidden rounded-full"
            style={{ background: "var(--border)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${percentage}%`,
                background: barColor,
              }}
            />
          </div>
        </div>
        <span className="shrink-0 text-xs tabular-nums" style={{ color: "var(--text-muted)" }}>
          {rateLimit.remaining}/{rateLimit.limit}
        </span>
      </div>

      <span className="shrink-0 text-xs" style={{ color: "var(--text-subtle)" }}>
        {t.rateLimit.resets.replace("{time}", timeLeft)}
      </span>
    </div>
  );
}
