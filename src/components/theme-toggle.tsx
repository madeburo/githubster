"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function handleToggle(isDark: boolean) {
    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  if (!mounted) return null;

  return (
    <div
      className="relative flex touch-manipulation rounded-full p-0.5"
      style={{ background: "var(--border)" }}
    >
      <button
        type="button"
        onPointerDown={() => handleToggle(false)}
        className="relative z-10 cursor-pointer select-none rounded-full px-3 py-1.5 text-xs font-medium transition-all"
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
        onPointerDown={() => handleToggle(true)}
        className="relative z-10 cursor-pointer select-none rounded-full px-3 py-1.5 text-xs font-medium transition-all"
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
