"use client";
import Image from "next/image";
import Reveal from "./Reveal";

export default function CloneCTAButtons() {
  return (
    <section className="relative bg-white overflow-hidden py-12 lg:py-16">
      <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-50" />

      <div
        data-blob
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full z-0"
        style={{
          background: "radial-gradient(ellipse, rgba(201,169,110,0.16) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5">

        <Reveal className="text-center mb-10 lg:mb-12">
          <span className="sec-badge">✦ ติดต่อเรา</span>
          <h2
            className="font-black text-ink mt-3 mb-2"
            style={{ fontSize: "clamp(26px,3vw,40px)" }}
          >
            พร้อมให้บริการ{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              ทุกวัน
            </span>
          </h2>
          <p className="text-ink-muted text-sm max-w-xs mx-auto leading-relaxed">
            โทรหรือแอด LINE ได้เลย ฟรีค่าปรึกษา
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7 max-w-2xl mx-auto">

          {/* PHONE */}
          <Reveal delay={0}>
            <a
              href="tel:0618437666"
              className="group relative flex flex-col items-center text-center gap-5 bg-[#FBF8F2] border border-[#EDE8DF] rounded-2xl px-7 py-9 lg:px-10 lg:py-12 shadow-[0_4px_24px_rgba(100,60,0,0.06)] hover:shadow-[0_12px_36px_rgba(100,60,0,0.13)] hover:-translate-y-1 hover:border-[#C9A96E]/50 transition-all duration-300 overflow-hidden"
              style={{ textDecoration: "none" }}
            >
              <div className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.12) 0%, transparent 65%)" }} />

              <div className="relative shrink-0 z-10">
                <span className="absolute -inset-2 rounded-full animate-ping"
                  style={{ background: "rgba(201,169,110,0.20)", animationDuration: "2.4s" }} />
                <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
                  style={{ background: "linear-gradient(135deg,#C9A96E 0%,#9E7D48 100%)" }}>
                  <Image src="/icon/calling-icon.svg" alt="โทร" width={32} height={32} style={{ filter: "brightness(0) invert(1)" }} />
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-2"
                  style={{ color: "#9E7D48" }}>โทรปรึกษาฟรี</p>
                <p className="font-black text-ink leading-none mb-2"
                  style={{ fontSize: "clamp(22px,3.5vw,34px)", letterSpacing: "-0.03em" }}>
                  061-843-7666
                </p>
                <p className="text-ink-muted text-xs font-medium">เปิดทุกวัน 08:00 – 20:00 น.</p>
              </div>

            </a>
          </Reveal>

          {/* LINE */}
          <Reveal delay={120}>
            <a
              href="https://line.me/ti/p/~@dede1721"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center text-center gap-5 bg-[#FBF8F2] border border-[#EDE8DF] rounded-2xl px-7 py-9 lg:px-10 lg:py-12 shadow-[0_4px_24px_rgba(100,60,0,0.06)] hover:shadow-[0_12px_36px_rgba(180,50,80,0.13)] hover:-translate-y-1 hover:border-[#D4576E]/40 transition-all duration-300 overflow-hidden"
              style={{ textDecoration: "none" }}
            >
              <div className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,87,110,0.10) 0%, transparent 65%)" }} />

              <div className="relative shrink-0 z-10">
                <span className="absolute -inset-2 rounded-full animate-ping"
                  style={{ background: "rgba(212,87,110,0.18)", animationDuration: "2.4s", animationDelay: "0.8s" }} />
                <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
                  style={{ background: "linear-gradient(135deg,#D4576E 0%,#B03255 100%)" }}>
                  <Image src="/icon/line-icon.svg" alt="LINE" width={32} height={32} />
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-2"
                  style={{ color: "#B03255" }}>แอดไลน์เลย</p>
                <p className="font-black text-ink leading-none mb-2"
                  style={{ fontSize: "clamp(22px,3.5vw,34px)", letterSpacing: "-0.03em" }}>
                  @dede1721
                </p>
                <p className="text-ink-muted text-xs font-medium">ตอบเร็ว ตลอด 24 ชม.</p>
              </div>

            </a>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
