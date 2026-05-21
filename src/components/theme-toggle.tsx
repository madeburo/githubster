"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggle(isDark: boolean) {
    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <div
      className="relative flex rounded-full p-0.5"
      style={{ background: "var(--border)" }}
    >
      <button
        onClick={() => toggle(false)}
        className="relative z-10 rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
        style={{
          background: !dark ? "var(--bg-card)" : "transparent",
          color: !dark ? "var(--text)" : "var(--text-muted)",
          boxShadow: !dark ? "var(--shadow)" : "none",
        }}
      >
        Light
      </button>
      <button
        onClick={() => toggle(true)}
        className="relative z-10 rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
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
