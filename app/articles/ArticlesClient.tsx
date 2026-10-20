"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useT } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WP_BASE = process.env.NEXT_PUBLIC_WORDPRESS_URL ?? "https://www.maidwonderland.com";
const PER_PAGE = 12;

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
}

function formatDate(iso: string, months: readonly string[], yearOffset: number) {
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear() + yearOffset}`;
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

interface Props {
  initialPosts: WPPost[];
  initialTotalPages: number;
}

export default function ArticlesClient({ initialPosts, initialTotalPages }: Props) {
  const T = useT();
  const [posts, setPosts] = useState<WPPost[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (page === 1) return; // page 1 already from SSR
    setLoading(true);
    fetch(`${WP_BASE}/wp-json/wp/v2/posts?page=${page}&per_page=${PER_PAGE}&_embed`)
      .then((r) => {
        const tp = parseInt(r.headers.get("X-WP-TotalPages") ?? "1", 10);
        setTotalPages(isNaN(tp) ? 1 : tp);
        return r.json();
      })
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, [page]);

  const goTo = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageNums = (): (number | "…")[] => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 4) return [1, 2, 3, 4, 5, "…", totalPages];
    if (page >= totalPages - 3) return [1, "…", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, "…", page - 1, page, page + 1, "…", totalPages];
  };

  return (
    <>
      {/* Banner */}
      <section
        className="relative overflow-hidden py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #F5E6BE 0%, #EDD49E 40%, #F0DDB8 70%, #F8EDD3 100%)" }}
      >
        <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">
          <span className="sec-badge mb-4">{T.articles.badge}</span>
          <h1 className="font-black text-ink mt-4 mb-4" style={{ fontSize: "clamp(36px,5vw,60px)" }}>
            {T.articles.title}{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              {T.articles.titleHighlight}
            </span>
          </h1>
          <p className="text-ink-muted text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            {T.articles.pageDesc}
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="relative bg-white overflow-hidden py-12 lg:py-16">
        <div className="bg-grid absolute inset-0 pointer-events-none z-0 opacity-60" />
        <div className="relative z-10 max-w-6xl mx-auto px-5">

          {loading ? (
            <div className="flex justify-center py-24">
              <div className="w-10 h-10 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-ink-muted text-base">{T.articles.empty}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 mb-12">
                {posts.map((post) => {
                  const media = post._embedded?.["wp:featuredmedia"]?.[0];
                  const imgSrc = media?.source_url ?? "";
                  const title = decodeHtml(post.title.rendered);
                  const excerpt = decodeHtml(post.excerpt?.rendered ?? "");
                  return (
                    <Link key={post.id} href={`/articles/${post.slug}`} className="art-card">
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
                          ✦ {formatDate(post.date, T.articles.months, T.articles.yearOffset)}
                        </span>
                        <h2 className="text-xs lg:text-[13px] font-bold text-ink leading-[1.5] line-clamp-3 mb-1">{title}</h2>
                        {excerpt && (
                          <p className="text-[11px] text-ink-muted leading-relaxed line-clamp-2">{excerpt}</p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
                  <button
                    onClick={() => goTo(page - 1)}
                    disabled={page === 1}
                    className="flex items-center justify-center w-9 h-9 rounded-xl border border-[#EDE8DF] text-ink-muted hover:border-gold/50 hover:text-gold-dark disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                    aria-label="หน้าก่อนหน้า"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  {pageNums().map((n, i) =>
                    n === "…" ? (
                      <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center text-ink-muted text-sm select-none">…</span>
                    ) : (
                      <button
                        key={n}
                        onClick={() => goTo(n)}
                        className={`w-9 h-9 rounded-xl text-sm font-bold transition-all duration-200 ${
                          n === page
                            ? "bg-gradient-to-br from-gold to-gold-dark text-white shadow-[0_4px_12px_rgba(201,169,110,0.40)]"
                            : "border border-[#EDE8DF] text-ink hover:border-gold/50 hover:text-gold-dark"
                        }`}
                        aria-current={n === page ? "page" : undefined}
                      >
                        {n}
                      </button>
                    )
                  )}

                  <button
                    onClick={() => goTo(page + 1)}
                    disabled={page === totalPages}
                    className="flex items-center justify-center w-9 h-9 rounded-xl border border-[#EDE8DF] text-ink-muted hover:border-gold/50 hover:text-gold-dark disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                    aria-label="หน้าถัดไป"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
