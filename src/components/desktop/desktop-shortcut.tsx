"use client";

import type { ComponentType, MouseEvent } from "react";
import { cx, focusRing } from "@/lib/ui";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

export type ShortcutItem = {
  id: string;
  label: string;
  icon: IconComponent;
  active?: boolean;
  /** Renders a link. Combine with `onSelect` to enhance a real URL with in-page behaviour. */
  href?: string;
  onSelect?: () => void;
};

type DesktopShortcutProps = ShortcutItem & { variant?: "tile" | "chip" };

export function DesktopShortcut({ label, icon: Icon, active = false, href, onSelect, variant = "tile" }: DesktopShortcutProps) {
  const isTile = variant === "tile";
  const className = cx(
    "group select-none",
    focusRing,
    isTile
      ? "flex w-full flex-col items-center gap-2 rounded-2xl p-1.5 text-center"
      : cx(
          "inline-flex h-9 shrink-0 items-center gap-2 rounded-full border pointer-coarse:h-11 px-3.5 text-[13px] font-medium shadow-[var(--shadow)] backdrop-blur-md transition-[color,border-color,transform] motion-safe:hover:-translate-y-0.5",
          active ? "border-brand/35 bg-brand-soft text-brand" : "border-line bg-card/85 text-fg-muted hover:text-fg"
        )
  );

  const content = isTile ? (
    <>
      <span
        className={cx(
          "flex size-16 items-center justify-center rounded-[1.15rem] border shadow-[0_10px_24px_-14px_rgba(60,45,150,0.55)] backdrop-blur-md transition-[transform,box-shadow,background-color] duration-200 motion-safe:group-hover:-translate-y-1 group-hover:shadow-[0_16px_30px_-14px_rgba(60,45,150,0.6)] dark:shadow-[0_10px_24px_-12px_rgba(0,0,0,0.7)]",
          active ? "border-brand/30 bg-brand-soft text-brand" : "border-window-line bg-card/95 text-fg/85 group-hover:text-brand"
        )}
      >
        <Icon size={28} />
      </span>
      <span
        className={cx(
          "rounded-lg bg-window px-2 py-0.5 text-[13px] font-medium leading-tight shadow-[0_2px_10px_-6px_rgba(60,45,150,0.5)] backdrop-blur-md",
          active ? "text-brand" : "text-fg"
        )}
      >
        {label}
      </span>
    </>
  ) : (
    <>
      <Icon size={16} />
      {label}
    </>
  );

  if (href) {
    const handleClick = onSelect
      ? (event: MouseEvent<HTMLAnchorElement>) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
          event.preventDefault();
          onSelect();
        }
      : undefined;

    return (
      <a href={href} onClick={handleClick} aria-current={active ? "page" : undefined} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onSelect} aria-pressed={active} className={cx("cursor-pointer", className)}>
      {content}
    </button>
  );
}

/** Vertical column of desktop icons shown beside the explorer window on wide screens. */
export function ShortcutRail({ items, label, className }: { items: ShortcutItem[]; label: string; className?: string }) {
  return (
    <nav aria-label={label} className={cx("sticky top-6 self-start", className)}>
      <ul className="flex flex-col items-center gap-4">
        {items.map((item) => (
          <li key={item.id} className="w-full">
            <DesktopShortcut {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Horizontal dock that replaces the rails on tablet-sized screens. */
export function ShortcutDock({ items, label, className }: { items: ShortcutItem[]; label: string; className?: string }) {
  return (
    <nav aria-label={label} className={cx("-mx-3 overflow-x-auto px-3 py-1 [mask-image:linear-gradient(to_right,transparent,black_1.5rem,black_calc(100%-1.5rem),transparent)] [scrollbar-width:none] sm:-mx-6 sm:px-6", className)}>
      <ul className="mx-auto flex w-max gap-2">
        {items.map((item) => (
          <li key={item.id}>
            <DesktopShortcut {...item} variant="chip" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
