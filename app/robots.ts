import type { MetadataRoute } from "next";

// TODO: update this to the real purchased domain before deploying to Vercel
const BASE_URL = "https://letrasbonitas.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
