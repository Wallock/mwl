"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMG } from "@/lib/images";
import { useT } from "@/context/LanguageContext";

export default function CloneNavbar() {
  const T = useT();
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const svcTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const serviceLinks = [
    { label: T.nav.serviceMaid,  href: "/services/maid" },
    { label: T.nav.serviceNanny, href: "/services/nanny" },
    { label: T.nav.serviceElder, href: "/services/elder" },
    { label: T.nav.serviceLabor, href: "/services/labor" },
  ];

  const onSvcEnter = () => {
    if (svcTimer.current) clearTimeout(svcTimer.current);
    setSvcOpen(true);
  };
  const onSvcLeave = () => {
    svcTimer.current = setTimeout(() => setSvcOpen(false), 150);
  };

  return (
    <>
    <div aria-hidden="true" style={{ height: 0, overflow: "hidden" }} />
    <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
    <nav>

      {/* ── Header bar (gold bg) ── */}
      <div style={{
        background: "linear-gradient(135deg, #F5E6BE 0%, #EDD49E 40%, #F0DDB8 70%, #F8EDD3 100%)",
        position: "relative",
      }}>
        {/* Top gold stripe */}
        <div style={{ height: 2, background: "linear-gradient(90deg, #9E7D48 0%, #C9A96E 40%, #EDD99A 60%, #C9A96E 80%, #9E7D48 100%)" }} />

        {/* Content row */}
        <div className="relative max-w-7xl mx-auto px-5 flex items-center justify-center lg:justify-between" style={{ height: 72 }}>

          {/* Logo */}
          <Link href="/" className="logo-shine-wrap" style={{
            flexShrink: 0, display: "flex", alignItems: "center", gap: 10,
            textDecoration: "none",
            background: "linear-gradient(135deg, #fff8e8 0%, #fff3d4 50%, #fff8e8 100%)",
            border: "1.5px solid rgba(201,169,110,0.55)",
            borderRadius: 14,
            padding: "6px 14px 6px 8px",
            boxShadow: "0 2px 12px rgba(201,169,110,0.25), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}>
            <Image src={IMG.logo} alt="โลโก้แม่บ้านดีดี" width={0} height={0} sizes="160px" style={{ height: "46px", width: "auto" }} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25, fontFamily: '"Anuphan", sans-serif' }}>
              <span style={{ fontWeight: 700, fontSize: 18, color: "#1A1410" }}>แม่บ้านดีดีเซอร์วิส</span>
              <span style={{ fontWeight: 300, fontSize: 12, color: "#9E7D48" }}>ผู้ให้บริการจัดส่งแม่บ้านลำดับ 1</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            <Link href="/" className="c-nav-link">{T.nav.home}</Link>
            <Link href="/about" className="c-nav-link">{T.nav.about}</Link>

            <div className="relative" onMouseEnter={onSvcEnter} onMouseLeave={onSvcLeave}>
              <button
                className="c-nav-link"
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 5 }}
              >
                {T.nav.services}
                <span style={{ fontSize: 9, color: "#B0A090", display: "inline-block", transition: "transform 0.2s", transform: svcOpen ? "rotate(180deg)" : "none" }}>▾</span>
              </button>
              {svcOpen && (
                <div
                  onMouseEnter={onSvcEnter}
                  onMouseLeave={onSvcLeave}
                  style={{
                    position: "absolute", top: "calc(100% + 4px)", left: "50%", transform: "translateX(-50%)",
                    background: "#FEFDF9", borderRadius: 16, padding: "8px", minWidth: 220, zIndex: 200,
                    border: "1px solid rgba(201,169,110,0.22)",
                    boxShadow: "0 16px 56px rgba(26,20,16,0.12), 0 4px 16px rgba(201,169,110,0.10)",
                  }}>
                  {serviceLinks.map((sl) => (
                    <a key={sl.href} href={sl.href}
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

            <Link href="/gallery" className="c-nav-link">{T.nav.gallery}</Link>
            <Link href="/articles" className="c-nav-link">{T.nav.articles}</Link>
            <Link href="/contact" className="c-nav-link">{T.nav.contact}</Link>
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
              {/* Phone — split button */}
              <a href="tel:0618437666" style={{
                flex: 1, display: "flex", alignItems: "stretch",
                borderRadius: 14, overflow: "hidden", textDecoration: "none",
                boxShadow: "0 4px 16px rgba(243,0,60,0.35)",width: 170,
              }}>
                <div style={{
                  background: "#C4006A",
                  padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Image src="/icon/calling-icon.svg" alt="โทร" width={28} height={28} style={{ filter: "brightness(0) invert(1)", width: 28, height: 28 }} />
                </div>
                <div style={{
                  flex: 1, background: "linear-gradient(180deg, #FF00CB 0%, #F3003C 100%)",
                  color: "#fff", padding: "10px 10px",
                  display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center",
                  fontWeight: 700, fontSize: 13, lineHeight: 1.3,
                }}>
                  <span>{T.nav.callButton}</span>
                  <span style={{ fontSize: 11, opacity: 0.9 }}>061-843-7666</span>
                </div>
              </a>

              {/* LINE — split button */}
              <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer" style={{
                flex: 1, display: "flex", alignItems: "stretch",
                borderRadius: 14, overflow: "hidden", textDecoration: "none",
                boxShadow: "0 4px 16px rgba(6,109,0,0.35)",width: 170,
              }}>
                <div style={{
                  background: "#04520A",
                  padding: "12px 14px", display: "flex", alignItems: "start", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Image src="/icon/line-icon.svg" alt="LINE" width={28} height={28} style={{ width: 28, height: 28 }} />
                </div>
                <div style={{
                  flex: 1, background: "linear-gradient(180deg, #3EB600 0%, #066D00 100%)",
                  color: "#fff", padding: "10px 10px",
                  display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center",
                  fontWeight: 700, fontSize: 13, lineHeight: 1.3,
                }}>
                  <span>{T.nav.lineButton}</span>
                  <span style={{ fontSize: 11, opacity: 0.9 }}>@dede1721</span>
                </div>
              </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden absolute right-5"
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            style={{ background: "none", border: "1px solid rgba(201,169,110,0.30)", cursor: "pointer", fontSize: 16, color: "#1A1410", padding: "7px 12px", borderRadius: 10, lineHeight: 1 }}>
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Bottom gold border */}
        <div style={{ height: 1, background: "rgba(158,125,72,0.40)" }} />

      </div>{/* end header bar */}

      {/* Mobile menu — outside gold div, corners truly transparent */}
      {open && (
        <div className="lg:hidden menu-slide-down" style={{
          position: "absolute", left: 12, right: 12, top: 79,
            background: "linear-gradient(160deg, #FEFAF0 0%, #F8EDD3 50%, #F3E5C4 100%)",
            borderRadius: 20,
            border: "1.5px solid rgba(201,169,110,0.50)",
            zIndex: 99,
          }}>
            {/* Main links */}
            <div style={{ padding: "8px 16px" }}>
              {[
                [T.nav.home, "/"],
                [T.nav.about, "/about"],
                [T.nav.gallery, "/gallery"],
                [T.nav.articles, "/articles"],
                [T.nav.contact, "/contact"],
              ].map(([l, h]) => (
                <a key={h} href={h} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "12px 4px", color: "#1A1410", textDecoration: "none",
                  fontWeight: 600, fontSize: 15,
                  borderBottom: "1px solid rgba(201,169,110,0.15)",
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "linear-gradient(135deg,#C9A96E,#9E7D48)", flexShrink: 0 }} />
                  {l}
                </a>
              ))}
            </div>

            {/* Services grid */}
            <div style={{ margin: "4px 16px 0", padding: "12px 16px", background: "rgba(201,169,110,0.10)", borderRadius: 12, border: "1px solid rgba(201,169,110,0.20)" }}>
              <p style={{ color: "#9E7D48", fontSize: 10, marginBottom: 8, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{T.nav.servicesLabel}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                {serviceLinks.map((sl) => (
                  <a key={sl.href} href={sl.href} style={{
                    display: "block", padding: "8px 10px",
                    background: "rgba(255,255,255,0.70)", borderRadius: 8,
                    border: "1px solid rgba(201,169,110,0.22)",
                    color: "#7A5C28", textDecoration: "none", fontSize: 13, fontWeight: 500,
                  }}>
                    {sl.label}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 10, padding: "14px 16px 18px" }}>

              {/* Phone — split button */}
              <a href="tel:0618437666" style={{
                flex: 1, display: "flex", alignItems: "stretch",
                borderRadius: 14, overflow: "hidden", textDecoration: "none",
                boxShadow: "0 4px 16px rgba(243,0,60,0.35)",
              }}>
                <div style={{
                  background: "#C4006A",
                  padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Image src="/icon/calling-icon.svg" alt="โทร" width={28} height={28} style={{ filter: "brightness(0) invert(1)", width: 28, height: 28 }} />
                </div>
                <div style={{
                  flex: 1, background: "linear-gradient(180deg, #FF00CB 0%, #F3003C 100%)",
                  color: "#fff", padding: "10px 10px",
                  display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center",
                  fontWeight: 700, fontSize: 13, lineHeight: 1.3,
                }}>
                  <span>{T.nav.callButton}</span>
                  <span style={{ fontSize: 11, opacity: 0.9 }}>061-843-7666</span>
                </div>
              </a>

              {/* LINE — split button */}
              <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer" style={{
                flex: 1, display: "flex", alignItems: "stretch",
                borderRadius: 14, overflow: "hidden", textDecoration: "none",
                boxShadow: "0 4px 16px rgba(6,109,0,0.35)",
              }}>
                <div style={{
                  background: "#04520A",
                  padding: "12px 14px", display: "flex", alignItems: "start", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Image src="/icon/line-icon.svg" alt="LINE" width={28} height={28} style={{ width: 28, height: 28 }} />
                </div>
                <div style={{
                  flex: 1, background: "linear-gradient(180deg, #3EB600 0%, #066D00 100%)",
                  color: "#fff", padding: "10px 10px",
                  display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center",
                  fontWeight: 700, fontSize: 13, lineHeight: 1.3,
                }}>
                  <span>{T.nav.lineButton}</span>
                  <span style={{ fontSize: 11, opacity: 0.9 }}>@dede1721</span>
                </div>
              </a>

            </div>
          </div>
        )}

    </nav>
    </div>
    </>
  );
}
