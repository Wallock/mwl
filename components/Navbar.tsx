"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, MessageCircle } from "lucide-react";

const links = [
  { label: "โปรไฟล์แม่บ้าน", href: "#profiles" },
  { label: "บริการของเรา", href: "#services" },
  { label: "วิธีใช้บริการ", href: "#how-it-works" },
  { label: "คำถามที่พบบ่อย", href: "#faq" },
  { label: "ติดต่อเรา", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          padding: scrolled ? "10px 0" : "14px 0",
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border-light)",
          boxShadow: scrolled ? "0 2px 20px rgba(200,164,90,0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-black text-sm text-white"
              style={{ background: "linear-gradient(135deg, var(--gold), var(--rose))" }}
            >
              DD
            </div>
            <div>
              <div className="font-display text-base font-bold leading-none" style={{ color: "var(--ink)" }}>
                แม่บ้านดีดี
              </div>
              <div className="font-body text-[9px] tracking-[0.18em] uppercase" style={{ color: "var(--gold-dark)" }}>
                DEDE SERVICE
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://line.me/ti/p/~@dede1721"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-xs font-semibold transition-all duration-200"
              style={{
                background: "rgba(5,148,68,0.08)",
                border: "1px solid rgba(5,148,68,0.2)",
                color: "#059444",
              }}
            >
              <MessageCircle size={13} />
              LINE
            </a>
            <a href="tel:0618437666" className="btn-gold py-2 px-5 text-sm">
              <Phone size={13} />
              โทรเลย
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: "var(--ink)" }}
            onClick={() => setOpen(!open)}
            aria-label="เมนู"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 top-0 z-40 lg:hidden flex flex-col pt-20"
          style={{ background: "var(--white)" }}
        >
          <div className="px-6 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-2xl font-bold py-4 border-b"
                style={{ color: "var(--ink)", borderColor: "var(--border-light)" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a href="tel:0618437666" className="btn-gold justify-center">
                <Phone size={16} /> โทร 0618-437-666
              </a>
              <a
                href="https://line.me/ti/p/~@dede1721"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold justify-center"
              >
                <MessageCircle size={16} /> LINE @dede1721
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
