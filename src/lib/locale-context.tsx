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
  }, [locale]);

  function setLocale(newLocale: Locale) {
    localStorage.setItem("locale", newLocale);
    setCurrentLocale(newLocale);
    applyDirection(newLocale);
  }

  const t = translations[locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}
