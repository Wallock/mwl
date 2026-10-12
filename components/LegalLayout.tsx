"use client";
import Link from "next/link";
import CloneNavbar from "./CloneNavbar";
import { ChevronRight } from "lucide-react";

interface Section {
  title: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  updatedAt: string;
  sections: Section[];
}

export default function LegalLayout({ badge, title, subtitle, updatedAt, sections }: LegalLayoutProps) {
  return (
    <>
      <CloneNavbar />
      <main
        className="min-h-screen"
        style={{ background: "linear-gradient(160deg, #FBF8F2 0%, #F5EFE3 60%, #FBF8F2 100%)" }}
      >
        {/* Hero */}
        <div className="pt-16 pb-10 px-4 text-center" style={{ borderBottom: "1px solid rgba(201,169,110,0.14)" }}>
          <div
            className="inline-block text-[11px] font-black tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(201,169,110,0.14)", color: "#7A5C28" }}
          >
            {badge}
          </div>
          <h1 className="font-black text-ink mb-2" style={{ fontSize: "clamp(24px,4vw,36px)" }}>{title}</h1>
          <p className="text-[14px]" style={{ color: "#9E7D48" }}>{subtitle}</p>
          <p className="text-[12px] mt-1" style={{ color: "#B0A090" }}>อัปเดตล่าสุด: {updatedAt}</p>
        </div>

        {/* Breadcrumb */}
        <div className="max-w-3xl mx-auto px-4 pt-6 pb-2">
          <div className="flex items-center gap-1.5 text-[12px]" style={{ color: "#B0A090" }}>
            <Link href="/" style={{ color: "#9E7D48" }}>หน้าหลัก</Link>
            <ChevronRight size={12} />
            <span>{title}</span>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 py-8 pb-20">
          <div
            className="bg-white rounded-3xl px-7 py-8 lg:px-10 lg:py-10 space-y-8"
            style={{ boxShadow: "0 4px 32px rgba(100,60,0,0.07)" }}
          >
            {sections.map((s, i) => (
              <section key={i}>
                <h2
                  className="font-black mb-3 pb-2"
                  style={{
                    fontSize: "clamp(15px,2vw,18px)",
                    color: "#1A1410",
                    borderBottom: "2px solid rgba(201,169,110,0.20)",
                  }}
                >
                  {i + 1}. {s.title}
                </h2>
                <div className="text-[14px] leading-[1.85] space-y-2" style={{ color: "#3A2A1A" }}>
                  {s.content}
                </div>
              </section>
            ))}

            {/* Contact box */}
            <div
              className="rounded-2xl px-6 py-5 mt-4"
              style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.25)" }}
            >
              <p className="font-bold text-[13px] mb-1" style={{ color: "#7A5C28" }}>ติดต่อสอบถาม</p>
              <p className="text-[13px]" style={{ color: "#5A4A3A" }}>
                หจก.จัดหางานแม่บ้านดีดี เซอร์วิส<br />
                LINE: <a href="https://line.me/ti/p/~@dede1721" style={{ color: "#9E7D48" }}>@dede1721</a>
                {" · "}Email: <a href="mailto:ddservices@maidwonderland.com" style={{ color: "#9E7D48" }}>ddservices@maidwonderland.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
