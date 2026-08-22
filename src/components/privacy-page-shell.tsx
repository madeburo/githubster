"use client";

import { PrivacyPageContent } from "@/components/privacy-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/locale-context";

export function PrivacyPageShell({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider initialLocale={locale}>
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:pt-12"><SiteHeader /></div>
      <PrivacyPageContent locale={locale} />
      <SiteFooter />
    </LocaleProvider>
  );
}
