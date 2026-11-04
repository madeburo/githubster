"use client";

import { useEffect, useRef, type KeyboardEvent } from "react";
import { cx, focusRing } from "@/lib/ui";

export type TabItem<T extends string> = {
  id: T;
  label: string;
  count?: number;
};

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

export function ExplorerTabs<T extends string>({
  items,
  active,
  onChange,
  idPrefix,
  label,
  className,
}: ExplorerTabsProps<T>) {
  const listRef = useRef<HTMLDivElement>(null);
  const previousActive = useRef(active);
  useEffect(() => {
    if (previousActive.current !== active) {
      listRef.current
        ?.querySelector<HTMLElement>(`#${CSS.escape(tabId(idPrefix, active))}`)
        ?.scrollIntoView({ block: "nearest", inline: "nearest" });
      previousActive.current = active;
    }
  }, [active, idPrefix]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = items.findIndex((item) => item.id === active);
    const isRtl = getComputedStyle(event.currentTarget).direction === "rtl";
    const step = { ArrowRight: isRtl ? -1 : 1, ArrowLeft: isRtl ? 1 : -1 }[
      event.key
    ];
    let next: number | undefined;

    if (step !== undefined) next = (index + step + items.length) % items.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = items.length - 1;
    if (next === undefined) return;

    event.preventDefault();
    onChange(items[next].id);
    listRef.current
      ?.querySelector<HTMLButtonElement>(
        `#${CSS.escape(tabId(idPrefix, items[next].id))}`,
      )
      ?.focus();
  }

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={label}
      onKeyDown={handleKeyDown}
      className={cx("workspace-tabs", className)}
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
              "workspace-tab",
              focusRing,
              selected ? "is-active" : "text-fg-muted hover:text-fg",
            )}
          >
            {item.label}
            {item.count !== undefined && (
              <span
                className={cx(
                  "workspace-tab-count",
                  selected ? "text-fg" : "text-fg-muted",
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
