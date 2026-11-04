"use client";

import { useId } from "react";
import { GitHubIcon, ArrowRightIcon } from "@/components/icons";
import type { FollowData } from "@/lib/github";
import { useLocale } from "@/lib/locale-context";
import { workspaceCopy } from "@/lib/workspace-content";
import { cx, focusRing } from "@/lib/ui";
import type { ExplorerView } from "./network-results";

type MapView = "mutuals" | "notFollowingBack" | "unfollowers";

const positions: Record<MapView, readonly (readonly [number, number])[]> = {
  mutuals: [
    [338, 46],
    [392, 126],
    [326, 201],
    [259, 25],
  ],
  notFollowingBack: [
    [124, 42],
    [67, 123],
    [128, 207],
    [30, 65],
  ],
  unfollowers: [
    [423, 43],
    [457, 190],
    [233, 232],
    [420, 229],
  ],
};

/** A small, deterministic sample of direct relationships; no connections between other users are inferred. */
export function NetworkMap({
  data,
  username,
  onSelect,
}: {
  data: FollowData;
  username: string;
  onSelect: (view: ExplorerView) => void;
}) {
  const { t, locale } = useLocale();
  const copy = workspaceCopy[locale];
  const patternId = useId();
  const groups: { key: MapView; label: string; tone: string }[] = [
    { key: "mutuals", label: t.tabs.mutuals, tone: "map-mutual" },
    {
      key: "notFollowingBack",
      label: t.tabs.notFollowingBack,
      tone: "map-follower",
    },
    { key: "unfollowers", label: t.tabs.unfollowers, tone: "map-following" },
  ];

  return (
    <section className="network-map" aria-label={copy.map}>
      <div className="network-map-heading">
        <h3>{copy.map}</h3>
        <span aria-hidden="true" className="network-map-coordinate">
          [ x, y ]
        </span>
      </div>
      <p className="network-map-hint">{copy.mapHint}</p>
      <div className="network-map-canvas" dir="ltr" aria-hidden="true">
        <svg viewBox="0 0 500 260" fill="none" className="network-map-lines">
          <defs>
            <pattern
              id={patternId}
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="1"
                cy="1"
                r="0.75"
                fill="currentColor"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="500" height="260" fill={`url(#${patternId})`} />
          <circle
            cx="246"
            cy="126"
            r="91"
            stroke="currentColor"
            opacity="0.08"
            strokeDasharray="3 6"
          />
          <circle
            cx="246"
            cy="126"
            r="57"
            stroke="currentColor"
            opacity="0.08"
          />
          <path
            d="M246 1v13M246 246v13M5 126h18M475 126h18"
            stroke="currentColor"
            opacity="0.3"
          />
          {groups.flatMap(({ key, tone }) =>
            data[key].slice(0, 4).map((person, i) => {
              const [x, y] = positions[key][i];
              return (
                <g key={`${key}-${person.login}`} className={tone}>
                  <path
                    d={`M246 126 Q${(246 + x) / 2} ${126 + (y - 126) * 0.2} ${x} ${y}`}
                    stroke="currentColor"
                    opacity={key === "mutuals" ? "0.65" : "0.35"}
                    strokeDasharray={key === "unfollowers" ? "4 5" : undefined}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r={key === "mutuals" ? "18" : "14"}
                    fill="var(--map-node)"
                    stroke="currentColor"
                    strokeOpacity="0.65"
                  />
                  <text
                    x={x}
                    y={y + 4}
                    textAnchor="middle"
                    fill="currentColor"
                    className="network-map-initial"
                  >
                    {person.login.slice(0, 2).toUpperCase()}
                  </text>
                  {i < 2 && (
                    <text
                      x={x}
                      y={y + 34}
                      textAnchor="middle"
                      fill="var(--map-label)"
                      className="network-map-login"
                    >
                      {person.login}
                    </text>
                  )}
                </g>
              );
            }),
          )}
        </svg>
        <div className="network-map-center">
          <GitHubIcon size={31} />
        </div>
        <span className="network-map-username">@{username}</span>
      </div>
      <div className="network-map-legend">
        {groups.map(({ key, label, tone }) => (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(key)}
            title={label}
            className={cx("network-map-legend-item", tone, focusRing)}
          >
            <span className="network-map-dot" aria-hidden="true" />
            <span className="min-w-0 flex-1 truncate text-start">{label}</span>
            <span className="font-mono tabular-nums">
              {data[key].length.toLocaleString(locale)}
            </span>
            <ArrowRightIcon size={13} className="opacity-40 rtl:rotate-180" />
          </button>
        ))}
      </div>
    </section>
  );
}
