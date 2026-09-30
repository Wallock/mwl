import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

const BASE = "https://www.maidwonderland.com";
const UA = "Mozilla/5.0 (compatible; NextJS/1.0; +https://maidwonderland.com)";

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
  content: { rendered: string };
  excerpt: { rendered: string };
  yoast_head_json?: {
    title?: string;
    description?: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
}

async function getPostMeta(slug: string): Promise<WPPost | null> {
  const candidates = [slug, encodeURIComponent(slug)];
  for (const s of candidates) {
    try {
      const res = await fetch(
        `${BASE}/wp-json/wp/v2/posts?slug=${encodeURIComponent(s)}&_embed`,
        { headers: { "User-Agent": UA }, next: { revalidate: 3600 } }
      );
      if (!res.ok) continue;
      const posts: WPPost[] = await res.json();
      if (posts[0]) return posts[0];
    } catch {
      continue;
    }
  }
  return null;
}

function decodeHtml(str: string) {
  return str
    .replace(/\[(&hellip;|&#8230;|…)\]/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&hellip;/g, "")
    .replace(/&#8230;/g, "")
    .replace(/\[\s*\]/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function seoTitle(raw: string): string {
  const suffix = " | แม่บ้านดีดี เซอร์วิส";
  const maxBody = 60 - suffix.length;
  const body = raw.length > maxBody ? raw.slice(0, maxBody - 1) + "…" : raw;
  return body + suffix;
}

function seoDesc(raw: string): string {
  const clean = raw.replace(/\s+/g, " ").trim();
  return clean.length > 120 ? clean.slice(0, 119) + "…" : clean;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs: string[] = [];
  let page = 1;
  try {
    while (true) {
      const res = await fetch(
        `${BASE}/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug`,
        { headers: { "User-Agent": UA } }
      );
      if (!res.ok) break;
      const posts: { slug: string }[] = await res.json();
      if (!Array.isArray(posts) || posts.length === 0) break;
      slugs.push(...posts.map((p) => p.slug));
      const total = parseInt(res.headers.get("X-WP-TotalPages") ?? "1", 10);
      if (page >= total) break;
      page++;
    }
  } catch {}
  return slugs.map((slug) => ({
    slug: slug.includes("%") ? decodeURIComponent(slug) : slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostMeta(slug).catch(() => null);
  if (!post) return {};

  const rawTitle = post.yoast_head_json?.title ?? decodeHtml(post.title.rendered);
  const title = seoTitle(rawTitle);
  const rawDesc = post.yoast_head_json?.description ?? decodeHtml(post.excerpt.rendered);
  const description = seoDesc(rawDesc);
  const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title,
    description,
    alternates: { canonical: `https://www.maidwonderland.com/articles/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.maidwonderland.com/articles/${slug}`,
      siteName: "แม่บ้านดีดี เซอร์วิส",
      images: img ? [{ url: img, alt: title }] : [{ url: "/images/bg_header.webp", width: 1920, height: 800 }],
      locale: "th_TH",
      type: "article",
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticleContent slug={slug} />;
}
