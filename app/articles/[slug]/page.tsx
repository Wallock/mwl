import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import ShareButtons from "@/components/ShareButtons";

export const dynamicParams = true;
export const revalidate = 3600;

const BASE = "https://www.maidwonderland.com";

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
    og_image?: Array<{ url: string }>;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
}

function decodeHtml(str: string) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/<[^>]+>/g, "");
}

function formatThaiDate(iso: string) {
  const d = new Date(iso);
  const m = ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
  return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear() + 543}`;
}

const UA = "Mozilla/5.0 (compatible; NextJS/1.0; +https://maidwonderland.com)";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs: string[] = [];
  let page = 1;
  try {
    while (true) {
      const res = await fetch(
        `${BASE}/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug`,
        { headers: { "User-Agent": UA }, next: { revalidate: 3600 } }
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

async function getPost(slug: string): Promise<WPPost | null> {
  // WP sometimes stores slugs as percent-encoded literals — try both forms
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = post.yoast_head_json?.title ?? `${decodeHtml(post.title.rendered)} | แม่บ้านดีดี เซอร์วิส`;
  const rawDesc = post.yoast_head_json?.description ?? decodeHtml(post.excerpt.rendered);
  const description = rawDesc.slice(0, 160);
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
      publishedTime: post.date,
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const title = decodeHtml(post.title.rendered);
  const media = post._embedded?.["wp:featuredmedia"]?.[0];

  return (
    <>
      <CloneNavbar />
      <GSAPAnimations />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden py-10 lg:py-14"
          style={{ background: "linear-gradient(135deg, #F5E6BE 0%, #EDD49E 40%, #F0DDB8 70%, #F8EDD3 100%)" }}>
          <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-30" />
          <div className="relative z-10 max-w-3xl mx-auto px-5">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[12px] text-ink-muted mb-5">
              <Link href="/" className="hover:text-gold-dark transition-colors">หน้าแรก</Link>
              <span className="text-gold/50">›</span>
              <Link href="/articles" className="hover:text-gold-dark transition-colors">บทความ</Link>
              <span className="text-gold/50">›</span>
              <span className="text-ink line-clamp-1">{title}</span>
            </nav>

            <span className="inline-flex items-center gap-1 bg-white border border-gold/25 rounded-full px-3 py-1 text-[10px] font-bold text-gold-dark mb-4">
              ✦ {formatThaiDate(post.date)}
            </span>
            <h1 className="font-black text-ink leading-[1.4]" style={{ fontSize: "clamp(22px,4vw,38px)" }}>
              {title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-10 lg:py-14">
          <div className="max-w-3xl mx-auto px-5">

            {/* Featured image */}
            {media?.source_url && (
              <div className="rounded-2xl overflow-hidden mb-8 shadow-[0_8px_32px_rgba(100,60,0,0.12)]"
                style={{ border: "1.5px solid rgba(201,169,110,0.25)" }}>
                <Image
                  src={media.source_url}
                  alt={media.alt_text || title}
                  width={900}
                  height={500}
                  className="w-full block"
                  style={{ height: "auto", aspectRatio: "16/9", objectFit: "cover" }}
                  priority
                />
              </div>
            )}

            {/* WP article content */}
            <div
              className="wp-article"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* Share buttons */}
            <ShareButtons
              url={`https://www.maidwonderland.com/articles/${slug}`}
              title={title}
            />

            {/* Back link */}
            <div className="mt-6">
              <Link href="/articles"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors">
                ← กลับไปหน้าบทความ
              </Link>
            </div>
          </div>
        </section>

      </main>
      <CloneFooter />

    </>
  );
}
