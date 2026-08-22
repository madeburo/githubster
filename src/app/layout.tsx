import type { Metadata } from "next";
import { Google_Sans_Flex, Manrope } from "next/font/google";
import { LocaleProvider } from "@/lib/locale-context";
import { ErrorBoundary } from "@/components/error-boundary";
import { JsonLd } from "@/components/json-ld";
import { KofiWidget } from "@/components/kofi-widget";
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

export const metadata: Metadata = {
  title: "GitHub Followers Checker — Find Who Doesn’t Follow Back | Githubster",
  description:
    "Compare public GitHub followers and following lists to find people who do not follow back, mutuals, and profile insights. Free and no Githubster account required.",
  authors: [{ name: "Made Büro", url: "https://github.com/madeburo" }],
  creator: "Made Büro",
  metadataBase: new URL("https://www.githubster.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.githubster.com",
    siteName: "Githubster",
    title: "GitHub Followers Checker — Find Who Doesn’t Follow Back | Githubster",
    description:
      "Compare public GitHub followers and following lists to find people who do not follow back, mutuals, and profile insights.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Githubster" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Followers Checker — Find Who Doesn’t Follow Back | Githubster",
    description:
      "Compare public GitHub followers and following lists. No Githubster account required.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://www.githubster.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true, follow: true,
      "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${googleSansFlex.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <script
            defer
            src={process.env.NEXT_PUBLIC_UMAMI_URL || "https://umami.madeburo.com/mb.js"}
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
          <LocaleProvider>{children}</LocaleProvider>
        </ErrorBoundary>
        <KofiWidget />
      </body>
    </html>
  );
}
