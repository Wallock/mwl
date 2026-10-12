"use client";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage, type Lang } from "@/context/LanguageContext";

const LANGS: { code: Lang; label: string }[] = [
  { code: "th", label: "ภาษาไทย" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ko", label: "한국어" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "ja", label: "日本語" },
  { code: "my", label: "မြန်မာဘာသာ" },
  { code: "lo", label: "ພາສາລາວ" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="fixed top-[96px] right-4 z-[110]">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-bold transition-all duration-200 active:scale-95"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(201,169,110,0.30)",
          boxShadow: "0 4px 20px rgba(100,60,0,0.12)",
          color: "#7A5C28",
        }}
        aria-label="เปลี่ยนภาษา"
      >
        <Globe size={15} strokeWidth={2} />
        <span className="hidden sm:inline">{lang.toUpperCase()}</span>
      </button>

      {open && (
        <div
          className="absolute top-full right-0 mt-2 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(201,169,110,0.22)",
            boxShadow: "0 8px 32px rgba(100,60,0,0.14)",
            minWidth: 156,
          }}
        >
          {LANGS.map(l => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className="w-full flex items-center gap-3 px-4 py-3 text-left text-[14px] font-semibold transition-colors duration-150"
              style={{
                color: lang === l.code ? "#7A5C28" : "#3A2A1A",
                background: lang === l.code ? "rgba(201,169,110,0.12)" : "transparent",
              }}
            >
              {l.label}
              {lang === l.code && (
                <span className="ml-auto w-2 h-2 rounded-full shrink-0" style={{ background: "#C9A96E" }} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
