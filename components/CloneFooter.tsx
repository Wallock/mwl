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
        <p className="text-[10px] font-black tracking-[0.18em] uppercase text-gold/70 mb-4">
          ✦ ติดต่อเรา
        </p>
        <div className="flex gap-3 justify-center flex-wrap">

          {/* Phone */}
          <a href="tel:0618437666" style={{
            display: "flex", alignItems: "stretch", borderRadius: 12,
            overflow: "hidden", textDecoration: "none",
            boxShadow: "0 4px 16px rgba(243,0,60,0.35)",
          }}>
            <span style={{ background: "#C4006A", padding: "11px 13px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Image src="/icon/calling-icon.svg" alt="โทร" width={20} height={20} style={{ filter: "brightness(0) invert(1)" }} />
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
              <Image src="/icon/line-icon.svg" alt="LINE" width={20} height={20} />
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.logo}
              alt="แม่บ้านดีดี"
              style={{ height: 48, width: "auto", marginBottom: 16 }}
            />
            <p className="text-[#78716C] text-sm leading-[1.9]">
              หจก.จัดหางานแม่บ้านดีดี เซอร์วิส<br />
              206, 208 ถ.เจริญสนิทวงศ์ 82<br />
              แขวงบางอ้อ เขตบางพลัด กรุงเทพฯ 10700
            </p>
            <div className="flex gap-6 mt-5">
              {[["95K+", "รีวิว"], ["20+", "ปี"], ["56", "พื้นที่"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-black text-base text-gold leading-none mb-0.5">{n}</div>
                  <div className="text-[10px] text-[#78716C]">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-gold/80 font-black text-[11px] uppercase tracking-[0.14em] mb-5">เมนู</h4>
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
            <h4 className="text-gold/80 font-black text-[11px] uppercase tracking-[0.14em] mb-5">สแกนเพิ่มเพื่อน LINE</h4>
            <div className="inline-block bg-white p-2.5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.30)] mb-3">
              <Image
                src={IMG.lineQr}
                alt="LINE QR @dede1721"
                width={100} height={100}
                style={{ width: 100, height: "auto", display: "block", borderRadius: 8 }}
              />
            </div>
            <p className="text-[#78716C] text-sm">@dede1721</p>
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
