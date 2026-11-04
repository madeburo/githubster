"use client";

import Link from "next/link";
import { ProjectSupport } from "@/components/project-support";
import { useLocale } from "@/lib/locale-context";
import { privacyContent } from "@/lib/privacy-content";

export function SiteFooter({ showSupport = true }: { showSupport?: boolean }) {
  const { t, locale } = useLocale();
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <>
      {showSupport && <ProjectSupport />}
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
