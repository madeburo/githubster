"use client";

import Link from "next/link";
import { ProjectSupport } from "@/components/project-support";
import { useLocale } from "@/lib/locale-context";
import { privacyContent } from "@/lib/privacy-content";

export function SiteFooter() {
  const { t, locale } = useLocale();
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <>
      <section
        className="border-t bg-cover bg-center bg-no-repeat px-4 py-14 sm:py-16"
        style={{
          borderColor: "#25283d",
          backgroundImage:
            'linear-gradient(rgba(13, 14, 27, 0.85), rgba(13, 14, 27, 0.85)), url("/bg.jpg")',
        }}
      >
        <div className="mx-auto max-w-5xl"><ProjectSupport /></div>
      </section>
      <footer className="border-t px-4 py-6 text-center text-xs" style={{ borderColor: "var(--border)", color: "var(--text-subtle)" }}>
        <p>
          {t.footer.openSource}{" "}
          <a href="https://github.com/madeburo/githubster" target="_blank" rel="noopener noreferrer" className="transition-colors hover:underline" style={{ color: "var(--text-muted)" }}>GitHub</a>
          {" · "}© 2026{" · "}
          <a href="mailto:hi@githubster.com" className="transition-colors hover:underline" style={{ color: "var(--text-muted)" }}>hi@githubster.com</a>
          {" · "}
          <Link href={`${prefix}/privacy`} className="transition-colors hover:underline" style={{ color: "var(--text-muted)" }}>
            {privacyContent[locale].linkLabel}
          </Link>
        </p>
      </footer>
    </>
  );
}
