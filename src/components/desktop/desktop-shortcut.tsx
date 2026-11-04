"use client";

import type { ComponentType, MouseEvent } from "react";
import { cx, focusRing } from "@/lib/ui";
import { useLocale } from "@/lib/locale-context";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

export type ShortcutItem = {
  id: string;
  label: string;
  icon: IconComponent;
  active?: boolean;
  count?: number;
  /** Renders a link. Combine with `onSelect` to enhance a real URL with in-page behaviour. */
  href?: string;
  onSelect?: () => void;
};

type DesktopShortcutProps = ShortcutItem & { variant?: "tile" | "chip" };

export function DesktopShortcut({
  label,
  icon: Icon,
  active = false,
  count,
  href,
  onSelect,
  variant = "tile",
}: DesktopShortcutProps) {
  const { locale } = useLocale();
  const isTile = variant === "tile";
  const className = cx(
    "workspace-nav-item",
    !isTile && "workspace-nav-chip",
    active && "is-active",
    focusRing,
  );
  const content = (
    <>
      <Icon size={17} className="shrink-0" />
      <span className="min-w-0 flex-1 text-start">{label}</span>
      {count !== undefined && (
        <span className="workspace-nav-count">
          {count.toLocaleString(locale)}
        </span>
      )}
    </>
  );

  if (href) {
    const handleClick = onSelect
      ? (event: MouseEvent<HTMLAnchorElement>) => {
          if (
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.button !== 0
          )
            return;
          event.preventDefault();
          onSelect();
        }
      : undefined;

    return (
      <a
        href={href}
        onClick={handleClick}
        aria-current={active ? "page" : undefined}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={cx("cursor-pointer", className)}
    >
      {content}
    </button>
  );
}

/** Vertical column of desktop icons shown beside the explorer window on wide screens. */
export function ShortcutRail({
  items,
  label,
  className,
}: {
  items: ShortcutItem[];
  label: string;
  className?: string;
}) {
  return (
    <nav aria-label={label} className={className}>
      <p className="workspace-nav-label">{label}</p>
      <ul className="flex flex-col gap-1">
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
export function ShortcutDock({
  items,
  label,
  className,
}: {
  items: ShortcutItem[];
  label: string;
  className?: string;
}) {
  return (
    <nav
      aria-label={label}
      className={cx(
        "-mx-3 overflow-x-auto px-3 py-1 [mask-image:linear-gradient(to_right,transparent,black_1.5rem,black_calc(100%-1.5rem),transparent)] [scrollbar-width:none] sm:-mx-6 sm:px-6",
        className,
      )}
    >
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
