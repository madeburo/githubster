"use client";

import { useState, useEffect } from "react";
import { GitHubIcon } from "@/components/icons";
import { pillClass } from "@/lib/ui";

export function GitHubStarButton() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/madeburo/githubster", {
      headers: { Accept: "application/vnd.github.v3+json" },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.stargazers_count != null) {
          setStars(data.stargazers_count);
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
      aria-label={stars === null ? "Star Githubster on GitHub" : `Star Githubster on GitHub (${stars} stars)`}
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
