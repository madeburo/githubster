"use client";

import { useState } from "react";
import type { GitHubUser } from "@/lib/github";
import { useLocale } from "@/lib/locale-context";
import { UserCard } from "./user-card";

interface UserGridProps {
  users: GitHubUser[];
  emptyMessage?: string;
  emptyIcon?: React.ReactNode;
}

export function UserGrid({
  users,
  emptyMessage = "No users found",
  emptyIcon,
}: UserGridProps) {
  const { t } = useLocale();
  const [search, setSearch] = useState("");

  const filtered = users.filter((u) =>
    u.login.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {users.length > 0 && (
        <div
          className="flex items-center gap-2 rounded-xl border px-4 py-2.5"
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
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              ✕
            </button>
          )}
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
