export const locales = [
  "en", "ru", "zh", "ko", "pt", "es", "de", "fr", "kk", "tr", "id", "hi", "ar",
] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  zh: "中文",
  ko: "한국어",
  pt: "Português",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  kk: "Қазақша",
  tr: "Türkçe",
  id: "Bahasa",
  hi: "हिन्दी",
  ar: "العربية",
};

export const rtlLocales: Locale[] = ["ar"];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
