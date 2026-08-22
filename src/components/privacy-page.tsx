import { isRtl, type Locale } from "@/lib/i18n";
import { privacyContent } from "@/lib/privacy-content";

export function PrivacyPageContent({ locale }: { locale: Locale }) {
  const content = privacyContent[locale];

  return (
    <main dir={isRtl(locale) ? "rtl" : "ltr"} className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
      <h1 className="text-3xl font-bold sm:text-5xl" style={{ color: "var(--text)" }}>{content.title}</h1>
      <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>{content.updated}</p>
      <div className="mt-10 space-y-8">
        {content.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold" style={{ color: "var(--text)" }}>{section.heading}</h2>
            <p className="mt-3 leading-relaxed" style={{ color: "var(--text-muted)" }}>{section.text}</p>
          </section>
        ))}
      </div>
      <p className="mt-12 text-sm" style={{ color: "var(--text-muted)" }}>
        {content.questions} <a href="mailto:hi@githubster.com" className="underline">hi@githubster.com</a>
      </p>
    </main>
  );
}
