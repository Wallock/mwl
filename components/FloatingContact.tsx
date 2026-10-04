"use client";
import Image from "next/image";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.92)",
          pointerEvents: visible ? "auto" : "none",
        }}
      >

        {/* ── LINE ──────────────────────────────── */}
        <a
          href="https://line.me/ti/p/~@dede1721"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center rounded-full overflow-hidden active:scale-95 transition-transform duration-150"
          style={{ boxShadow: "0 6px 28px rgba(4,100,0,0.50), 0 2px 8px rgba(0,0,0,0.15)" }}
          aria-label="แอดไลน์"
        >
          {/* Pulse ring */}
          <span className="absolute right-0 top-0 w-14 h-14 rounded-full pointer-events-none ping-green" />

          {/* Label — expands left on hover */}
          <span
            className="self-stretch flex items-center overflow-hidden max-w-0 group-hover:max-w-[130px] transition-[max-width] duration-300 ease-out text-white font-bold text-sm whitespace-nowrap"
            style={{ background: "linear-gradient(135deg,#0A8C00,#065A00)" }}
          >
            <span className="px-4">แอดไลน์</span>
          </span>

          {/* Icon circle */}
          <span
            className="relative w-14 h-14 flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(145deg,#0D9E00,#065A00)" }}
          >
            <Image src="/icon/line-icon.svg" alt="LINE" width={26} height={26} />
          </span>
        </a>

        {/* ── CALL ──────────────────────────────── */}
        <a
          href="tel:0618437666"
          className="group relative flex items-center rounded-full overflow-hidden active:scale-95 transition-transform duration-150"
          style={{ boxShadow: "0 6px 28px rgba(212,87,110,0.50), 0 2px 8px rgba(0,0,0,0.15)" }}
          aria-label="โทรหาเรา"
        >
          {/* Pulse ring */}
          <span className="absolute right-0 top-0 w-14 h-14 rounded-full pointer-events-none ping-pink" />

          {/* Label — expands left on hover */}
          <span
            className="self-stretch flex items-center overflow-hidden max-w-0 group-hover:max-w-[160px] transition-[max-width] duration-300 ease-out text-white font-bold text-sm whitespace-nowrap"
            style={{ background: "linear-gradient(135deg,#D4576E,#A82E4E)" }}
          >
            <span className="px-4">061-843-7666</span>
          </span>

          {/* Icon circle */}
          <span
            className="relative w-14 h-14 flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(145deg,#E05C76,#B03255)" }}
          >
            <Phone size={22} strokeWidth={2.2} color="white" />
          </span>
        </a>
      </div>

      <style>{`
        @keyframes ping-green {
          0%   { box-shadow: 0 0 0 0px rgba(13,158,0,0.60); }
          80%  { box-shadow: 0 0 0 14px rgba(13,158,0,0.00); }
          100% { box-shadow: 0 0 0 14px rgba(13,158,0,0.00); }
        }
        @keyframes ping-pink {
          0%   { box-shadow: 0 0 0 0px rgba(212,87,110,0.60); }
          80%  { box-shadow: 0 0 0 14px rgba(212,87,110,0.00); }
          100% { box-shadow: 0 0 0 14px rgba(212,87,110,0.00); }
        }
        .ping-green { animation: ping-green 2.2s ease-out infinite; }
        .ping-pink  { animation: ping-pink  2.2s ease-out 1.1s infinite; }
      `}</style>
    </>
  );
}
