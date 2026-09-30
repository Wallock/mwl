const BASE = "https://www.maidwonderland.com";
const API = `${BASE}/wp-json/wp/v2/posts?page=1&per_page=8&_embed`;

interface WPPost {
  id: number;
  title: { rendered: string };
  date: string;
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
}

function formatThaiDate(iso: string) {
  const d = new Date(iso);
  const thMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  return `${d.getDate()} ${thMonths[d.getMonth()]}`;
}

async function getPosts(): Promise<WPPost[]> {
  try {
    const res = await fetch(API, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error("[CloneArticles] fetch failed:", res.status, res.statusText);
      return [];
    }
    const data = await res.json();
    console.log("[CloneArticles] fetched posts:", data.length);
    return data;
  } catch (e) {
    console.error("[CloneArticles] fetch error:", e);
    return [];
  }
}

export default async function CloneArticles() {
  const posts = await getPosts();

  return (
    <section className="relative bg-white py-12 lg:py-16 overflow-hidden">
      <div className="bg-grid absolute inset-0 pointer-events-none z-0 opacity-60" />
      <div className="relative z-10 max-w-6xl mx-auto px-5">

        <div className="text-center mb-10 lg:mb-14">
          <span className="sec-badge">บทความ</span>
          <h2
            className="font-black text-ink mt-3 mb-2"
            style={{ fontSize: "clamp(30px,3.5vw,46px)" }}
          >
            ข้อมูล{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">น่ารู้</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
          {posts.map((post, i) => {
            const media = post._embedded?.["wp:featuredmedia"]?.[0];
            const imgSrc = media?.source_url ?? "";
            const title = post.title.rendered.replace(/&amp;/g, "&").replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"');
            return (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`art-card${i >= 4 ? " hidden sm:block" : ""}`}
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
                  <h4 className="text-xs lg:text-[13px] font-bold text-ink leading-[1.5] line-clamp-3">{title}</h4>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a href="/articles" className="btn-pink">
            ดูบทความทั้งหมด →
          </a>
        </div>
      </div>
    </section>
  );
}
