import { IMG } from "@/lib/images";
import Reveal from "./Reveal";

const sliderImages = [1,2,3,4,5,6,7,8,9].map(n => `/images/silde/${n}-300x200.webp`);

const checks = [
  { num: "01", title: "ตรวจโรคติดต่อ 5 ชนิด",      sub: "มาตรฐานกรมการแพทย์" },
  { num: "02", title: "ตรวจประวัติอาชญากรรม",         sub: "100% ทุกคน" },
  { num: "03", title: "ใบอนุญาตถูกต้องตามกฎหมาย",     sub: "กรมการจัดหางาน กทม." },
  { num: "04", title: "อบรมก่อนส่ง ครอบคลุมทั่วไทย",  sub: "56 จังหวัด" },
];

const diseases = ["สารเสพติด", "ไวรัสตับอักเสบ B", "วัณโรค", "HIV", "ซิฟิลิส"];

export default function CloneTrust() {
  return (
    <section className="bg-cream">

      {/* Infinite scroll strip */}
      <div style={{ overflow: "hidden", lineHeight: 0 }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, pass) =>
            sliderImages.map((src, i) => (
              <img
                key={`${pass}-${i}`}
                src={src}
                alt=""
                style={{ height: 180, width: "auto", objectFit: "cover", flexShrink: 0, display: "block" }}
              />
            ))
          )}
        </div>
      </div>

      {/* Animated shimmer gold bar */}
      <div className="h-[3px] shimmer-bar" />

      <div className="max-w-6xl mx-auto px-5 py-12 lg:py-20">

        {/* Section header */}
        <Reveal className="text-center mb-10 lg:mb-14">
          <span className="sec-badge">✦ มาตรฐานคัดเลือกบุคลากร</span>
          <h2 className="text-3xl lg:text-[2.5rem] font-black text-ink mt-3 mb-2">
            อบรมก่อนส่ง{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              ตรวจจริง 5 โรค
            </span>
          </h2>
          <p className="text-ink-muted text-sm max-w-xs mx-auto leading-relaxed">
            ทุกคนผ่านการคัดกรองอย่างเข้มงวดก่อนเข้าบ้านคุณ
          </p>
        </Reveal>

        {/* Body */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* LEFT — staggered numbered list */}
          <div>
            <div className="space-y-5 lg:space-y-6">
              {checks.map((c, i) => (
                <Reveal key={c.num} delay={i * 110}>
                  <div className="flex items-start gap-4 group/item cursor-default">
                    <span className="font-display text-4xl lg:text-5xl font-black leading-none shrink-0 w-12 lg:w-14 text-right bg-gradient-to-b from-gold to-gold-dark bg-clip-text text-transparent transition-all duration-300 group-hover/item:scale-110 group-hover/item:drop-shadow-lg">
                      {c.num}
                    </span>
                    <div className="flex-1 pt-1.5 border-t border-border transition-all duration-300 group-hover/item:border-gold/50">
                      <h4 className="font-bold text-ink text-sm lg:text-base mb-0.5 leading-snug">{c.title}</h4>
                      <p className="text-ink-subtle text-xs">{c.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Disease badges */}
            <Reveal delay={480} className="mt-6 pt-5 border-t border-border">
              <p className="text-[10px] font-black tracking-widest text-gold-dark uppercase mb-2.5">ตรวจหา 5 โรค</p>
              <div className="flex flex-wrap gap-1.5">
                {diseases.map((d, i) => (
                  <span
                    key={d}
                    className="inline-flex items-center gap-1 bg-gold/10 text-gold-dark border border-gold/30 rounded-full px-3 py-[4px] text-xs font-semibold transition-all duration-200 hover:bg-gold/20 hover:scale-105"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    ✓ {d}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — floating license + stats + CTA */}
          <Reveal delay={200} className="flex flex-col items-center gap-6 lg:gap-8">

            {/* Floating license image */}
            <div className="relative w-full max-w-[220px] lg:max-w-[260px] animate-float">
              <div className="absolute -inset-3 rounded-3xl blur-2xl bg-gradient-to-br from-gold/25 to-gold-dark/15" />
              <div className="relative p-1.5 rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/30 to-gold/8 shadow-xl">
                <img src={IMG.license} alt="ใบอนุญาตจัดหางาน" className="w-full rounded-2xl block" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-gold to-gold-dark text-white text-[10px] font-black tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-lg">
                ใบอนุญาตจัดหางานถูกต้อง
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 w-full max-w-xs bg-white rounded-2xl overflow-hidden border border-border shadow-sm mt-2">
              {[["95K+", "รีวิว"], ["20+", "ปี"], ["56", "พื้นที่"]].map(([n, l], i) => (
                <div key={l} className={`py-3.5 text-center transition-colors duration-200 hover:bg-gold/5 ${i < 2 ? "border-r border-border" : ""}`}>
                  <div className="font-display text-xl font-black leading-none bg-gradient-to-b from-gold to-gold-dark bg-clip-text text-transparent mb-0.5">{n}</div>
                  <div className="text-ink-subtle text-[11px]">{l}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-2.5 justify-center w-full">
              <a href="tel:0618437666" className="btn-gold flex-1 justify-center min-w-[130px]" style={{ fontSize: 13, padding: "10px 16px" }}>
                📞 โทรปรึกษาฟรี
              </a>
              <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer"
                className="btn-pink flex-1 justify-center min-w-[130px]" style={{ fontSize: 13, padding: "10px 16px" }}>
                💬 LINE @dede1721
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
