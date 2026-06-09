"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { GitHubUser } from "@/lib/github";
import { useLocale } from "@/lib/locale-context";
import { UserCard } from "./user-card";
import { SortSelector, type SortOption } from "./sort-selector";

interface UserGridProps {
  users: GitHubUser[];
  emptyMessage?: string;
  emptyIcon?: React.ReactNode;
}

// Threshold for enabling virtualization
const VIRTUALIZE_THRESHOLD = 50;

function useColumns() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    function update() {
      const width = window.innerWidth;
      if (width >= 1024) setColumns(3);
      else if (width >= 640) setColumns(2);
      else setColumns(1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return columns;
}

function VirtualizedGrid({ users }: { users: GitHubUser[] }) {
  const parentRef = useRef<HTMLDivElement>(null);
  const columns = useColumns();

  const rows = useMemo(() => {
    const result: GitHubUser[][] = [];
    for (let i = 0; i < users.length; i += columns) {
      result.push(users.slice(i, i + columns));
    }
    return result;
  }, [users, columns]);

  const rowHeight = 76; // card height (p-3 + content) + gap

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight,
    overscan: 5,
    gap: 8,
  });

  return (
    <div
      ref={parentRef}
      className="overflow-y-auto rounded-xl"
      style={{ height: Math.min(rows.length * (rowHeight + 8), 600) }}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const row = rows[virtualRow.index];
          return (
            <div
              key={virtualRow.index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <div
                className="grid gap-2"
                style={{
                  gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                }}
              >
                {row.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function UserGrid({
  users,
  emptyMessage = "No users found",
  emptyIcon,
}: UserGridProps) {
  const { t } = useLocale();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("default");

  const filtered = useMemo(() => {
    let result = users.filter((u) =>
      u.login.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "name-asc") {
      result = [...result].sort((a, b) => a.login.localeCompare(b.login));
    } else if (sort === "name-desc") {
      result = [...result].sort((a, b) => b.login.localeCompare(a.login));
    }

    return result;
  }, [users, search, sort]);

  const handleClear = useCallback(() => setSearch(""), []);

  const shouldVirtualize = filtered.length > VIRTUALIZE_THRESHOLD;

  return (
    <div className="space-y-4">
      {users.length > 0 && (
        <div className="flex items-center gap-2">
          <div
            className="flex flex-1 items-center gap-2 rounded-xl border px-4 py-2.5"
            style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
          >
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              style={{ color: "var(--text-muted)" }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder={t.grid.searchPlaceholder.replace("{count}", String(users.length))}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:opacity-50"
              style={{ color: "var(--text)" }}
              aria-label="Filter users"
            />
            {search && (
              <button
                onClick={handleClear}
                className="text-xs"
                style={{ color: "var(--text-muted)" }}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <SortSelector value={sort} onChange={setSort} />
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-12">
          {emptyIcon && (
            <div style={{ color: "var(--text-subtle)" }}>{emptyIcon}</div>
          )}
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            {emptyMessage}
          </p>
        </div>
      ) : shouldVirtualize ? (
        <VirtualizedGrid users={filtered} />
      ) : (
        <div className="stagger-grid grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
