import Image from "next/image";
import { IMG } from "@/lib/images";
import Reveal from "./Reveal";
import { Check, Phone, MessageCircle } from "lucide-react";
import LicenseLightbox from "./LicenseLightbox";

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
    <section className="relative bg-[#FAFAF9] overflow-hidden">

      {/* Infinite scroll strip — decorative */}
      <div aria-hidden="true" style={{ overflow: "hidden", lineHeight: 0 }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, pass) =>
            sliderImages.map((src, i) => (
              <Image
                key={`${pass}-${i}`}
                src={src}
                alt=""
                width={300}
                height={200}
                style={{ height: 180, width: "auto", objectFit: "cover", flexShrink: 0, display: "block" }}
              />
            ))
          )}
        </div>
      </div>

      {/* Animated shimmer gold bar */}
      <div className="h-[3px] shimmer-bar" />

      {/* Decorative blob */}
      <div data-blob
        className="pointer-events-none absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%)", filter: "blur(120px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-12 lg:py-16">

        {/* Section header */}
        <Reveal className="text-center mb-12 lg:mb-16">
          <span className="sec-badge">✦ มาตรฐานคัดเลือกบุคลากร</span>
          <h2
            className="font-black text-ink mt-3 mb-2"
            style={{ fontSize: "clamp(30px,3.5vw,46px)" }}
          >
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
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT — staggered numbered step cards */}
          <div>
            <div className="space-y-4">
              {checks.map((c, i) => (
                <Reveal key={c.num} delay={i * 100}>
                  <div className="group/item flex items-start gap-5 bg-white border border-[#EDE8DF] rounded-2xl px-5 py-4 shadow-[0_4px_24px_rgba(100,60,0,0.06)] hover:shadow-[0_8px_32px_rgba(100,60,0,0.11)] hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                    <span
                      className="font-black text-4xl leading-none shrink-0 bg-gradient-to-b from-gold to-gold-dark bg-clip-text text-transparent"
                      style={{ fontVariationSettings: '"GRAD" 200' }}
                    >
                      {c.num}
                    </span>
                    <div className="pt-1">
                      <h3 className="font-bold text-ink text-sm lg:text-[15px] mb-0.5 leading-snug">{c.title}</h3>
                      <p className="text-ink-subtle text-xs">{c.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Disease badges */}
            <Reveal delay={460} className="mt-6 pt-5 border-t border-border/60">
              <p className="text-[10px] font-black tracking-widest text-gold-dark uppercase mb-2.5">ตรวจหา 5 โรค</p>
              <div className="flex flex-wrap gap-2">
                {diseases.map((d, i) => (
                  <span
                    key={d}
                    className="inline-flex items-center gap-1.5 bg-gold/10 text-gold-dark border border-gold/30 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 hover:bg-gold/20"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <Check size={10} strokeWidth={3} />
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — floating license + stats + CTA */}
          <Reveal delay={200} className="flex flex-col items-center gap-7 lg:gap-9">

            {/* Floating license image */}
            <LicenseLightbox />

            {/* Stats */}
            <div className="grid grid-cols-3 w-full max-w-xs bg-white rounded-2xl overflow-hidden border border-[#EDE8DF] shadow-[0_4px_24px_rgba(100,60,0,0.06)] mt-2">
              {[["95K+", "รีวิว"], ["20+", "ปี"], ["56", "พื้นที่"]].map(([n, l], i) => (
                <div key={l} className={`py-4 text-center transition-colors duration-200 hover:bg-gold/5 ${i < 2 ? "border-r border-border/60" : ""}`}>
                  <div className="font-black text-xl leading-none bg-gradient-to-b from-gold to-gold-dark bg-clip-text text-transparent mb-0.5">{n}</div>
                  <div className="text-ink-subtle text-[11px]">{l}</div>
                </div>
              ))}
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
}
