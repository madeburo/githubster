import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "GoogleOther",
          "GoogleOther-Image",
          "GoogleOther-Video",
          "CCBot",
          "anthropic-ai",
          "ClaudeBot",
          "Claude-Web",
          "Bytespider",
          "PerplexityBot",
          "Applebot-Extended",
          "cohere-ai",
          "Diffbot",
          "FacebookBot",
          "ImagesiftBot",
          "Omgilibot",
          "Omgili",
          "YouBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.githubster.com/sitemap.xml",
  };
}
