import Image from "next/image";
import { IMG } from "@/lib/images";

const navLinks = [
  ["หน้าแรก",              "/"],
  ["เกี่ยวกับเรา",          "/about"],
  ["บริการแม่บ้าน",         "/services/maid"],
  ["พี่เลี้ยงเด็ก",         "/services/nanny"],
  ["แม่บ้านดูแลผู้สูงอายุ", "/services/elder"],
  ["แรงงานทั่วไป",          "/services/labor"],
  ["รูปกิจกรรม",            "/gallery"],
  ["บทความ",                "/articles"],
  ["ติดต่อเรา",             "/contact"],
];

export default function CloneFooter() {
  return (
    <footer style={{ background: "#1A1410", color: "#fff" }}>

      {/* Gold shimmer top border */}
      <div className="h-[3px] shimmer-bar" />

      {/* CTA strip */}
      <div className="border-b border-white/[0.07] py-8 text-center">
        <p className="text-[26px] font-black tracking-[0.10em] uppercase text-gold/70 mb-4">
          ✦ ติดต่อเราเลยตอนนี้ เพื่อรับข้อเสนอพิเศษ ✦
        </p>
        <div className="flex gap-3 justify-center flex-wrap">

          {/* Phone */}
          <a href="tel:0618437666" style={{
            display: "flex", alignItems: "stretch", borderRadius: 12,
            overflow: "hidden", textDecoration: "none",
            boxShadow: "0 4px 16px rgba(243,0,60,0.35)",
          }}>
            <span style={{ background: "#C4006A", padding: "11px 13px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Image src="/icon/calling-icon.svg" alt="โทร" width={20} height={20} style={{ filter: "brightness(0) invert(1)", width: 20, height: 20 }} />
            </span>
            <span style={{ background: "linear-gradient(180deg,#FF00CB 0%,#F3003C 100%)", padding: "11px 16px", display: "flex", alignItems: "center", fontWeight: 700, fontSize: 13, color: "#fff", whiteSpace: "nowrap" }}>
              061-843-7666
            </span>
          </a>

          {/* LINE */}
          <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "stretch", borderRadius: 12,
            overflow: "hidden", textDecoration: "none",
            boxShadow: "0 4px 16px rgba(6,109,0,0.35)",
          }}>
            <span style={{ background: "#04520A", padding: "11px 13px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Image src="/icon/line-icon.svg" alt="LINE" width={20} height={20} style={{ width: 20, height: 20 }} />
            </span>
            <span style={{ background: "linear-gradient(180deg,#3EB600 0%,#066D00 100%)", padding: "11px 16px", display: "flex", alignItems: "center", fontWeight: 700, fontSize: 13, color: "#fff", whiteSpace: "nowrap" }}>
              LINE @dede1721
            </span>
          </a>

        </div>
      </div>

      {/* Main body */}
      <div className="max-w-6xl mx-auto px-5 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-10">

          {/* Brand + address + stats */}
          <div>
              <Image
              src={IMG.logo}
              alt="แม่บ้านดีดี"
              width={0}
              height={0}
              sizes="200px"
              style={{ height: "48px", width: "auto", marginBottom: 16 }}
            />
            <p className="text-[#78716C] text-sm leading-[1.9]">
              หจก.จัดหางานแม่บ้านดีดี เซอร์วิส<br />
              206, 208 ถ.เจริญสนิทวงศ์ 82<br />
              แขวงบางอ้อ เขตบางพลัด กรุงเทพฯ 10700
            </p>

            {/* Social links */}
            <div className="mt-5">
              <div className="flex gap-2">
                {[
                  { href: "https://www.facebook.com/dedemaid2019", icon: "/icon/facebook-icon.svg", alt: "Facebook" },
                  { href: "https://www.youtube.com/@ddmaid", icon: "/icon/youtube-icon.svg",  alt: "YouTube"  },
                  { href: "https://line.me/R/ti/p/@maid-jn82", icon: "/icon/line-icon.svg",     alt: "LINE"     },
                  { href: "https://www.tiktok.com/@maiddede2423", icon: "/icon/tiktok-icon.svg",   alt: "TikTok"   },
                ].map(({ href, icon, alt }) => (
                  <a
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={alt}
                    className="hover:opacity-75 hover:-translate-y-0.5 transition-all duration-200"
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, width: 44, height: 44, borderRadius: 10,
                      background: "#fff", padding: 4,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                    }}
                  >
                    <Image src={icon} alt={alt} width={32} height={32} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-gold/80 font-black text-[18px] uppercase tracking-[0.14em] mb-5">เมนู</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-none p-0 m-0">
              {navLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="foot-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* LINE QR */}
          <div>
            <h4 className="text-gold/80 font-bold text-[18px] uppercase tracking-[0.10em] mb-2">สแกนเพิ่มเพื่อนไลน์</h4>
            <div className="inline-block bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.30)] mb-2">
              <Image
                src={IMG.lineQr}
                alt="LINE QR @dede1721"
                width={150} height={150}
                style={{ width: 150, height: "auto", display: "block", objectFit: "cover", borderRadius: 8 }}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-5 flex flex-wrap justify-between gap-2">
          <p className="text-[#4E4540] text-xs">
            © {new Date().getFullYear()} หจก.จัดหางานแม่บ้านดีดี เซอร์วิส · สงวนลิขสิทธิ์
          </p>
          <p className="text-[#4E4540] text-xs">
            ใบอนุญาตจัดหางาน · กรมการจัดหางาน · กรุงเทพมหานคร
          </p>
        </div>
      </div>
    </footer>
  );
}
