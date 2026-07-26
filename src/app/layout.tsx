import type { Metadata } from "next";
import { Google_Sans_Flex, Manrope } from "next/font/google";
import { LocaleProvider } from "@/lib/locale-context";
import { ErrorBoundary } from "@/components/error-boundary";
import { JsonLd } from "@/components/json-ld";
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
  title: "Githubster — Track Your GitHub Followers & Unfollowers",
  description:
    "Free open-source tool to see who doesn't follow you back on GitHub, discover your fans, and manage your following list.",
  keywords: [
    "github", "followers", "unfollowers", "github tracker",
    "who unfollowed me", "github following", "not following back",
    "github tool", "open source",
  ],
  authors: [{ name: "Made Büro", url: "https://github.com/madeburo" }],
  creator: "Made Büro",
  metadataBase: new URL("https://www.githubster.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.githubster.com",
    siteName: "Githubster",
    title: "Githubster — Track Your GitHub Followers & Unfollowers",
    description:
      "Free open-source tool to see who doesn't follow you back on GitHub, discover your fans, and manage your following list.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Githubster" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Githubster — Track Your GitHub Followers & Unfollowers",
    description:
      "Free open-source tool to see who doesn't follow you back on GitHub. No login required.",
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
      </body>
    </html>
  );
}
