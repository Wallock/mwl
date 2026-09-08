import { IMG } from "@/lib/images";

const BASE = "https://www.maidwonderland.com";

const navLinks = [
  ["หน้าแรก",              "https://www.maidwonderland.com/"],
  ["เกี่ยวกับเรา",          `${BASE}/about_us/`],
  ["บริการแม่บ้าน",         `${BASE}/our-service/maid-service/`],
  ["พี่เลี้ยงเด็ก",         `${BASE}/our-service/nanny_sv/`],
  ["แม่บ้านดูแลผู้สูงอายุ", `${BASE}/our-service/elder_care/`],
  ["แรงงานทั่วไป",          `${BASE}/our-service/general_labor/`],
  ["รูปกิจกรรม",            `${BASE}/gallery/`],
  ["บทความ",                `${BASE}/article/`],
  ["ติดต่อเรา",             `${BASE}/contact_us/`],
];

export default function CloneFooter() {
  return (
    <footer style={{ background: "#1A1410", color: "#fff" }}>

      <div className="h-[3px] bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark" />

      {/* CTA strip */}
      <div className="border-b border-white/[0.07] py-7 text-center">
        <p className="text-[10px] font-black tracking-[0.18em] uppercase text-gold/70 mb-3">
          ✦ พร้อมให้บริการทุกวัน 08:00 - 20:00 น.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="tel:0618437666" className="foot-contact foot-contact-gold">📞 061-843-7666</a>
          <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer" className="foot-contact foot-contact-pink">
            💬 LINE @dede1721
          </a>
        </div>
      </div>

      {/* Main body */}
      <div className="max-w-6xl mx-auto px-5 py-10 lg:py-14">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-10">

          {/* Brand */}
          <div>
            <img src={IMG.logo} alt="แม่บ้านดีดี" style={{ height: 48, width: "auto", marginBottom: 14, filter: "brightness(0) invert(1)" }} />
            <p className="text-[#78716C] text-sm leading-[1.9]">
              หจก.จัดหางานแม่บ้านดีดี เซอร์วิส<br />
              206, 208 ถ.เจริญสนิทวงศ์ 82<br />
              แขวงบางอ้อ เขตบางพลัด กรุงเทพฯ 10700
            </p>
            <div className="flex gap-5 mt-4">
              {[["95K+", "รีวิว"], ["20+", "ปี"], ["56", "พื้นที่"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-base font-black text-gold leading-none mb-0.5">{n}</div>
                  <div className="text-[10px] text-[#78716C]">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-gold/80 font-black text-[11px] uppercase tracking-[0.14em] mb-4">เมนู</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 list-none p-0 m-0">
              {navLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="foot-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* LINE QR */}
          <div>
            <h4 className="text-gold/80 font-black text-[11px] uppercase tracking-[0.14em] mb-4">สแกนเพิ่มเพื่อน LINE</h4>
            <div className="inline-block bg-white p-2.5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.30)] mb-2">
              <img src={IMG.lineQr} alt="LINE QR @dede1721" style={{ width: 100, display: "block", borderRadius: 8 }} />
            </div>
            <p className="text-[#78716C] text-sm">@dede1721</p>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-4 flex flex-wrap justify-between gap-2">
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
