"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/bg.jpg)", opacity: 0.04 }}
      />

      <div className="relative z-10 space-y-8 animate-fade-in">
        {/* Logo */}
        <Link href="/" className="group relative inline-block transition-opacity hover:opacity-80">
          <Image
            src="/githubster.svg"
            alt="Githubster"
            width={425}
            height={54}
            loading="eager"
            className="mx-auto hidden h-8 w-auto dark:block"
          />
          <Image
            src="/logo.svg"
            alt="Githubster"
            width={425}
            height={54}
            loading="eager"
            className="mx-auto block h-8 w-auto dark:hidden"
          />
          <span
            className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-md px-2 py-0.5 text-[10px] opacity-0 transition-opacity group-hover:opacity-100"
            style={{ background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
          >
            meow 404 meow
          </span>
        </Link>

        {/* 404 number */}
        <h1
          className="text-[8rem] font-bold leading-none tracking-tighter sm:text-[12rem]"
          style={{
            backgroundImage: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>

        {/* Text */}
        <div className="space-y-2">
          <p className="text-xl font-medium" style={{ color: "var(--text)" }}>
            {t.notFound.title}
          </p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            {t.notFound.description}
          </p>
        </div>

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          {t.notFound.button}
        </Link>
      </div>
    </main>
  );
}
