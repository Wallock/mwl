"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IMG } from "@/lib/images";
import Reveal from "./Reveal";
import { useT } from "@/context/LanguageContext";

type PkgItem = { src: string; alt: string; price: string; label: string };

function PackageCard({
  p, i, onClick, bestseller, zoom, unit,
}: {
  p: PkgItem; i: number; onClick: () => void;
  bestseller: string; zoom: string; unit: string;
}) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const isFeatured = i === 1;

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    const scale = isFeatured ? 1.06 : 1.04;
    el.style.transform = `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg) scale(${scale})`;
  }

  function handleMouseLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = isFeatured ? "scale(1.05) translateY(-4px)" : "";
    el.style.transition = "transform 0.4s cubic-bezier(0.34,1.4,0.64,1)";
  }

  return (
    <div className={`relative ${isFeatured ? "z-10" : ""}`}>
      {/* Featured glow ring */}
      {isFeatured && (
        <div
          className="absolute -inset-2 rounded-[26px] pointer-events-none"
          style={{
            background: "linear-gradient(135deg, #C9A96E, #EDD99A, #C9A96E)",
            opacity: 0.6,
            filter: "blur(10px)",
            animation: "gold-glow 3s ease-in-out infinite",
          }}
        />
      )}

      <button
        ref={cardRef}
        onClick={onClick}
        className="group block w-full relative cursor-zoom-in"
        style={{
          background: "none",
          border: "none",
          padding: 0,
          transform: isFeatured ? "scale(1.05) translateY(-4px)" : "",
          transition: "transform 0.3s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.3s ease",
          willChange: "transform",
        }}
        aria-label={p.alt}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hover glow */}
        <div
          className="absolute -inset-1 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(135deg,#C9A96E,#E8C27A,#C9A96E)",
            filter: "blur(12px)",
            zIndex: 0,
          }}
        />

        {/* Card */}
        <div
          className="relative rounded-2xl overflow-hidden z-10"
          style={{
            border: "2px solid transparent",
            background: "linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg,#C9A96E 0%,#F0DDB0 50%,#C9A96E 100%) border-box",
            boxShadow: isFeatured
              ? "0 12px 48px rgba(201,169,110,0.35), 0 4px 16px rgba(201,169,110,0.20)"
              : "0 4px 24px rgba(100,60,0,0.08)",
          }}
        >
          {/* Diagonal ribbon on featured */}
          {isFeatured && (
            <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden rounded-2xl z-20">
              <div
                className="absolute text-white text-[9px] font-black tracking-wider py-1 text-center"
                style={{
                  top: "14px",
                  right: "-22px",
                  width: "88px",
                  background: "linear-gradient(135deg,#D4576E,#B03255)",
                  transform: "rotate(45deg)",
                  boxShadow: "0 2px 6px rgba(212,87,110,0.5)",
                }}
              >
                {bestseller}
              </div>
            </div>
          )}

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
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(26,20,16,0.45)", backdropFilter: "blur(2px)" }}
            >
              <span className="text-white font-black text-sm drop-shadow">🔍 {zoom}</span>
            </div>
          </div>

          <div className="px-3.5 py-3" style={{ background: "linear-gradient(135deg,#FBF7EE 0%,#F5EDD8 100%)" }}>
            <p className="text-[13px] font-bold text-ink-muted mb-0.5">{p.label}</p>
            <p
              className="font-black leading-none"
              style={{
                fontSize: "clamp(16px,2vw,18px)",
                background: "linear-gradient(135deg,#C9A96E,#9E7D48)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ฿{p.price}{" "}
              <span style={{ fontSize: "12px", fontWeight: 600, WebkitTextFillColor: "#9E7D48" }}>{unit}</span>
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function ClonePackages() {
  const T = useT();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const packages: PkgItem[] = [
    { src: IMG.pkg1, alt: `3,500 ${T.packages.unit}`, price: "3,500",  label: T.packages.pkg1 },
    { src: IMG.pkg2, alt: `5,000 ${T.packages.unit}`, price: "5,000",  label: T.packages.pkg2 },
    { src: IMG.pkg3, alt: `7,000 ${T.packages.unit}`, price: "7,000",  label: T.packages.pkg3 },
    { src: IMG.pkg4, alt: `10,000 ${T.packages.unit}`, price: "10,000", label: T.packages.pkg4 },
  ];

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
  }, [activeIdx, packages.length]);

  const active = activeIdx !== null ? packages[activeIdx] : null;

  return (
    <>
      <section className="relative bg-white overflow-hidden py-14 lg:py-20">
        <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-40" />
        <div
          className="pointer-events-none absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full z-0"
          style={{ background: "radial-gradient(circle, rgba(201,169,110,0.14) 0%, transparent 70%)", filter: "blur(100px)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-12 lg:mb-16">
            <span className="sec-badge">{T.packages.badge}</span>
            <h2 className="font-black text-ink mt-3 mb-2" style={{ fontSize: "clamp(30px,3.5vw,46px)" }}>
              {T.packages.heading}{" "}
              <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">{T.packages.headingHighlight}</span>
            </h2>
            <p className="text-ink-muted text-sm max-w-xs mx-auto">{T.packages.desc}</p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-end pb-4">
            {packages.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <PackageCard
                  p={p}
                  i={i}
                  onClick={() => setActiveIdx(i)}
                  bestseller={T.packages.bestseller}
                  zoom={T.packages.zoom}
                  unit={T.packages.unit}
                />
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
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "2px solid transparent",
                background: "linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg,#C9A96E,#F0DDB0,#C9A96E) border-box",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src={active.src}
                alt={active.alt}
                width={800}
                height={800}
                style={{ width: "min(80vw, 80vh)", height: "auto", display: "block" }}
              />
            </div>
            <div className="absolute -bottom-10 left-0 right-0 text-center">
              <span className="text-white/80 text-sm font-bold">{active.label} — ฿{active.price}</span>
            </div>
            <button
              onClick={() => setActiveIdx(null)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg"
              style={{ background: "linear-gradient(135deg,#C9A96E,#9E7D48)" }}
              aria-label="ปิด"
            >✕</button>
            <button
              onClick={() => setActiveIdx((activeIdx! - 1 + packages.length) % packages.length)}
              className="absolute top-1/2 -translate-y-1/2 -left-12 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              style={{ background: "rgba(255,255,255,0.15)" }}
              aria-label="ก่อนหน้า"
            >‹</button>
            <button
              onClick={() => setActiveIdx((activeIdx! + 1) % packages.length)}
              className="absolute top-1/2 -translate-y-1/2 -right-12 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              style={{ background: "rgba(255,255,255,0.15)" }}
              aria-label="ถัดไป"
            >›</button>
          </div>
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {packages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActiveIdx(i); }}
                className="w-2 h-2 rounded-full transition-all duration-200"
                style={{
                  background: i === activeIdx ? "#C9A96E" : "rgba(255,255,255,0.35)",
                  transform: i === activeIdx ? "scale(1.4)" : "scale(1)",
                }}
                aria-label={`${i + 1}`}
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
        @keyframes gold-glow {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 0.9; }
        }
      `}</style>
    </>
  );
}
