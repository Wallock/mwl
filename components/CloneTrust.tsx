"use client";
import Image from "next/image";
import Reveal from "./Reveal";
import { ShieldCheck, BadgeCheck, UserCheck, BookOpen, MapPin } from "lucide-react";
import QuizCTACard from "./QuizCTACard";
import { motion } from "framer-motion";
import LicenseLightbox from "./LicenseLightbox";
import { useT } from "@/context/LanguageContext";

const sliderImages = [1,2,3,4,5,6,7,8,9].map(n => `/images/silde/${n}-300x200.webp`);
const checkIcons = [ShieldCheck, UserCheck, BadgeCheck, BookOpen];

export default function CloneTrust() {
  const T = useT();
  const checks = T.trust.checks.map((c, i) => ({ ...c, icon: checkIcons[i] }));
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--surface-2)" }}>

      {/* Photo marquee — 2 rows */}
      <div aria-hidden="true" style={{ overflow: "hidden", lineHeight: 0 }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, pass) =>
            sliderImages.map((src, i) => (
              <Image
                key={`f${pass}-${i}`}
                src={src}
                alt=""
                width={390}
                height={260}
                style={{ height: 260, width: "auto", objectFit: "cover", flexShrink: 0, display: "block" }}
              />
            ))
          )}
        </div>
        <div className="marquee-track-reverse">
          {[...Array(2)].map((_, pass) =>
            [...sliderImages].reverse().map((src, i) => (
              <Image
                key={`r${pass}-${i}`}
                src={src}
                alt=""
                width={390}
                height={260}
                style={{ height: 220, width: "auto", objectFit: "cover", flexShrink: 0, display: "block" }}
              />
            ))
          )}
        </div>
      </div>

      {/* Shimmer gold bar */}
      <div className="h-[3px] shimmer-bar" />

      {/* Background */}
      <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-30" />
      <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 65%)", filter: "blur(80px)" }} />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-[480px] h-[480px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.09) 0%, transparent 70%)", filter: "blur(100px)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-14 lg:py-20">

        {/* Section header */}
        <Reveal className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sec-badge">
            <ShieldCheck size={13} strokeWidth={2.5} />
            {T.trust.badge}
          </div>
          <h2
            className="font-black text-ink mt-3 mb-3"
            style={{ fontSize: "clamp(22px, 5.5vw, 64px)" }}
          >
            {T.trust.heading1}{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              {T.trust.headingHighlight}
            </span>
          </h2>
          <div className="gold-line" />
          <p className="text-ink-muted text-[15px] lg:text-[17px] max-w-md mx-auto leading-relaxed mt-3">
            {T.trust.desc}
          </p>
        </Reveal>

        {/* Body grid */}
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-10 lg:gap-14 items-start">

          {/* LEFT — horizontal credential rows */}
          <div className="space-y-3">
            {checks.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.num} delay={i * 70}>
                  <motion.div
                    className="flex items-center gap-4 lg:gap-5 rounded-2xl px-5 lg:px-6 py-5 relative overflow-hidden cursor-default"
                    style={{
                      background: "linear-gradient(120deg, rgba(201,169,110,0.10) 0%, rgba(255,255,255,0.97) 45%, rgba(201,169,110,0.05) 100%)",
                      border: "1px solid rgba(201,169,110,0.22)",
                      boxShadow: "0 2px 16px rgba(100,60,0,0.06)",
                    }}
                    whileHover={{
                      x: 6,
                      borderColor: "rgba(201,169,110,0.50)",
                      boxShadow: "0 8px 32px rgba(100,60,0,0.13)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  >
                    {/* Big gold number */}
                    <span
                      className="font-black leading-none shrink-0 tabular-nums"
                      style={{
                        fontSize: "clamp(38px, 4.5vw, 54px)",
                        background: "linear-gradient(135deg, #C9A96E, #9E7D48)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        width: "2.6ch",
                        textAlign: "right",
                      }}
                    >
                      {c.num}
                    </span>

                    {/* Divider */}
                    <div className="w-px h-12 shrink-0" style={{ background: "rgba(201,169,110,0.28)" }} />

                    {/* Icon circle */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, #C9A96E, #9E7D48)", boxShadow: "0 4px 14px rgba(201,169,110,0.35)" }}
                    >
                      <Icon size={22} color="#fff" strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-ink text-[17px] lg:text-[19px] leading-tight mb-1">{c.title}</h3>
                      <p className="text-[13px] lg:text-[14px]" style={{ color: "#7A6555" }}>{c.sub}</p>
                      {i === 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {T.trust.tags.map(t => (
                            <span key={t}
                              className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full"
                              style={{ background: "rgba(201,169,110,0.12)", color: "#9E7D48", border: "1px solid rgba(201,169,110,0.25)" }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}

            {/* Coverage badge */}
            <Reveal delay={320}>
              <div
                className="flex items-center gap-4 rounded-2xl px-5 lg:px-6 py-4"
                style={{
                  background: "linear-gradient(135deg, rgba(201,169,110,0.12) 0%, rgba(201,169,110,0.06) 100%)",
                  border: "1px solid rgba(201,169,110,0.28)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #C9A96E, #9E7D48)" }}
                >
                  <MapPin size={20} color="#fff" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <p className="text-[15px] lg:text-[16px] font-black text-ink">{T.trust.coverageTitle}</p>
                  <p className="text-[13px] text-ink-subtle">{T.trust.coverageSub}</p>
                </div>
                <span
                  className="text-[14px] font-black px-3.5 py-1.5 rounded-full shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #C9A96E, #9E7D48)",
                    color: "#fff",
                    boxShadow: "0 2px 12px rgba(201,169,110,0.40)",
                  }}
                >
                  {T.trust.coverageBadge}
                </span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — license + stats */}
          <Reveal delay={150} className="flex flex-col items-center -mt-10 lg:-mt-16">

            <LicenseLightbox />

          </Reveal>
        </div>

        <QuizCTACard />

      </div>
    </section>
  );
}
