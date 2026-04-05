import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ChatGPT-User", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "GoogleOther", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "Claude-Web", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "Meta-ExternalAgent", disallow: "/" },
      { userAgent: "FacebookBot", disallow: "/" },
      { userAgent: "Amazonbot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Applebot-Extended", disallow: "/" },
      { userAgent: "PerplexityBot", disallow: "/" },
      { userAgent: "Cohere-ai", disallow: "/" },
      { userAgent: "YouBot", disallow: "/" },
      { userAgent: "Diffbot", disallow: "/" },
      { userAgent: "ImagesiftBot", disallow: "/" },
      { userAgent: "Omgilibot", disallow: "/" },
      { userAgent: "Timpibot", disallow: "/" },
      { userAgent: "OAI-SearchBot", disallow: "/" },
    ],
    sitemap: "https://decon.mlsystemsri.com/sitemap.xml",
  };
}
