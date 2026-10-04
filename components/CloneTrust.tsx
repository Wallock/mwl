import Image from "next/image";
import { IMG } from "@/lib/images";
import Reveal from "./Reveal";
import { ShieldCheck, BadgeCheck, UserCheck, BookOpen, MapPin } from "lucide-react";
import LicenseLightbox from "./LicenseLightbox";

const sliderImages = [1,2,3,4,5,6,7,8,9].map(n => `/images/silde/${n}-300x200.webp`);

const checks = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "ตรวจโรคติดต่อ 5 ชนิด",
    sub: "มาตรฐานกรมการแพทย์",
    tags: ["สารเสพติด", "ไวรัสตับอักเสบ B", "วัณโรค", "HIV", "ซิฟิลิส"],
  },
  {
    num: "02",
    icon: UserCheck,
    title: "ตรวจประวัติอาชญากรรม",
    sub: "ทุกคน 100%",
  },
  {
    num: "03",
    icon: BadgeCheck,
    title: "ใบอนุญาตถูกต้องตามกฎหมาย",
    sub: "กรมการจัดหางาน กทม.",
  },
  {
    num: "04",
    icon: BookOpen,
    title: "อบรมอย่างเข้มข้นก่อนส่ง",
    sub: "ครอบคลุมทั่วไทย",
  },
];

const stats = [
  { n: "95K+", l: "รีวิว", icon: "⭐" },
  { n: "20+",  l: "ปี",    icon: "🏆" },
  { n: "56",   l: "จังหวัด", icon: "📍" },
];

export default function CloneTrust() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--surface-2)" }}>

      {/* ── Photo marquee ────────────────────────── */}
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

      {/* ── Shimmer gold bar ─────────────────────── */}
      <div className="h-[3px] shimmer-bar" />

      {/* ── Background decorations ───────────────── */}
      <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-30" />
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 65%)", filter: "blur(80px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-24 w-[480px] h-[480px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.09) 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-16 lg:py-24">

        {/* ── Section header ───────────────────── */}
        <Reveal className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 sec-badge">
            <ShieldCheck size={12} strokeWidth={2.5} />
            มาตรฐานคัดเลือกบุคลากร
          </div>
          <h2
            className="font-black text-ink mt-3 mb-3"
            style={{ fontSize: "clamp(28px, 3.8vw, 48px)" }}
          >
            อบรมก่อนส่ง{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              ตรวจจริง 5 โรค
            </span>
          </h2>
          <div className="gold-line" />
          <p className="text-ink-muted text-sm lg:text-base max-w-md mx-auto leading-relaxed mt-3">
            ทุกคนผ่านการคัดกรองและอบรมอย่างเข้มงวดก่อนเข้าบ้านคุณ
          </p>
        </Reveal>

        {/* ── Body grid ───────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-12 lg:gap-16 items-start">

          {/* ── LEFT — credential cards ──────── */}
          <div className="space-y-3.5">
            {checks.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.num} delay={i * 90}>
                  <div
                    className="group flex items-start gap-4 rounded-2xl px-5 py-5 bg-white cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(100,60,0,0.10)] hover:border-[rgba(201,169,110,0.40)]"
                    style={{
                      border: "1px solid var(--border-light)",
                      boxShadow: "0 2px 16px rgba(100,60,0,0.05)",
                    }}
                  >
                    {/* Number */}
                    <span
                      className="font-black text-3xl leading-none shrink-0 select-none w-10 text-center"
                      style={{
                        background: "linear-gradient(160deg, #C9A96E 0%, #9E7D48 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {c.num}
                    </span>

                    {/* Divider */}
                    <div className="w-px self-stretch bg-gradient-to-b from-transparent via-[rgba(201,169,110,0.3)] to-transparent shrink-0" />

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-ink text-sm lg:text-[15px] leading-snug mb-1">
                        {c.title}
                      </h3>
                      <p className="text-ink-subtle text-xs mb-0">{c.sub}</p>
                      {c.tags && (
                        <div className="flex flex-wrap gap-1.5 mt-2.5">
                          {c.tags.map(t => (
                            <span
                              key={t}
                              className="inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full"
                              style={{
                                background: "rgba(201,169,110,0.10)",
                                color: "var(--gold-dark)",
                                border: "1px solid rgba(201,169,110,0.28)",
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Icon */}
                    <div
                      className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(201,169,110,0.10)" }}
                    >
                      <Icon size={16} strokeWidth={2} style={{ color: "var(--gold-dark)" }} />
                    </div>
                  </div>
                </Reveal>
              );
            })}

            {/* ── Coverage badge ──────────────── */}
            <Reveal delay={400}>
              <div
                className="flex items-center gap-3 rounded-2xl px-5 py-4"
                style={{
                  background: "linear-gradient(135deg, rgba(201,169,110,0.10) 0%, rgba(201,169,110,0.06) 100%)",
                  border: "1px solid rgba(201,169,110,0.28)",
                }}
              >
                <MapPin size={18} strokeWidth={2} style={{ color: "var(--gold-dark)", flexShrink: 0 }} />
                <div>
                  <p className="text-xs font-bold text-ink">ครอบคลุม 56 จังหวัดทั่วประเทศ</p>
                  <p className="text-[11px] text-ink-subtle">กรุงเทพฯ และปริมณฑล · ภูมิภาค · เกาะ</p>
                </div>
                <span
                  className="ml-auto text-xs font-black px-3 py-1 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #C9A96E, #9E7D48)",
                    color: "#fff",
                    boxShadow: "0 2px 12px rgba(201,169,110,0.40)",
                  }}
                >
                  56
                </span>
              </div>
            </Reveal>
          </div>

          {/* ── RIGHT — license hero ─────────── */}
          <Reveal delay={150} className="flex flex-col items-center gap-10">

            <LicenseLightbox />

            {/* Stats */}
            <div
              className="grid grid-cols-3 w-full rounded-2xl overflow-hidden"
              style={{
                background: "white",
                border: "1px solid var(--border-light)",
                boxShadow: "0 4px 24px rgba(100,60,0,0.07)",
                marginTop: "1rem",
              }}
            >
              {stats.map(({ n, l }, i) => (
                <div
                  key={l}
                  className="py-4 text-center hover:bg-[rgba(201,169,110,0.05)] transition-colors duration-200"
                  style={i < stats.length - 1 ? { borderRight: "1px solid var(--border-light)" } : {}}
                >
                  <div
                    className="font-black text-xl lg:text-2xl leading-none mb-1"
                    style={{
                      background: "linear-gradient(160deg, #C9A96E 0%, #9E7D48 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {n}
                  </div>
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
