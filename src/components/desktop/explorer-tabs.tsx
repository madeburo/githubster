"use client";

import { useRef, type KeyboardEvent } from "react";
import { cx, focusRing } from "@/lib/ui";

export type TabItem<T extends string> = { id: T; label: string; count?: number };

interface ExplorerTabsProps<T extends string> {
  items: TabItem<T>[];
  active: T;
  onChange: (id: T) => void;
  /** Prefix for tab/panel ids; the panel must use `${idPrefix}-panel`. */
  idPrefix: string;
  label: string;
  className?: string;
}

export function tabId(idPrefix: string, id: string) {
  return `${idPrefix}-tab-${id}`;
}

export function ExplorerTabs<T extends string>({ items, active, onChange, idPrefix, label, className }: ExplorerTabsProps<T>) {
  const listRef = useRef<HTMLDivElement>(null);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = items.findIndex((item) => item.id === active);
    const isRtl = getComputedStyle(event.currentTarget).direction === "rtl";
    const step = { ArrowRight: isRtl ? -1 : 1, ArrowLeft: isRtl ? 1 : -1 }[event.key];
    let next: number | undefined;

    if (step !== undefined) next = (index + step + items.length) % items.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = items.length - 1;
    if (next === undefined) return;

    event.preventDefault();
    onChange(items[next].id);
    listRef.current?.querySelector<HTMLButtonElement>(`#${CSS.escape(tabId(idPrefix, items[next].id))}`)?.focus();
  }

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={label}
      onKeyDown={handleKeyDown}
      className={cx("-mx-1 flex max-w-full gap-1.5 overflow-x-auto px-1 py-0.5 [scrollbar-width:none]", className)}
    >
      {items.map((item) => {
        const selected = item.id === active;
        return (
          <button
            key={item.id}
            id={tabId(idPrefix, item.id)}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={`${idPrefix}-panel`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(item.id)}
            className={cx(
              "inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 text-[13px] font-medium transition-colors",
              focusRing,
              selected
                ? "bg-(--cta-from) text-white shadow-[0_6px_16px_-8px_var(--cta-from)]"
                : "bg-card-hover text-fg-muted hover:bg-brand-soft hover:text-fg"
            )}
          >
            {item.label}
            {item.count !== undefined && (
              <span
                className={cx(
                  "rounded-full px-1.5 py-px text-[11px] font-semibold tabular-nums",
                  selected ? "bg-white/20 text-white" : "bg-canvas text-fg-muted"
                )}
              >
                {item.count.toLocaleString()}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
