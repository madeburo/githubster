"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

const GITHUB_URL = "https://github.com/madeburo/githubster";
const PAYPAL_URL = "https://paypal.me/UmidM";
const KOFI_URL = "https://ko-fi.com/githubster";

export function ProjectSupport() {
  const { t } = useLocale();

  return (
    <section
      id="support"
      className="scroll-mt-6 text-center"
      aria-label={t.support.title}
    >
      <h2 className="text-xl font-semibold" style={{ color: "#f8fafc" }}>
        {t.support.title}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed" style={{ color: "#b6bad0" }}>
        {t.support.description}
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
        <a
          href={KOFI_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-opacity hover:opacity-80"
          style={{ color: "white", background: "#29abe0" }}
        >
          <Image src="/kofi.svg" alt="" width={15} height={15} className="h-3.5 w-3.5" />
          {t.support.kofi}
        </a>
        <a
          href={PAYPAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-white/10"
          style={{ borderColor: "#3a3d55", color: "#e2e8f0" }}
        >
          <Image src="/paypal.svg" alt="" width={15} height={15} className="h-3.5 w-3.5" />
          {t.support.paypal}
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-white/10"
          style={{ borderColor: "#3a3d55", color: "#e2e8f0" }}
        >
          ★ {t.support.star}
        </a>
      </div>
    </section>
  );
}
