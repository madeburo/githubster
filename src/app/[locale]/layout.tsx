import { RootDocument } from "@/app/root-document";
import { isRtl, locales, type Locale } from "@/lib/i18n";
import { baseMetadata } from "@/lib/site";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export const metadata = baseMetadata;

/**
 * Root layout for localized routes, so `<html lang dir>` is correct in the server-rendered HTML.
 * Unknown locales still get a document (in English); the page inside it responds with a 404.
 */
export default async function LocaleRootLayout({ children, params }: Props) {
  const { locale } = await params;
  const activeLocale: Locale = locales.includes(locale as Locale) ? (locale as Locale) : "en";

  return (
    <RootDocument lang={activeLocale} dir={isRtl(activeLocale) ? "rtl" : "ltr"}>
      {children}
    </RootDocument>
  );
}
