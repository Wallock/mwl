"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useT } from "@/context/LanguageContext";

export default function FloatingQuiz() {
  const pathname = usePathname();
  const T = useT();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    if (isHome) return;
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  if (isHome || dismissed) return null;

  return (
    <Link
      href="/quiz"
      className="group fixed bottom-6 left-4 z-50 flex flex-col items-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.92)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.5s, transform 0.5s",
        textDecoration: "none",
      }}
      aria-label="ทำแบบทดสอบ เหมาะกับแม่บ้านแบบไหน"
    >
      <style>{`
        @keyframes quiz-glow {
          0%, 100% { box-shadow: 0 6px 24px rgba(158,125,72,0.28), 0 0 0 0px rgba(201,169,110,0.55); }
          50%       { box-shadow: 0 6px 32px rgba(158,125,72,0.50), 0 0 0 8px rgba(201,169,110,0.00); }
        }
        .quiz-pulse { animation: quiz-glow 2.4s ease-in-out infinite; }
      `}</style>
      {/* Model image — sits above the card */}
      {/* Close button */}
      <button
        onClick={(e) => { e.preventDefault(); setDismissed(true); }}
        className="absolute top-0 right-0 z-20 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-95"
        style={{
          background: "rgba(90,60,20,0.75)",
          color: "#fff",
          fontSize: 12,
          lineHeight: 1,
          backdropFilter: "blur(4px)",
        }}
        aria-label="ปิด"
      >
        ✕
      </button>

      {/* Model image */}
      <div className="relative z-10 pointer-events-none select-none drop-shadow-xl"
        style={{ marginBottom: -22, width: 148 }}>
        <Image
          src="/images/pic.webp"
          alt=""
          width={148}
          height={248}
          className="object-contain w-full h-auto"
          priority={false}
        />
      </div>

      {/* Card */}
      <div
        className="relative overflow-hidden rounded-2xl px-5 pt-7 pb-4 flex flex-col items-center gap-3 transition-transform duration-200 group-hover:scale-105 group-active:scale-95 quiz-pulse"
        style={{
          background: "linear-gradient(160deg,#FDF6E8 0%,#F5E8C0 100%)",
          border: "1.5px solid rgba(201,169,110,0.40)",
          boxShadow: "0 6px 24px rgba(158,125,72,0.28)",
          width: 196,
        }}
      >
        {/* Glow circle */}
        <div
          className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle,#C9A96E 0%,transparent 70%)" }}
        />

        {/* Badge */}
        <span
          className="text-[10px] font-black tracking-[0.10em] uppercase px-3 py-1 rounded-full whitespace-nowrap"
          style={{ background: "rgba(158,125,72,0.15)", color: "#7A5C28" }}
        >
          {T.quiz.badge}
        </span>

        {/* Heading */}
        <p
          className="text-center font-black leading-snug text-[14px]"
          style={{ color: "#1A1410" }}
        >
          {T.quiz.heading}
        </p>

        {/* Button */}
        <span
          className="inline-flex items-center justify-center w-full px-3 py-2.5 rounded-xl text-[13px] font-black"
          style={{
            background: "linear-gradient(135deg,#C9A96E,#9E7D48)",
            color: "#fff",
            boxShadow: "0 3px 12px rgba(158,125,72,0.40)",
          }}
        >
          {T.quiz.btnMobile}
        </span>
      </div>
    </Link>
  );
}

