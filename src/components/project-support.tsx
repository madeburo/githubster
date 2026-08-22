import Image from "next/image";

const GITHUB_URL = "https://github.com/madeburo/githubster";
const PAYPAL_URL = "https://paypal.me/UmidM";
const KOFI_URL = "https://ko-fi.com/githubster";

export function ProjectSupport() {
  return (
    <section
      id="support"
      className="rounded-2xl border p-5 text-center"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      aria-label="Support Githubster"
    >
      <h2 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
        Support Githubster
      </h2>
      <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
        Githubster is free and open source. If you find it useful, you can support its development.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <a
          href={KOFI_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-opacity hover:opacity-80"
          style={{ color: "white", background: "#29abe0" }}
        >
          <Image src="/kofi.svg" alt="" width={15} height={15} className="h-3.5 w-3.5" />
          Support on Ko-fi
        </a>
        <a
          href={PAYPAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/5"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          <Image src="/paypal.svg" alt="" width={15} height={15} className="h-3.5 w-3.5" />
          PayPal
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/5"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          ★ Star on GitHub
        </a>
      </div>
    </section>
  );
}
