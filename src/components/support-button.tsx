"use client";

import { SupportHeart } from "@/components/support-heart";
import { useLocale } from "@/lib/locale-context";
import { pillClass } from "@/lib/ui";

/** Jumps to the page's support section. */
export function SupportButton() {
  const { t } = useLocale();

  return (
    <a href="#support" className={pillClass}>
      <SupportHeart size={15} />
      <span className="max-sm:sr-only">{t.support.nav}</span>
    </a>
  );
}
