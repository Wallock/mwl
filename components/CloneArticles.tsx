"use client";
import Image from "next/image";
import Link from "next/link";
import { useT } from "@/context/LanguageContext";

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
}

function formatDate(iso: string, months: readonly string[]) {
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]}`;
}

function decodeHtml(str: string) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"');
}

export default function CloneArticles({ initialPosts = [] }: { initialPosts?: WPPost[] }) {
  const T = useT();
  const posts = initialPosts;

  return (
    <section className="relative bg-white py-12 lg:py-16 overflow-hidden">
      <div className="bg-grid absolute inset-0 pointer-events-none z-0 opacity-60" />
      <div className="relative z-10 max-w-6xl mx-auto px-5">

        <div className="text-center mb-10 lg:mb-14">
          <span className="sec-badge">{T.articles.badge}</span>
          <h2
            className="font-black text-ink mt-3 mb-2"
            style={{ fontSize: "clamp(30px,3.5vw,46px)" }}
          >
            {T.articles.title}{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">{T.articles.titleHighlight}</span>
          </h2>
        </div>

        {posts.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
            {posts.map((post, i) => {
              const media = post._embedded?.["wp:featuredmedia"]?.[0];
              const imgSrc = media?.source_url ?? "";
              const title = decodeHtml(post.title.rendered);
              return (
                <Link
                  key={post.id}
                  href={`/articles/${post.slug}`}
                  className={`art-card${i >= 4 ? " hidden sm:block" : ""}`}
                >
                  <div className="overflow-hidden">
                    {imgSrc && (
                      <Image
                        src={imgSrc}
                        alt={media?.alt_text || title}
                        width={800}
                        height={450}
                        className="art-img"
                        style={{ height: "auto" }}
                        unoptimized
                      />
                    )}
                  </div>
                  <div className="p-3.5 lg:p-4">
                    <span className="inline-flex items-center gap-1 bg-gold/10 text-gold-dark border border-gold/25 rounded-full px-2.5 py-0.5 text-[10px] font-bold mb-2">
                      ✦ {formatDate(post.date, T.articles.months)}
                    </span>
                    <h3 className="text-xs lg:text-[13px] font-bold text-ink leading-[1.5] line-clamp-3">{title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        <div className="text-center mt-10">
          <Link href="/articles" className="btn-pink">
            {T.articles.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
