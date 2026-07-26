"use client";

import { useSyncExternalStore } from "react";

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

export function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  function handleToggle(isDark: boolean) {
    if (isDark === dark) return;

    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));

    // Force repaint on mobile Safari
    document.body.style.display = "none";
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    document.body.offsetHeight;
    document.body.style.display = "";
  }

  return (
    <div
      className="relative flex rounded-full p-0.5"
      style={{ background: "var(--border)" }}
    >
      <button
        type="button"
        onClick={() => handleToggle(false)}
        className="relative z-10 cursor-pointer select-none rounded-full px-3 py-1.5 text-xs font-medium"
        style={{
          background: !dark ? "var(--bg-card)" : "transparent",
          color: !dark ? "var(--text)" : "var(--text-muted)",
          boxShadow: !dark ? "var(--shadow)" : "none",
        }}
      >
        Light
      </button>
      <button
        type="button"
        onClick={() => handleToggle(true)}
        className="relative z-10 cursor-pointer select-none rounded-full px-3 py-1.5 text-xs font-medium"
        style={{
          background: dark ? "var(--bg-card)" : "transparent",
          color: dark ? "var(--text)" : "var(--text-muted)",
          boxShadow: dark ? "var(--shadow)" : "none",
        }}
      >
        Dark
      </button>
    </div>
  );
}
