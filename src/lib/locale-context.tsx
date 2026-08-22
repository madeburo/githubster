"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { type Locale, isRtl } from "./i18n";
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

export function useLocale() {
  return useContext(LocaleContext);
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

export function LocaleProvider({
  children,
  initialLocale = "en",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setCurrentLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    applyDirection(locale);
    applyMeta(locale);
  }, [locale]);

  function setLocale(newLocale: Locale) {
    localStorage.setItem("locale", newLocale);
    setCurrentLocale(newLocale);
    applyDirection(newLocale);
    applyMeta(newLocale);
  }

  const t = translations[locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}
