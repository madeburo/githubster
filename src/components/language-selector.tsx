"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GlobeIcon } from "@/components/icons";
import { useLocale } from "@/lib/locale-context";
import { pillClass } from "@/lib/ui";
import { isRtl, locales, localeNames, type Locale } from "@/lib/i18n";

const languageNameCollator = new Intl.Collator("en", { sensitivity: "base" });

export function LanguageSelector() {
  const router = useRouter();
  const { locale, setLocale } = useLocale();
  const currentLocaleIsRtl = isRtl(locale);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
        className={pillClass}
      >
        <GlobeIcon size={15} />
        {locale.toUpperCase()}
      </button>

      {open && (
        <div
          dir="ltr"
          className={`absolute top-full z-50 mt-2 grid w-72 grid-cols-2 overflow-visible rounded-xl border p-1 sm:left-auto sm:right-0 sm:w-80 ${currentLocaleIsRtl ? "right-0" : "left-0"}`}
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-card)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {[...locales].sort((a, b) => languageNameCollator.compare(localeNames[a], localeNames[b])).map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setLocale(loc as Locale);
                setOpen(false);
                const segments = window.location.pathname.split("/").filter(Boolean);
                const pathHasLocale = segments.length > 0 && locales.includes(segments[0] as Locale);
                const routeSegments = pathHasLocale ? segments.slice(1) : segments;
                const routePath = routeSegments.length > 0 ? `/${routeSegments.join("/")}` : "/";
                const localizedPath = loc === "en" ? routePath : `/${loc}${routePath === "/" ? "" : routePath}`;
                const suffix = `${window.location.search}${window.location.hash}`;
                router.push(`${localizedPath}${suffix}`);
              }}
              className="flex w-full items-center rounded-lg px-3 py-2 text-xs transition-colors"
              style={{
                background: loc === locale ? "var(--bg-card-hover)" : "transparent",
                color: loc === locale ? "var(--text)" : "var(--text-muted)",
              }}
            >
              {localeNames[loc as Locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
