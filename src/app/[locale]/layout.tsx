import { notFound } from "next/navigation";
import { isRtl, locales, type Locale } from "@/lib/i18n";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  const activeLocale = locale as Locale;

  return <div lang={activeLocale} dir={isRtl(activeLocale) ? "rtl" : "ltr"}>{children}</div>;
}
