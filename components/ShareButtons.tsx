"use client";
import { useState } from "react";
import Image from "next/image";

interface Props {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false);

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mt-10 pt-8 border-t border-[#EDE8DF]">
      <p className="text-xs font-black tracking-[0.14em] uppercase text-gold-dark mb-3">แชร์บทความ</p>
      <div className="flex items-center gap-2 flex-wrap">

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
          target="_blank" rel="noopener noreferrer"
          aria-label="แชร์ไปยัง Facebook"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs font-bold shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          style={{ background: "#1877F2", textDecoration: "none" }}
        >
          <Image src="/icon/facebook-icon.svg" alt="Facebook" width={16} height={16} style={{ width: 16, height: 16, filter: "brightness(0) invert(1)" }} />
          Facebook
        </a>

        {/* LINE */}
        <a
          href={`https://social-plugins.line.me/lineit/share?url=${encoded}`}
          target="_blank" rel="noopener noreferrer"
          aria-label="แชร์ไปยัง LINE"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs font-bold shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          style={{ background: "#06C755", textDecoration: "none" }}
        >
          <Image src="/icon/line-icon.svg" alt="LINE" width={16} height={16} style={{ width: 16, height: 16 }} />
          LINE
        </a>

        {/* X (Twitter) */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
          target="_blank" rel="noopener noreferrer"
          aria-label="แชร์ไปยัง X"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs font-bold shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          style={{ background: "#000", textDecoration: "none" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          X
        </a>

        {/* Copy link */}
        <button
          onClick={copyLink}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: copied ? "#F0FDF4" : "#FBF8F2",
            borderColor: copied ? "#86EFAC" : "rgba(201,169,110,0.35)",
            color: copied ? "#16A34A" : "#7A5C28",
          }}
        >
          {copied ? (
            <>✓ คัดลอกแล้ว</>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              คัดลอกลิงก์
            </>
          )}
        </button>

      </div>
    </div>
  );
}
