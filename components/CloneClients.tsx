import Image from "next/image";
import { IMG } from "@/lib/images";
import Reveal from "./Reveal";

const logos = [
  { src: IMG.aia,      alt: "AIA" },
  { src: IMG.asset,    alt: "ASSET" },
  { src: IMG.toyota,   alt: "Toyota" },
  { src: IMG.maxco,    alt: "Max & Co" },
  { src: IMG.partner1, alt: "Partner" },
  { src: IMG.partner2, alt: "Partner" },
  { src: IMG.partner3, alt: "Partner" },
];

export default function CloneClients() {
  return (
    <section className="relative bg-white overflow-hidden py-10 lg:py-14">
      <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-30" />

      <div className="relative z-10">

        <Reveal className="text-center mb-10 max-w-5xl mx-auto px-5">
          <span className="sec-badge">พาร์ทเนอร์ของเรา</span>
          <h2
            className="font-black text-ink mt-3 mb-1"
            style={{ fontSize: "clamp(24px,2.8vw,36px)" }}
          >
            บริษัทชั้นนำที่{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              ไว้วางใจเรา
            </span>
          </h2>
          <p className="text-ink-subtle text-sm">กว่า 500 องค์กรทั่วประเทศ</p>
        </Reveal>

        {/* Marquee strip */}
        <div
          className="relative"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <div className="clients-track">
            {[...logos, ...logos].map((l, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0 px-10 lg:px-14"
              >
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={0}
                  height={0}
                  sizes="160px"
                  style={{ height: "clamp(56px, 7vw, 90px)", width: "auto", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .clients-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: clients-scroll 18s linear infinite;
        }
        @keyframes clients-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .clients-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
