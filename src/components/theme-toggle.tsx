"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";
import { useLocale } from "@/lib/locale-context";
import { cx, focusRing } from "@/lib/ui";

const THEME_CHANGE_EVENT = "githubster:theme-change";

function subscribeToTheme(onStoreChange: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerThemeSnapshot() {
  return false;
}

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));

  // Force repaint on mobile Safari
  document.body.style.display = "none";
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  document.body.offsetHeight;
  document.body.style.display = "";
}

export function ThemeToggle() {
  const { t } = useLocale();
  const dark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  function handleToggle(isDark: boolean) {
    if (isDark !== dark) applyTheme(isDark);
  }

  const options = [
    { isDark: false, label: t.theme.light, Icon: SunIcon },
    { isDark: true, label: t.theme.dark, Icon: MoonIcon },
  ];

  return (
    <div
      role="group"
      aria-label={`${t.theme.light} / ${t.theme.dark}`}
      className="inline-flex h-9 items-center gap-0.5 rounded-full border border-line bg-card/85 p-1 shadow-[var(--shadow)] backdrop-blur-md"
    >
      {options.map(({ isDark, label, Icon }) => {
        const active = isDark === dark;
        return (
          <button
            key={label}
            type="button"
            onClick={() => handleToggle(isDark)}
            aria-pressed={active}
            className={cx(
              "tap-target inline-flex h-7 cursor-pointer select-none items-center gap-1.5 rounded-full px-2.5 text-[13px] font-medium transition-colors",
              focusRing,
              active ? "bg-brand-soft text-fg shadow-sm dark:bg-white/10" : "text-fg-muted hover:text-fg"
            )}
          >
            <Icon size={15} />
            <span className="max-sm:sr-only">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
