"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IMG } from "@/lib/images";
import { ZoomIn } from "lucide-react";

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
      <div className="w-full flex flex-col items-center gap-3">

        {/* ── Thumbnail ─────────────────────────── */}
        <button
          onClick={() => setOpen(true)}
          className="group relative w-full cursor-zoom-in overflow-hidden focus-visible:outline-none animate-float"
          aria-label="ดูใบอนุญาตขนาดเต็ม"
        >
          <Image
            src={IMG.license}
            alt="ใบอนุญาตจัดหางาน"
            width={440}
            height={616}
            className="w-full block"
            style={{ height: "auto", display: "block" }}
            priority
          />

          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-250"
            style={{ background: "linear-gradient(to top, rgba(26,20,16,0.55) 0%, transparent 55%)" }}
          >
            <span className="flex items-center gap-1.5 bg-white/95 text-[#1A1410] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg">
              <ZoomIn size={12} />
              ดูขนาดเต็ม
            </span>
          </div>
        </button>

      </div>

      {/* ── Lightbox ─────────────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-5"
          style={{ background: "rgba(10,6,3,0.88)", backdropFilter: "blur(8px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative"
            style={{ animation: "lightbox-in 0.20s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(201,169,110,0.35)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
              }}
            >
              <Image
                src={IMG.license}
                alt="ใบอนุญาตจัดหางาน"
                width={800}
                height={1120}
                className="block"
                style={{
                  height: "min(88dvh, 80vh)",
                  width: "auto",
                  maxWidth: "min(92vw, 560px)",
                  objectFit: "contain",
                }}
              />
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
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
          from { opacity: 0; transform: scale(0.90) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
}
