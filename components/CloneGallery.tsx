"use client";
import Image from "next/image";
import { IMG } from "@/lib/images";
import Reveal from "./Reveal";
import { Images } from "lucide-react";
import { useT } from "@/context/LanguageContext";

export default function CloneGallery() {
  const T = useT();
  const photos = IMG.gallery;

  return (
    <section className="relative overflow-hidden py-12 lg:py-16" style={{ background: "#FBF8F2" }}>
      <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-40" />
      <div className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.14) 0%, transparent 70%)", filter: "blur(120px)" }} />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(212,87,110,0.08) 0%, transparent 70%)", filter: "blur(100px)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5">

        <Reveal className="text-center mb-10 lg:mb-12">
          <span className="sec-badge">{T.gallery.badge}</span>
          <h2 className="font-black text-ink mt-3 mb-2" style={{ fontSize: "clamp(34px,4vw,52px)" }}>
            {T.gallery.heading}{" "}
            <span style={{
              background: "linear-gradient(135deg,#C9A96E,#9E7D48)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              {T.gallery.headingHighlight}
            </span>
          </h2>
          <div className="gold-line" />
          <p className="text-[15px] max-w-xs mx-auto leading-relaxed mt-2" style={{ color: "#7A6555" }}>
            {photos.length} · {T.gallery.badge}
          </p>
        </Reveal>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
          style={{ gridAutoRows: "clamp(180px, 22vw, 260px)" }}
        >
          {photos.map((src, i) => {
            const isFeatured = i === 0;
            return (
              <Reveal
                key={i}
                delay={i * 45}
                style={{ height: "100%" }}
              >
                <div className="group relative overflow-hidden rounded-2xl h-full cursor-pointer"
                  style={{
                    boxShadow: "0 4px 20px rgba(100,60,0,0.08)",
                  }}
                >
                  <Image
                    src={src}
                    alt={T.gallery.labels[i] ?? `${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                    sizes={isFeatured ? "(max-width: 640px) 66vw, 44vw" : "(max-width: 640px) 33vw, 22vw"}
                  />

                  {/* Permanent gradient — always visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Permanent bottom label */}
                  <div className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-6">
                    <p
                      className="text-white font-bold leading-tight"
                      style={{ fontSize: isFeatured ? "clamp(15px, 1.6vw, 18px)" : "12px" }}
                    >
                      {T.gallery.labels[i]}
                    </p>
                  </div>

                  {/* Featured badge */}
                  {isFeatured && (
                    <div
                      className="absolute top-3 left-3 z-10 text-white text-[11px] font-black px-3 py-1.5 rounded-full"
                      style={{
                        background: "linear-gradient(135deg,#C9A96E,#9E7D48)",
                        boxShadow: "0 2px 12px rgba(201,169,110,0.50)",
                      }}
                    >
                      {T.gallery.featuredBadge}
                    </div>
                  )}

                  {/* Photo count — top right on hover */}
                  <div
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-[11px] font-black px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
                  >
                    {i + 1}/{photos.length}
                  </div>

                  {/* Gold inset ring on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 2px rgba(201,169,110,0.70)" }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="text-center mt-8 lg:mt-10">
          <a href="/gallery" className="btn-pink inline-flex items-center gap-2">
            <Images size={16} strokeWidth={2} />
            {T.gallery.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
