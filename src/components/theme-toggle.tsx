"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark";

    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function handleToggle(isDark: boolean) {
    if (isDark === dark) return;
    setDark(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Force repaint on mobile Safari
    document.body.style.display = "none";
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    document.body.offsetHeight;
    document.body.style.display = "";
  }

  if (!mounted) return null;

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
