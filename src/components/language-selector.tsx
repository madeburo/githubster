"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useId } from "react";
import { GlobeIcon } from "@/components/icons";
import { useLocale } from "@/lib/locale-context";
import { cx, focusRing, pillClass } from "@/lib/ui";
import { locales, localeNames, type Locale } from "@/lib/i18n";

const languageNameCollator = new Intl.Collator("en", { sensitivity: "base" });
const languageLabels: Record<Locale, string> = {
  en: "Select language", zh: "选择语言", ko: "언어 선택", ja: "言語を選択",
  pt: "Selecionar idioma", es: "Seleccionar idioma", de: "Sprache wählen", fr: "Choisir la langue",
  it: "Seleziona lingua", uk: "Вибрати мову", he: "בחרו שפה", tr: "Dil seçin",
  ar: "اختيار اللغة", pl: "Wybierz język", nl: "Taal kiezen", da: "Vælg sprog",
  sv: "Välj språk", no: "Velg språk", cs: "Vybrat jazyk", hu: "Nyelv kiválasztása",
  ru: "Выбрать язык", id: "Pilih bahasa",
};

export function LanguageSelector() {
  const pathname = usePathname() || "/";
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [suffix, setSuffix] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const label = languageLabels[locale];
  const segments = pathname.split("/").filter(Boolean);
  const hasLocale = locales.includes(segments[0] as Locale);
  const route = `/${(hasLocale ? segments.slice(1) : segments).join("/")}`;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (open && e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:relative" ref={ref}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => {
          setSuffix(`${window.location.search}${window.location.hash}`);
          setOpen(!open);
        }}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={label}
        className={pillClass}
      >
        <GlobeIcon size={15} />
        {locale.toUpperCase()}
      </button>

      {/* Keep real language links in the server HTML, even when the menu is closed. */}
      <nav
        id={menuId}
        aria-label={label}
        dir="ltr"
        className={cx(
          "absolute inset-x-0 top-full z-50 mt-2 max-h-[70dvh] w-auto grid-cols-2 overflow-y-auto rounded-xl border border-line bg-card p-1 shadow-[var(--shadow-lg)] sm:left-auto sm:right-0 sm:w-80",
          open ? "grid" : "hidden",
        )}
      >
        {[...locales]
          .sort((a, b) => languageNameCollator.compare(localeNames[a], localeNames[b]))
          .map((loc) => {
            const localizedPath = loc === "en" ? route : `/${loc}${route === "/" ? "" : route}`;
            return (
              <Link
                key={loc}
                href={`${localizedPath}${suffix}`}
                hrefLang={loc}
                lang={loc}
                prefetch={false}
                aria-current={loc === locale ? "page" : undefined}
                onClick={(event) => {
                  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
                  setLocale(loc);
                  setOpen(false);
                }}
                className={cx(
                  "flex min-h-9 items-center rounded-lg px-3 py-2 text-xs text-fg-muted transition-colors hover:bg-card-hover hover:text-fg",
                  loc === locale && "bg-card-hover text-fg",
                  focusRing,
                )}
              >
                {localeNames[loc]}
              </Link>
            );
          })}
      </nav>
    </div>
  );
}
