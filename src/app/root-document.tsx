import { Caveat, Google_Sans_Flex, Manrope } from "next/font/google";
import { ErrorBoundary } from "@/components/error-boundary";
import { JsonLd } from "@/components/json-ld";
import { KofiWidget } from "@/components/kofi-widget";
import { PwaRegistration } from "@/components/pwa-registration";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-google-sans-flex",
  display: "swap",
  adjustFontFallback: false,
});

// Handwritten accent for the decorative desktop notes only, so it is not preloaded.
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  preload: false,
});

/** The `<html>` document shared by the English and localized root layouts. */
export function RootDocument({ lang, dir, children }: { lang: string; dir: "ltr" | "rtl"; children: React.ReactNode }) {
  return (
    <html
      lang={lang}
      dir={dir}
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${googleSansFlex.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6d58ee" />
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <script
            defer
            src={process.env.NEXT_PUBLIC_UMAMI_URL || "https://umami.withnohype.com/mb.js"}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}})();`,
          }}
        />
        <JsonLd />
      </head>
      <body className="min-h-screen antialiased">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <KofiWidget />
        <PwaRegistration />
      </body>
    </html>
  );
}
