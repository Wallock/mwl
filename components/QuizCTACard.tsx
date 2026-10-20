"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { useT } from "@/context/LanguageContext";

export default function QuizCTACard() {
  const T = useT();
  return (
    <Reveal delay={400}>
      {/* lg:pt-36 = space above card for desktop image overflow */}
      <div className="relative mt-8 lg:pt-18">

        {/* Mobile: image absolute right */}
        <div className="absolute bottom-0 right-0 z-10 w-[190px] pointer-events-none select-none drop-shadow-xl lg:hidden">
          <Image src="/images/pic.webp" alt="" width={190} height={320} className="object-contain w-full h-auto" priority={false} />
        </div>

        {/* Desktop: image absolute left, overflows above card */}
        <div className="hidden lg:block absolute left-10 bottom-0 z-10 w-[175px] pointer-events-none select-none drop-shadow-xl">
          <Image src="/images/pic.webp" alt="" width={175} height={295} className="object-contain w-full h-auto" priority={false} />
        </div>

        <Link href="/quiz" className="group block w-full rounded-2xl relative" style={{ textDecoration: "none" }}>
          {/* Background */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(120deg, #FDF6E8 0%, #FAF0D2 50%, #F5E8C0 100%)",
              border: "1.5px solid rgba(201,169,110,0.35)",
              boxShadow: "0 6px 28px rgba(158,125,72,0.14)",
            }}
          >
            <div
              className="pointer-events-none absolute -top-10 -right-10 w-64 h-64 rounded-full opacity-25"
              style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)" }}
            />
          </div>

          {/* Mobile content */}
          <div className="relative z-[1] lg:hidden pl-5 pr-[196px] py-5">
            <MobileText T={T} />
          </div>

          {/* Desktop content: pl reserves space for image on left */}
          <div className="relative z-[1] hidden lg:flex items-center pl-[215px] pr-10 py-8 gap-6">
            <div className="flex-1 min-w-0">
              <div
                className="inline-block text-[11px] font-black tracking-[0.14em] uppercase mb-3 px-3 py-1 rounded-full"
                style={{ background: "rgba(158,125,72,0.14)", color: "#7A5C28" }}
              >
                {T.quiz.badge}
              </div>
              <h3 className="font-black leading-tight mb-2" style={{ fontSize: 30, color: "#1A1410" }}>
                {T.quiz.heading}
              </h3>
              <p className="text-[15px] leading-relaxed" style={{ color: "#7A6040" }}>
                {T.quiz.descDesktop}
              </p>
            </div>
            <div className="shrink-0">
              <span
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-black transition-all duration-200 group-hover:gap-3"
                style={{
                  background: "linear-gradient(135deg,#C9A96E,#9E7D48)",
                  color: "#fff",
                  boxShadow: "0 4px 18px rgba(158,125,72,0.40)",
                }}
              >
                {T.quiz.btnDesktop}
                <ArrowRight size={16} strokeWidth={2.5} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </Reveal>
  );
}

function MobileText({ T }: { T: ReturnType<typeof useT> }) {
  return (
    <>
      <div
        className="inline-block text-[11px] font-black tracking-[0.12em] uppercase mb-2 px-2.5 py-1 rounded-full"
        style={{ background: "rgba(158,125,72,0.14)", color: "#7A5C28" }}
      >
        {T.quiz.badge}
      </div>
      <h3 className="font-black leading-snug text-[18px]" style={{ color: "#1A1410" }}>
        {T.quiz.heading}
      </h3>
      <p className="text-[13px] mt-1 leading-relaxed" style={{ color: "#7A6040" }}>
        {T.quiz.descMobile}
      </p>
      <div className="mt-3">
        <span
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[13px] font-bold"
          style={{
            background: "linear-gradient(135deg,#C9A96E,#9E7D48)",
            color: "#fff",
            boxShadow: "0 3px 12px rgba(158,125,72,0.35)",
          }}
        >
          {T.quiz.btnMobile}
          <ArrowRight size={14} strokeWidth={2.5} />
        </span>
      </div>
    </>
  );
}
