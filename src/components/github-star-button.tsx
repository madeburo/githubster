"use client";

import { useState, useEffect } from "react";
import { GitHubIcon } from "@/components/icons";
import { pillClass } from "@/lib/ui";
import { useLocale } from "@/lib/locale-context";

export function GitHubStarButton() {
  const { t, locale } = useLocale();
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    // Served and cached by our own route so it does not spend the visitor's GitHub API quota.
    fetch("/api/stars")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (typeof data?.stars === "number") {
          setStars(data.stars);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <a
      href="https://github.com/madeburo/githubster"
      target="_blank"
      rel="noopener noreferrer"
      className={pillClass}
      aria-label={stars === null ? t.support.star : `${t.support.star} (${stars.toLocaleString(locale)})`}
    >
      <GitHubIcon size={15} className="text-fg" />
      Star
      {stars !== null && (
        <span className="rounded-full bg-canvas px-1.5 py-0.5 text-[11px] font-semibold tabular-nums text-fg-muted">
          {stars}
        </span>
      )}
    </a>
  );
}
