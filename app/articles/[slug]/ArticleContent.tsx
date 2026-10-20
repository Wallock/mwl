"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import ShareButtons from "@/components/ShareButtons";

const BASE = process.env.WORDPRESS_URL ?? "https://www.maidwonderland.com";

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
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

function formatThaiDate(iso: string) {
  const d = new Date(iso);
  const m = ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
  return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear() + 543}`;
}

async function fetchPost(slug: string): Promise<WPPost | null> {
  const candidates = [slug, encodeURIComponent(slug)];
  for (const s of candidates) {
    try {
      const res = await fetch(
        `${BASE}/wp-json/wp/v2/posts?slug=${encodeURIComponent(s)}&_embed`
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

function setMetaTag(attr: string, key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function ArticleContent({ slug }: { slug: string }) {
  const [post, setPost] = useState<WPPost | null | "loading">("loading");
  const [jsonLd, setJsonLd] = useState<string>("");

  useEffect(() => {
    fetchPost(slug).then((p) => {
      setPost(p);
      if (!p) return;

      const title = seoTitle(decodeHtml(p.title.rendered));
      const excerptClean = decodeHtml(p.excerpt?.rendered ?? "");
      const contentClean = decodeHtml(p.content?.rendered ?? "");
      const excerpt = seoDesc(excerptClean.length >= 70 ? excerptClean : contentClean);
      const img = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
      const url = `https://www.maidwonderland.com/articles/${slug}`;

      document.title = title;
      setMetaTag("name", "description", excerpt);
      setMetaTag("property", "og:title", title);
      setMetaTag("property", "og:description", excerpt);
      setMetaTag("property", "og:url", url);
      setMetaTag("property", "og:type", "article");
      if (img) setMetaTag("property", "og:image", img);
      setMetaTag("name", "twitter:card", "summary_large_image");
      setMetaTag("name", "twitter:title", title);
      setMetaTag("name", "twitter:description", excerpt);

      setJsonLd(JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: decodeHtml(p.title.rendered),
        description: excerpt,
        datePublished: p.date,
        url,
        publisher: {
          "@type": "Organization",
          name: "แม่บ้านดีดี เซอร์วิส",
          url: "https://www.maidwonderland.com",
        },
        ...(img && { image: img }),
      }));
    });
  }, [slug]);

  return (
    <>
      {jsonLd && (
        <Script
          id="article-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
          strategy="afterInteractive"
        />
      )}
      <CloneNavbar />
      <GSAPAnimations />
      <main>
        {post === "loading" ? (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="w-10 h-10 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
          </div>
        ) : post === null ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <p className="text-ink-muted text-base">ไม่พบบทความนี้</p>
            <Link href="/articles" className="text-sm font-semibold text-gold-dark hover:text-gold">
              ← กลับไปหน้าบทความ
            </Link>
          </div>
        ) : (
          <>
            {/* Hero */}
            <section className="relative overflow-hidden py-10 lg:py-14"
              style={{ background: "linear-gradient(135deg, #F5E6BE 0%, #EDD49E 40%, #F0DDB8 70%, #F8EDD3 100%)" }}>
              <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-30" />
              <div className="relative z-10 max-w-3xl mx-auto px-5">
                <nav className="flex items-center gap-2 text-[12px] text-ink-muted mb-5">
                  <Link href="/" className="hover:text-gold-dark transition-colors">หน้าแรก</Link>
                  <span className="text-gold/50">›</span>
                  <Link href="/articles" className="hover:text-gold-dark transition-colors">บทความ</Link>
                  <span className="text-gold/50">›</span>
                  <span className="text-ink line-clamp-1">{decodeHtml(post.title.rendered)}</span>
                </nav>
                <span className="inline-flex items-center gap-1 bg-white border border-gold/25 rounded-full px-3 py-1 text-[10px] font-bold text-gold-dark mb-4">
                  ✦ {formatThaiDate(post.date)}
                </span>
                <h1 className="font-black text-ink leading-[1.4]" style={{ fontSize: "clamp(22px,4vw,38px)" }}>
                  {decodeHtml(post.title.rendered)}
                </h1>
              </div>
            </section>

            {/* Content */}
            <section className="bg-white py-10 lg:py-14">
              <div className="max-w-3xl mx-auto px-5">
                {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                  <div className="rounded-2xl overflow-hidden mb-8 shadow-[0_8px_32px_rgba(100,60,0,0.12)]"
                    style={{ border: "1.5px solid rgba(201,169,110,0.25)" }}>
                    <Image
                      src={post._embedded["wp:featuredmedia"][0].source_url}
                      alt={post._embedded["wp:featuredmedia"][0].alt_text || decodeHtml(post.title.rendered)}
                      width={900}
                      height={500}
                      className="w-full block"
                      style={{ height: "auto", aspectRatio: "16/9", objectFit: "cover" }}
                      priority
                      unoptimized
                    />
                  </div>
                )}
                <div className="wp-article" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                <ShareButtons
                  url={`https://www.maidwonderland.com/articles/${slug}`}
                  title={decodeHtml(post.title.rendered)}
                />
                <div className="mt-6">
                  <Link href="/articles"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors">
                    ← กลับไปหน้าบทความ
                  </Link>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <CloneFooter />
    </>
  );
}
