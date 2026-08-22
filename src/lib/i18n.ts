export const locales = [
  "en", "zh", "ko", "ja", "pt", "es", "de", "fr", "it", "uk", "he", "tr", "ar", "pl", "nl", "da", "sv", "no", "cs", "hu",
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
  he: "עברית",
  tr: "Türkçe",
  ar: "العربية",
  pl: "Polski",
  nl: "Nederlands",
  da: "Dansk",
  sv: "Svenska",
  no: "Norsk",
  cs: "Čeština",
  hu: "Magyar",
};

export const rtlLocales: Locale[] = ["ar", "he"];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
