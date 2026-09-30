import type { MetadataRoute } from "next";

const BASE = "https://www.maidwonderland.com";

const services = ["maid", "nanny", "elder", "labor"];
const locations: Record<string, string[]> = {
  maid:  ["กรุงเทพ","ลาดพร้าว","สุขุมวิท","บางนา","ทองหล่อ","นนทบุรี","ปทุมธานี","สมุทรปราการ","รามคำแหง","บางกะปิ","มีนบุรี","ลาดกระบัง"],
  nanny: ["กรุงเทพ","ลาดพร้าว","สุขุมวิท","บางนา","ทองหล่อ","นนทบุรี","ปทุมธานี","สมุทรปราการ","รามคำแหง","บางกะปิ","มีนบุรี","ลาดกระบัง"],
  elder: ["กรุงเทพ","ลาดพร้าว","สุขุมวิท","บางนา","ทองหล่อ","นนทบุรี","ปทุมธานี","สมุทรปราการ","รามคำแหง","บางกะปิ","มีนบุรี","ลาดกระบัง"],
  labor: ["กรุงเทพ","ลาดพร้าว","สุขุมวิท","บางนา","ทองหล่อ","นนทบุรี","ปทุมธานี","สมุทรปราการ","รามคำแหง","บางกะปิ","มีนบุรี","ลาดกระบัง"],
};
const keywords: Record<string, string> = {
  maid: "แม่บ้าน", nanny: "พี่เลี้ยงเด็ก", elder: "ผู้ดูแลผู้สูงอายุ", labor: "แรงงานทั่วไป",
};

const UA = "Mozilla/5.0 (compatible; NextJS/1.0; +https://maidwonderland.com)";

async function getArticleSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  let page = 1;
  try {
    while (true) {
      const res = await fetch(
        `${BASE}/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug`,
        { next: { revalidate: 3600 }, headers: { "User-Agent": UA } }
      );
      if (!res.ok) break;
      const posts: { slug: string }[] = await res.json();
      if (!Array.isArray(posts) || posts.length === 0) break;
      slugs.push(...posts.map((p) => p.slug));
      const totalPages = parseInt(res.headers.get("X-WP-TotalPages") ?? "1", 10);
      if (page >= totalPages) break;
      page++;
    }
  } catch {}
  return slugs;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const articleSlugs = await getArticleSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/articles`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...services.map((s) => ({
      url: `${BASE}/services/${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];

  const locationPages: MetadataRoute.Sitemap = services.flatMap((s) =>
    (locations[s] ?? []).map((loc) => ({
      url: `${BASE}/services/${s}/${encodeURIComponent(keywords[s] + loc)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }))
  );

  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${BASE}/articles/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...locationPages, ...articlePages];
}
