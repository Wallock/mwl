"use client";
import { useState } from "react";
import Link from "next/link";
import { IMG } from "@/lib/images";

const BASE = "https://www.maidwonderland.com";

const serviceLinks = [
  { label: "บริการแม่บ้าน",        href: `${BASE}/our-service/maid-service/` },
  { label: "พี่เลี้ยงเด็ก",        href: `${BASE}/our-service/nanny_sv/` },
  { label: "แม่บ้านดูแลผู้สูงอายุ", href: `${BASE}/our-service/elder_care/` },
  { label: "แรงงานทั่วไป",         href: `${BASE}/our-service/general_labor/` },
];

export default function CloneNavbar() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  return (
    <nav style={{ background: "#FEFDF9", position: "sticky", top: 0, zIndex: 100 }}>
      {/* Thin gold top stripe */}
      <div style={{ height: 2, background: "linear-gradient(90deg, #9E7D48 0%, #C9A96E 40%, #EDD99A 60%, #C9A96E 80%, #9E7D48 100%)" }} />

      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between" style={{ height: 72 }}>

        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0 }}>
          <img src={IMG.logo} alt="แม่บ้านดีดี" style={{ height: 52, width: "auto" }} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          <Link href="/" className="c-nav-link">หน้าแรก</Link>
          <a href={`${BASE}/about_us/`} className="c-nav-link">เกี่ยวกับเรา</a>

          <div className="relative" onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
            <button
              className="c-nav-link"
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 5 }}
            >
              บริการ
              <span style={{ fontSize: 9, color: "#B0A090", display: "inline-block", transition: "transform 0.2s", transform: svcOpen ? "rotate(180deg)" : "none" }}>▾</span>
            </button>
            {svcOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 14px)", left: "50%", transform: "translateX(-50%)",
                background: "#FEFDF9", borderRadius: 16, padding: "8px", minWidth: 220, zIndex: 200,
                border: "1px solid rgba(201,169,110,0.22)",
                boxShadow: "0 16px 56px rgba(26,20,16,0.12), 0 4px 16px rgba(201,169,110,0.10)",
              }}>
                {serviceLinks.map((sl) => (
                  <a key={sl.label} href={sl.href}
                    style={{ display: "block", padding: "10px 16px", color: "#1A1410", textDecoration: "none", fontSize: 14, borderRadius: 10, fontWeight: 500, transition: "background 0.15s, color 0.15s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,169,110,0.08)"; e.currentTarget.style.color = "#9E7D48"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.color = "#1A1410"; }}
                  >
                    {sl.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href={`${BASE}/gallery/`} className="c-nav-link">รูปกิจกรรม</a>
          <a href={`${BASE}/article/`} className="c-nav-link">บทความ</a>
          <a href={`${BASE}/contact_us/`} className="c-nav-link">ติดต่อเรา</a>
        </div>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a href="tel:0618437666" className="btn-gold" style={{ padding: "9px 20px", fontSize: 14 }}>
            📞 061-843-7666
          </a>
          <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer" className="btn-pink" style={{ padding: "9px 20px", fontSize: 14 }}>
            LINE @dede1721
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden"
          style={{ background: "none", border: "1px solid rgba(201,169,110,0.30)", cursor: "pointer", fontSize: 16, color: "#1A1410", padding: "7px 12px", borderRadius: 10, lineHeight: 1 }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Bottom gold border */}
      <div style={{ height: 1, background: "rgba(201,169,110,0.20)" }} />

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden" style={{ background: "#FEFDF9", borderTop: "1px solid rgba(201,169,110,0.15)", padding: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[["หน้าแรก", "/"], ["เกี่ยวกับเรา", `${BASE}/about_us/`], ["รูปกิจกรรม", `${BASE}/gallery/`], ["บทความ", `${BASE}/article/`], ["ติดต่อเรา", `${BASE}/contact_us/`]].map(([l, h]) => (
              <a key={l} href={h} style={{ color: "#1A1410", textDecoration: "none", fontWeight: 500, fontSize: 16 }}>{l}</a>
            ))}
            <div>
              <p style={{ color: "#B0A090", fontSize: 10.5, marginBottom: 10, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase" }}>บริการ</p>
              {serviceLinks.map((sl) => (
                <a key={sl.label} href={sl.href} style={{ display: "block", paddingLeft: 12, paddingBottom: 10, color: "#7A6555", textDecoration: "none", fontSize: 15 }}>{sl.label}</a>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, paddingTop: 4 }}>
              <a href="tel:0618437666" className="btn-gold" style={{ flex: 1, justifyContent: "center", fontSize: 14 }}>📞 โทรเลย</a>
              <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer" className="btn-pink" style={{ flex: 1, justifyContent: "center", fontSize: 14 }}>LINE</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
