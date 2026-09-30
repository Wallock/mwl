"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IMG } from "@/lib/images";
import Reveal from "./Reveal";

const packages = [
  { src: IMG.pkg1, alt: "โปรโมชั่น 3,500 บาท", price: "3,500", label: "แพ็กเกจเริ่มต้น" },
  { src: IMG.pkg2, alt: "โปรโมชั่น 5,000 บาท", price: "5,000", label: "แพ็กเกจยอดนิยม" },
  { src: IMG.pkg3, alt: "โปรโมชั่น 7,000 บาท", price: "7,000", label: "แพ็กเกจพรีเมียม" },
  { src: IMG.pkg4, alt: "โปรโมชั่น 10,000 บาท", price: "10,000", label: "แพ็กเกจ VIP" },
];

export default function ClonePackages() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowRight") setActiveIdx((i) => (i === null ? null : (i + 1) % packages.length));
      if (e.key === "ArrowLeft") setActiveIdx((i) => (i === null ? null : (i - 1 + packages.length) % packages.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIdx]);

  const active = activeIdx !== null ? packages[activeIdx] : null;

  return (
    <>
      <section className="relative overflow-hidden py-14 lg:py-20"
        style={{ background: "linear-gradient(160deg,#FBF8F0 0%,#F5EDD8 40%,#FAF3E4 70%,#FBF8F0 100%)" }}>

        <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-40" />
        <div data-blob
          className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full z-0"
          style={{ background: "radial-gradient(circle, rgba(212,87,110,0.12) 0%, transparent 70%)", filter: "blur(120px)" }}
        />
        <div data-blob
          className="pointer-events-none absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full z-0"
          style={{ background: "radial-gradient(circle, rgba(201,169,110,0.14) 0%, transparent 70%)", filter: "blur(100px)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5">

          <Reveal className="text-center mb-12 lg:mb-16">
            <span className="sec-badge">โปรโมชั่น</span>
            <h2
              className="font-black text-ink mt-3 mb-2"
              style={{ fontSize: "clamp(30px,3.5vw,46px)" }}
            >
              แพ็กเกจ{" "}
              <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">พิเศษ</span>
            </h2>
            <p className="text-ink-muted text-sm max-w-xs mx-auto">คุ้มค่าทุกงบประมาณ สอบถามได้เลย</p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {packages.map((p, i) => (
              <Reveal key={p.alt} delay={i * 60}>
                <button
                  onClick={() => setActiveIdx(i)}
                  className="group block w-full relative cursor-zoom-in"
                  style={{ background: "none", border: "none", padding: 0 }}
                  aria-label={`ดู ${p.alt} ขนาดเต็ม`}
                >
                  {/* Glow */}
                  <div className="absolute -inset-1 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(135deg,#C9A96E,#E8C27A,#C9A96E)", filter: "blur(12px)", zIndex: 0 }}
                  />

                  {/* Card */}
                  <div className="relative rounded-2xl overflow-hidden z-10"
                    style={{
                      border: "2px solid transparent",
                      background: "linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg,#C9A96E 0%,#F0DDB0 50%,#C9A96E 100%) border-box",
                      boxShadow: "0 4px 24px rgba(100,60,0,0.08)",
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        width={600}
                        height={600}
                        className="w-full block transition-transform duration-500 group-hover:scale-[1.06]"
                        style={{ height: "auto", width: "100%" }}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: "rgba(26,20,16,0.45)", backdropFilter: "blur(2px)" }}>
                        <span className="text-white font-black text-sm drop-shadow">🔍 ดูรูปใหญ่</span>
                      </div>
                    </div>

                    <div className="px-3.5 py-3"
                      style={{ background: "linear-gradient(135deg,#FBF7EE 0%,#F5EDD8 100%)" }}>
                      <p className="text-[11px] font-bold text-ink-muted mb-0.5">{p.label}</p>
                      <p className="font-black leading-none"
                        style={{ fontSize: "clamp(14px,2vw,18px)", background: "linear-gradient(135deg,#C9A96E,#9E7D48)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        ฿{p.price} <span style={{ fontSize: "10px", fontWeight: 600, WebkitTextFillColor: "#9E7D48" }}>บาท</span>
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(10,6,3,0.88)", backdropFilter: "blur(8px)" }}
          onClick={() => setActiveIdx(null)}
        >
          <div
            className="relative"
            style={{ animation: "lightbox-in 0.22s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden"
              style={{
                border: "2px solid transparent",
                background: "linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg,#C9A96E,#F0DDB0,#C9A96E) border-box",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
              }}>
              <Image
                src={active.src}
                alt={active.alt}
                width={800}
                height={800}
                style={{ width: "min(80vw, 80vh)", height: "auto", display: "block" }}
              />
            </div>

            {/* Label */}
            <div className="absolute -bottom-10 left-0 right-0 text-center">
              <span className="text-white/80 text-sm font-bold">{active.label} — ฿{active.price}</span>
            </div>

            {/* Close */}
            <button
              onClick={() => setActiveIdx(null)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg"
              style={{ background: "linear-gradient(135deg,#C9A96E,#9E7D48)" }}
              aria-label="ปิด"
            >✕</button>

            {/* Prev */}
            <button
              onClick={() => setActiveIdx((activeIdx! - 1 + packages.length) % packages.length)}
              className="absolute top-1/2 -translate-y-1/2 -left-12 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              style={{ background: "rgba(255,255,255,0.15)" }}
              aria-label="ก่อนหน้า"
            >‹</button>

            {/* Next */}
            <button
              onClick={() => setActiveIdx((activeIdx! + 1) % packages.length)}
              className="absolute top-1/2 -translate-y-1/2 -right-12 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              style={{ background: "rgba(255,255,255,0.15)" }}
              aria-label="ถัดไป"
            >›</button>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {packages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActiveIdx(i); }}
                className="w-2 h-2 rounded-full transition-all duration-200"
                style={{ background: i === activeIdx ? "#C9A96E" : "rgba(255,255,255,0.35)", transform: i === activeIdx ? "scale(1.4)" : "scale(1)" }}
                aria-label={`รูปที่ ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes lightbox-in {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
