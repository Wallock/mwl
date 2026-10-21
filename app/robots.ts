import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: [
      "https://www.maidwonderland.com/sitemap.xml",
      "https://www.maidwonderland.com/sitemap_index.xml",
    ],
  };
}
