"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IMG } from "@/lib/images";

export default function LicenseLightbox() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative w-full max-w-[220px] lg:max-w-[260px] animate-float cursor-zoom-in"
        style={{ background: "none", border: "none", padding: 0 }}
        aria-label="ดูใบอนุญาตขนาดเต็ม"
      >
        <div className="absolute -inset-4 rounded-3xl blur-2xl bg-gradient-to-br from-gold/20 to-gold-dark/10" />
        <div className="relative p-1.5 rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/25 to-gold/5 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <Image
            src={IMG.license}
            alt="ใบอนุญาตจัดหางาน"
            width={260}
            height={360}
            className="w-full rounded-2xl block"
            style={{ height: "auto", width: "100%" }}
            priority
          />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-gold to-gold-dark text-white text-[10px] font-black tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-lg">
          ใบอนุญาตจัดหางานถูกต้อง
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(10,6,3,0.85)", backdropFilter: "blur(6px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative"
            style={{ animation: "lightbox-in 0.22s ease-out", maxHeight: "92dvh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-2 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/20 to-gold/5 shadow-2xl" style={{ maxHeight: "92dvh" }}>
              <Image
                src={IMG.license}
                alt="ใบอนุญาตจัดหางาน"
                width={800}
                height={1120}
                className="rounded-2xl block"
                style={{ height: "min(84dvh, 84vw * 1.4)", width: "auto", maxWidth: "90vw", objectFit: "contain" }}
              />
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg"
              style={{ background: "linear-gradient(135deg,#C9A96E,#9E7D48)" }}
              aria-label="ปิด"
            >
              ✕
            </button>
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
