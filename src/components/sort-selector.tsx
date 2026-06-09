"use client";

import { useLocale } from "@/lib/locale-context";

export type SortOption = "default" | "name-asc" | "name-desc";

interface SortSelectorProps {
  value: SortOption;
  onChange: (sort: SortOption) => void;
}

export function SortSelector({ value, onChange }: SortSelectorProps) {
  const { t } = useLocale();

  return (
    <div className="flex items-center gap-1.5">
      <svg
        width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2"
        style={{ color: "var(--text-muted)" }}
      >
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="14" y2="12" />
        <line x1="4" y1="18" x2="8" y2="18" />
      </svg>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none rounded-lg border bg-transparent px-2 py-1 text-xs outline-none"
        style={{
          borderColor: "var(--border)",
          color: "var(--text-muted)",
        }}
        aria-label={t.sort?.label || "Sort users"}
      >
        <option value="default">{t.sort?.default || "Default"}</option>
        <option value="name-asc">{t.sort?.nameAsc || "Name A→Z"}</option>
        <option value="name-desc">{t.sort?.nameDesc || "Name Z→A"}</option>
      </select>
    </div>
  );
}
