"use client";

import { useLocale } from "@/lib/locale-context";
import type { ProfileOverview } from "@/lib/github";

interface ProfileOverviewProps {
  overview: ProfileOverview;
  username: string;
  avatarUrl: string;
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Ruby: "#cc342d",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  PHP: "#777bb4",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Vue: "#41b883",
  Svelte: "#ff3e00",
  Lua: "#000080",
  Scala: "#c22d40",
  Elixir: "#6e4a7e",
  Haskell: "#5e5086",
  Zig: "#ec915c",
  Nim: "#ffc200",
  "C#": "#178600",
  "Objective-C": "#438eff",
  R: "#198ce7",
  Perl: "#0298c3",
  Clojure: "#db5855",
};

function getLanguageColor(language: string): string {
  return languageColors[language] || "var(--text-muted)";
}

export function ProfileOverviewCard({ overview, username, avatarUrl }: ProfileOverviewProps) {
  const { t } = useLocale();

  return (
    <div
      className="flex flex-col gap-4 rounded-xl border p-4 sm:flex-row sm:items-center sm:gap-5"
      style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
    >
      {/* Avatar + name */}
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 transition-opacity hover:opacity-80"
      >
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          width={44}
          height={44}
          className="rounded-full"
        />
        <div className="min-w-0">
          <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
            @{username}
          </p>
          <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
            {overview.publicRepos} {t.profileOverview.repositories} · ★ {overview.totalStars}
          </p>
        </div>
      </a>

      {/* Languages */}
      {overview.topLanguages.length > 0 && (
        <div className="flex flex-1 flex-col gap-2 sm:border-l sm:pl-5" style={{ borderColor: "var(--border)" }}>
          {/* Language bar */}
          <div className="flex h-2.5 overflow-hidden rounded-full" style={{ background: "var(--border)" }}>
            {overview.topLanguages.map((lang, i) => (
              <div
                key={lang.language}
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: getLanguageColor(lang.language),
                  marginLeft: i > 0 ? "1px" : undefined,
                }}
                title={`${lang.language} — ${lang.percentage}%`}
              />
            ))}
          </div>

          {/* Language labels */}
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {overview.topLanguages.map((lang) => (
              <div key={lang.language} className="flex items-center gap-1">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: getLanguageColor(lang.language) }}
                />
                <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                  {lang.language} {lang.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
