import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import Reveal from "@/components/Reveal";

const BASE = "https://www.maidwonderland.com";
const API = `${BASE}/wp-json/wp/v2/posts?page=1&per_page=20&_embed`;

interface WPPost {
  id: number;
  title: { rendered: string };
  date: string;
  link: string;
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
}

function formatThaiDate(iso: string) {
  const d = new Date(iso);
  const thMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  return `${d.getDate()} ${thMonths[d.getMonth()]} ${d.getFullYear() + 543}`;
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

async function getPosts(): Promise<WPPost[]> {
  try {
    const res = await fetch(API, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export const metadata = {
  title: "บทความ | แม่บ้านดีดี เซอร์วิส",
  description: "บทความน่ารู้เกี่ยวกับการจ้างแม่บ้าน พี่เลี้ยงเด็ก และการดูแลบ้าน จากแม่บ้านดีดี เซอร์วิส",
};

export default async function ArticlesPage() {
  const posts = await getPosts();

  return (
    <>
      <CloneNavbar />
      <GSAPAnimations />
      <main>

        {/* Banner */}
        <section className="relative overflow-hidden py-16 lg:py-20"
          style={{ background: "linear-gradient(135deg, #F5E6BE 0%, #EDD49E 40%, #F0DDB8 70%, #F8EDD3 100%)" }}>
          <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-30" />
          <div data-blob
            className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full z-0"
            style={{ background: "radial-gradient(circle, rgba(201,169,110,0.30) 0%, transparent 70%)", filter: "blur(100px)" }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">
            <Reveal>
              <span className="sec-badge mb-4">บทความ</span>
              <h1 className="font-black text-ink mt-4 mb-4" style={{ fontSize: "clamp(36px,5vw,60px)" }}>
                ข้อมูล{" "}
                <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                  น่ารู้
                </span>
              </h1>
              <p className="text-ink-muted text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
                บทความและข้อมูลเกี่ยวกับบริการแม่บ้าน พี่เลี้ยงเด็ก และการดูแลบ้าน
              </p>
            </Reveal>
          </div>
        </section>

        {/* Articles grid */}
        <section className="relative bg-white overflow-hidden py-12 lg:py-16">
          <div className="bg-grid absolute inset-0 pointer-events-none z-0 opacity-60" />
          <div className="relative z-10 max-w-6xl mx-auto px-5">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-ink-muted text-base">ไม่พบบทความในขณะนี้</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
                {posts.map((post, i) => {
                  const media = post._embedded?.["wp:featuredmedia"]?.[0];
                  const imgSrc = media?.source_url ?? "";
                  const title = decodeHtml(post.title.rendered);
                  const excerpt = decodeHtml(post.excerpt?.rendered ?? "");
                  return (
                    <Reveal key={post.id} delay={i * 40}>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="art-card"
                      >
                        <div className="overflow-hidden">
                          {imgSrc && (
                            <img src={imgSrc} alt={media?.alt_text || title} className="art-img" />
                          )}
                        </div>
                        <div className="p-3.5 lg:p-4">
                          <span className="inline-flex items-center gap-1 bg-gold/10 text-gold-dark border border-gold/25 rounded-full px-2.5 py-0.5 text-[10px] font-bold mb-2">
                            ✦ {formatThaiDate(post.date)}
                          </span>
                          <h4 className="text-xs lg:text-[13px] font-bold text-ink leading-[1.5] line-clamp-3 mb-1">{title}</h4>
                          {excerpt && (
                            <p className="text-[11px] text-ink-muted leading-relaxed line-clamp-2">{excerpt}</p>
                          )}
                        </div>
                      </a>
                    </Reveal>
                  );
                })}
              </div>
            )}
          </div>
        </section>

      </main>
      <CloneFooter />
    </>
  );
}
