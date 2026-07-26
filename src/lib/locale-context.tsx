"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { locales, type Locale, isRtl } from "./i18n";
import { translations } from "./translations";
import type { Translations } from "./translations/en";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
});

const LOCALE_CHANGE_EVENT = "githubster:locale-change";

export function useLocale() {
  return useContext(LocaleContext);
}

function detectLocale(): Locale {
  const stored = localStorage.getItem("locale");
  if (stored && locales.includes(stored as Locale)) {
    return stored as Locale;
  }

  const browserLangs = navigator.languages || [navigator.language];
  for (const lang of browserLangs) {
    const code = lang.split("-")[0].toLowerCase();
    if (locales.includes(code as Locale)) {
      return code as Locale;
    }
  }

  return "en";
}

function getServerLocaleSnapshot(): Locale {
  return "en";
}

function subscribeToLocale(onStoreChange: () => void) {
  function handleStorage(event: StorageEvent) {
    if (event.key === "locale") {
      onStoreChange();
    }
  }

  window.addEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", handleStorage);
  };
}

function applyDirection(locale: Locale) {
  document.documentElement.dir = isRtl(locale) ? "rtl" : "ltr";
  document.documentElement.lang = locale;
}

function applyMeta(locale: Locale) {
  const t = translations[locale];
  document.title = t.meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", t.meta.description);
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    detectLocale,
    getServerLocaleSnapshot
  );

  useEffect(() => {
    applyDirection(locale);
    applyMeta(locale);
  }, [locale]);

  function setLocale(newLocale: Locale) {
    localStorage.setItem("locale", newLocale);
    applyDirection(newLocale);
    applyMeta(newLocale);
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
  }

  const t = translations[locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}
