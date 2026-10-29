import type { NextConfig } from "next";
import { readFileSync } from "node:fs";

const isDev = process.env.NODE_ENV === "development";

let starsSnapshot = "unavailable";
try {
  const { stars } = JSON.parse(readFileSync(".generated/repository-stars.json", "utf8"));
  if (Number.isSafeInteger(stars) && stars >= 0) starsSnapshot = String(stars);
} catch {
  // The counter is optional before the first build or when GitHub is unavailable.
}

const nextConfig: NextConfig = {
  env: { GITHUBSTER_STARS_SNAPSHOT: starsSnapshot },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-DNS-Prefetch-Control",
          value: "on",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://umami.withnohype.com https://storage.ko-fi.com https://static.cloudflareinsights.com`,
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://storage.ko-fi.com",
            "img-src 'self' https://avatars.githubusercontent.com https://storage.ko-fi.com data:",
            "font-src 'self' https://fonts.gstatic.com",
            // Cloudflare Web Analytics: the beacon script loads from static.cloudflareinsights.com and reports to cloudflareinsights.com.
            "connect-src 'self' https://api.github.com https://umami.withnohype.com https://cloudflareinsights.com",
            "frame-src https://ko-fi.com",
            "frame-ancestors 'none'",
          ].join("; "),
        },
      ],
    },
  ],
};

export default nextConfig;
