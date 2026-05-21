export const locales = [
  "en", "ru", "zh", "ko", "ja", "pt", "es", "de", "fr", "it", "uk", "kk", "tr", "id", "vi", "hi", "ar",
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
  id: "Bahasa",
  vi: "Tiếng Việt",
  hi: "हिन्दी",
  ar: "العربية",
};

export const rtlLocales: Locale[] = ["ar"];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
