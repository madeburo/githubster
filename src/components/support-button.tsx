"use client";

import { HeartIcon } from "@/components/icons";
import { useLocale } from "@/lib/locale-context";
import { pillClass } from "@/lib/ui";

/** Jumps to the support section rendered by the site footer. */
export function SupportButton() {
  const { t } = useLocale();

  return (
    <a href="#support" className={pillClass}>
      <HeartIcon size={15} className="text-pink-500" />
      <span className="max-sm:sr-only">{t.support.nav}</span>
    </a>
  );
}
