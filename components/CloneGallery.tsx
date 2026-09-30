import Image from "next/image";
import { IMG } from "@/lib/images";
import Reveal from "./Reveal";
import { Images } from "lucide-react";

export default function CloneGallery() {
  const photos = IMG.gallery;

  return (
    <section className="relative bg-[#FBF8F2] overflow-hidden py-12 lg:py-16">

      {/* Dot pattern */}
      <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-40" />

      {/* Decorative blobs */}
      <div data-blob
        className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.14) 0%, transparent 70%)", filter: "blur(120px)" }}
      />
      <div data-blob
        className="pointer-events-none absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(212,87,110,0.08) 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5">

        <Reveal className="text-center mb-10 lg:mb-14">
          <span className="sec-badge">ภาพกิจกรรม</span>
          <h2
            className="font-black text-ink mt-3 mb-2"
            style={{ fontSize: "clamp(30px,3.5vw,46px)" }}
          >
            บรรยากาศ{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              การทำงาน
            </span>
          </h2>
          <p className="text-ink-muted text-sm max-w-xs mx-auto leading-relaxed mt-1">
            ภาพกิจกรรมและบรรยากาศการทำงานของทีมงาน
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((src, i) => (
            <Reveal key={i} delay={i * 55}>
              <div className="group overflow-hidden rounded-xl border border-[#EDE8DF] shadow-[0_4px_24px_rgba(100,60,0,0.06)] hover:shadow-[0_10px_36px_rgba(100,60,0,0.13)] transition-all duration-300 relative">
                <Image
                  src={src}
                  alt={`กิจกรรม ${i + 1}`}
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

        <div className="text-center mt-10">
          <a
            href="/gallery"
            className="btn-pink inline-flex items-center gap-2"
          >
            <Images size={16} strokeWidth={2} />
            ดูรูปกิจกรรมทั้งหมด
          </a>
        </div>
      </div>
    </section>
  );
}
