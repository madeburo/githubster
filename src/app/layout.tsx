import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { LocaleProvider } from "@/lib/locale-context";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Githubster — Track Your GitHub Followers & Unfollowers",
  description:
    "Free open-source tool to see who doesn't follow you back on GitHub, discover your fans, and manage your following list. No login required.",
  keywords: [
    "github", "followers", "unfollowers", "github tracker",
    "who unfollowed me", "github following", "not following back",
    "github tool", "open source",
  ],
  authors: [{ name: "Made Büro", url: "https://madeburo.com" }],
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
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap"
          rel="stylesheet"
        />
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <script
            defer
            src={process.env.NEXT_PUBLIC_UMAMI_URL || "https://umami.madeburo.com/mb.js"}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(t==null&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
