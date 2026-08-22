import Link from "next/link";
import { isRtl, type Locale } from "@/lib/i18n";
import { privacyContent } from "@/lib/privacy-content";

export function PrivacyPageContent({ locale }: { locale: Locale }) {
  const content = privacyContent[locale];
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <main dir={isRtl(locale) ? "rtl" : "ltr"} className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
      <Link href={prefix || "/"} className="text-sm hover:underline" style={{ color: "var(--gradient-start)" }}>
        <span aria-hidden="true">{isRtl(locale) ? "→" : "←"}</span> Githubster
      </Link>
      <h1 className="mt-5 text-3xl font-bold sm:text-5xl" style={{ color: "var(--text)" }}>{content.title}</h1>
      <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>{content.updated}</p>
      <div className="mt-10 space-y-8">
        {content.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold" style={{ color: "var(--text)" }}>{section.heading}</h2>
            <p className="mt-3 leading-relaxed" style={{ color: "var(--text-muted)" }}>{section.text}</p>
          </section>
        ))}
      </div>
      {locale !== "en" && (
        <p className="mt-10 rounded-xl border p-4 text-sm leading-relaxed" style={{ borderColor: "var(--border)", background: "var(--bg-card)", color: "var(--text-muted)" }}>
          {content.precedence}
        </p>
      )}
      <p className="mt-12 text-sm" style={{ color: "var(--text-muted)" }}>
        {content.questions} <a href="mailto:hi@githubster.com" className="underline">hi@githubster.com</a>
      </p>
    </main>
  );
}
