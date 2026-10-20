"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { ShieldCheck, BadgeCheck, UserCheck, BookOpen, MapPin, ZoomIn } from "lucide-react";
import QuizCTACard from "./QuizCTACard";
import { motion, AnimatePresence } from "framer-motion";
import { useT } from "@/context/LanguageContext";

const sliderImages = [1,2,3,4,5,6,7,8,9].map(n => `/images/silde/${n}-300x200.webp`);
const checkIcons = [ShieldCheck, UserCheck, BadgeCheck, BookOpen];
const trustImages = [
  "/images/trust/ตรวจโรคติดต่อ.webp",
  "/images/trust/บริการตรวจประวัติอาชญากรรม.webp",
  "/images/trust/license.webp",
  "/images/trust/license.webp",
];

export default function CloneTrust() {
  const T = useT();
  const checks = T.trust.checks.map((c, i) => ({ ...c, icon: checkIcons[i] }));
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const paused = useRef(false);
  const INTERVAL = 3000;

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused.current) {
        setActiveIdx(i => (i + 1) % checks.length);
      }
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [checks.length]);

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

        {/* widdd banner */}
        <Reveal delay={100}>
          <div className="w-full rounded-2xl overflow-hidden mb-10 lg:mb-14" style={{ boxShadow: "0 4px 24px rgba(100,60,0,0.10)" }}>
            <Image
              src="/images/trust/widdd.webp"
              alt="ตรวจโรคและตรวจประวัติอาชญากรรม"
              width={1200}
              height={400}
              className="w-full h-auto block"
              priority={false}
            />
          </div>
        </Reveal>

        {/* Body grid */}
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-10 lg:gap-14 items-start">

          {/* LEFT — horizontal credential rows */}
          <div
            className="space-y-3"
            onMouseEnter={() => { paused.current = true; }}
            onMouseLeave={() => { paused.current = false; }}
          >
            {checks.map((c, i) => {
              const Icon = c.icon;
              const isActive = activeIdx === i;
              return (
                <Reveal key={c.num} delay={i * 70}>
                  <motion.div
                    onClick={() => { setActiveIdx(i); paused.current = true; setTimeout(() => { paused.current = false; }, 6000); }}
                    className="flex items-center gap-4 lg:gap-5 rounded-2xl px-5 lg:px-6 py-5 relative overflow-hidden cursor-pointer"
                    style={{
                      background: isActive
                        ? "linear-gradient(120deg, rgba(201,169,110,0.22) 0%, rgba(255,255,255,0.97) 45%, rgba(201,169,110,0.12) 100%)"
                        : "linear-gradient(120deg, rgba(201,169,110,0.10) 0%, rgba(255,255,255,0.97) 45%, rgba(201,169,110,0.05) 100%)",
                      border: isActive
                        ? "1.5px solid rgba(201,169,110,0.60)"
                        : "1px solid rgba(201,169,110,0.22)",
                      boxShadow: isActive
                        ? "0 8px 32px rgba(100,60,0,0.13)"
                        : "0 2px 16px rgba(100,60,0,0.06)",
                      transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
                    }}
                    whileHover={{
                      x: 6,
                      borderColor: "rgba(201,169,110,0.50)",
                      boxShadow: "0 8px 32px rgba(100,60,0,0.13)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-3 bottom-3 w-1 rounded-full"
                        style={{ background: "linear-gradient(180deg, #C9A96E, #9E7D48)" }}
                      />
                    )}
                    {/* Progress bar */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl overflow-hidden" style={{ background: "rgba(201,169,110,0.15)" }}>
                        <div
                          key={activeIdx}
                          className="h-full rounded-b-2xl"
                          style={{
                            background: "linear-gradient(90deg, #C9A96E, #9E7D48)",
                            animation: `trust-progress ${INTERVAL}ms linear forwards`,
                          }}
                        />
                      </div>
                    )}

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

          {/* RIGHT — dynamic image */}
          <Reveal delay={150} className="flex flex-col items-center mt-4 lg:mt-6">
            <div className="w-full flex flex-col items-center gap-3">
              <button
                onClick={() => setLightboxOpen(true)}
                className="group relative w-full cursor-zoom-in overflow-hidden focus-visible:outline-none animate-float rounded-2xl"
                aria-label="ดูรูปขนาดเต็ม"
                style={trustImages[activeIdx].includes("license") ? { boxShadow: "0 8px 32px rgba(100,60,0,0.10)" } : { border: "1px solid rgba(201,169,110,0.28)", boxShadow: "0 8px 32px rgba(100,60,0,0.10)" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, y: 12, scale: 1.02 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={trustImages[activeIdx].includes("license") ? { aspectRatio: "1/1", position: "relative" } : undefined}
                  >
                    {trustImages[activeIdx].includes("license") ? (
                      <Image
                        src={trustImages[activeIdx]}
                        alt={checks[activeIdx]?.title ?? ""}
                        fill
                        className="object-contain"
                        priority
                      />
                    ) : (
                      <Image
                        src={trustImages[activeIdx]}
                        alt={checks[activeIdx]?.title ?? ""}
                        width={440}
                        height={440}
                        className="w-full block"
                        style={{ height: "auto", display: "block" }}
                        priority
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-250"
                  style={{ background: "linear-gradient(to top, rgba(26,20,16,0.55) 0%, transparent 55%)" }}
                >
                  <span className="flex items-center gap-1.5 bg-white/95 text-[#1A1410] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg">
                    <ZoomIn size={12} />
                    ดูขนาดเต็ม
                  </span>
                </div>
              </button>
            </div>
          </Reveal>
        </div>

        <QuizCTACard />

      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-5"
          style={{ background: "rgba(10,6,3,0.88)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative"
            style={{ animation: "lightbox-in 0.20s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(201,169,110,0.35)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
              }}
            >
              <Image
                src={trustImages[activeIdx]}
                alt={checks[activeIdx]?.title ?? ""}
                width={800}
                height={1120}
                className="block"
                style={{
                  height: "min(88dvh, 80vh)",
                  width: "auto",
                  maxWidth: "min(92vw, 560px)",
                  objectFit: "contain",
                }}
              />
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
              style={{ background: "linear-gradient(135deg,#C9A96E,#9E7D48)" }}
              aria-label="ปิด"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes lightbox-in {
          from { opacity: 0; transform: scale(0.90) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes trust-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
