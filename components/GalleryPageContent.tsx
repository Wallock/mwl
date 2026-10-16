"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMG } from "@/lib/images";
import { useT } from "@/context/LanguageContext";

export default function GalleryPageContent() {
  const t = useT();
  const p = t.galleryPage;
  const photos = IMG.gallery;

  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #F5E6BE 0%, #EDD49E 40%, #F0DDB8 70%, #F8EDD3 100%)" }}>
        <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-30" />
        <div data-blob
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full z-0"
          style={{ background: "radial-gradient(circle, rgba(201,169,110,0.30) 0%, transparent 70%)", filter: "blur(100px)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">
          <Reveal>
            <span className="sec-badge mb-4">{p.badge}</span>
            <h1 className="font-black text-ink mt-4 mb-4" style={{ fontSize: "clamp(36px,5vw,60px)" }}>
              {p.title}{" "}
              <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                {p.titleHighlight}
              </span>
            </h1>
            <p className="text-ink-muted text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              {p.desc}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="relative bg-[#FBF8F2] overflow-hidden py-12 lg:py-16">
        <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-40" />
        <div data-blob
          className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full z-0"
          style={{ background: "radial-gradient(circle, rgba(201,169,110,0.14) 0%, transparent 70%)", filter: "blur(120px)" }}
        />
        <div data-blob
          className="pointer-events-none absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full z-0"
          style={{ background: "radial-gradient(circle, rgba(212,87,110,0.08) 0%, transparent 70%)", filter: "blur(100px)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {photos.map((src, i) => (
              <Reveal key={i} delay={i * 55}>
                <div className="group overflow-hidden rounded-xl border border-[#EDE8DF] shadow-[0_4px_24px_rgba(100,60,0,0.06)] hover:shadow-[0_10px_36px_rgba(100,60,0,0.13)] transition-all duration-300 relative">
                  <Image
                    src={src}
                    alt={`${p.title} ${i + 1}`}
                    width={400}
                    height={300}
                    className="w-full block object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ aspectRatio: "4/3", height: "auto" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-white py-12 lg:py-16">
        <div className="max-w-lg mx-auto px-5 text-center">
          <Reveal>
            <p className="text-ink-muted text-base mb-6">{p.ctaText}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:0618437666" style={{
                display: "flex", alignItems: "stretch", borderRadius: 14,
                overflow: "hidden", textDecoration: "none",
                boxShadow: "0 4px 16px rgba(243,0,60,0.35)",
              }}>
                <span style={{ background: "#C4006A", padding: "12px 14px", display: "flex", alignItems: "center" }}>
                  <Image src="/icon/calling-icon.svg" alt="โทร" width={22} height={22} style={{ filter: "brightness(0) invert(1)", width: 22, height: 22 }} />
                </span>
                <span style={{ background: "linear-gradient(180deg,#FF00CB 0%,#F3003C 100%)", padding: "12px 18px", fontWeight: 700, fontSize: 14, color: "#fff" }}>
                  061-843-7666
                </span>
              </a>
              <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "stretch", borderRadius: 14,
                overflow: "hidden", textDecoration: "none",
                boxShadow: "0 4px 16px rgba(6,109,0,0.35)",
              }}>
                <span style={{ background: "#04520A", padding: "12px 14px", display: "flex", alignItems: "center" }}>
                  <Image src="/icon/line-icon.svg" alt="LINE" width={22} height={22} style={{ width: 22, height: 22 }} />
                </span>
                <span style={{ background: "linear-gradient(180deg,#3EB600 0%,#066D00 100%)", padding: "12px 18px", fontWeight: 700, fontSize: 14, color: "#fff" }}>
                  LINE @dede1721
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
