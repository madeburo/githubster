export const locales = [
  "en", "zh", "ko", "ja", "pt", "es", "de", "fr", "it", "uk", "kk", "tr", "ar", "pl", "nl", "da",
] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ko: "한국어",
  ja: "日本語",
  pt: "Português",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  uk: "Українська",
  kk: "Қазақша",
  tr: "Türkçe",
  ar: "العربية",
  pl: "Polski",
  nl: "Nederlands",
  da: "Dansk",
};

export const rtlLocales: Locale[] = ["ar"];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
