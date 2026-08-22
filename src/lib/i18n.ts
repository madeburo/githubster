export const locales = [
  "en", "ru", "zh", "ko", "ja", "pt", "es", "de", "fr", "it", "uk", "kk", "tr", "vi", "ar", "pl", "nl", "da",
] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
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
  vi: "Tiếng Việt",
  ar: "العربية",
  pl: "Polski",
  nl: "Nederlands",
  da: "Dansk",
};

export const rtlLocales: Locale[] = ["ar"];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
