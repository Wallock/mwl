"use client";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { IMG } from "@/lib/images";
import { MapPin, Clock } from "lucide-react";
import { useT } from "@/context/LanguageContext";

export default function ContactPageContent() {
  const t = useT();
  const p = t.contactPage;

  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #F5E6BE 0%, #EDD49E 40%, #F0DDB8 70%, #F8EDD3 100%)" }}>
        <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-30" />
        <div data-blob
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full z-0"
          style={{ background: "radial-gradient(circle, rgba(201,169,110,0.30) 0%, transparent 70%)", filter: "blur(100px)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">
          <Reveal>
            <span className="sec-badge mb-4">{p.badge}</span>
            <h1 className="font-black text-ink mt-4 mb-4" style={{ fontSize: "clamp(36px,5vw,60px)" }}>
              {p.title}{" "}
              <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                {p.titleHighlight}
              </span>
            </h1>
            <p className="text-ink-muted text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              {p.desc}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact cards */}
      <section className="relative bg-white overflow-hidden py-12 lg:py-16">
        <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-50" />
        <div data-blob
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full z-0"
          style={{ background: "radial-gradient(ellipse, rgba(201,169,110,0.16) 0%, transparent 70%)", filter: "blur(120px)" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-5">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mb-12">

            {/* Phone */}
            <Reveal delay={0}>
              <a href="tel:0618437666"
                className="group flex flex-col items-center text-center gap-4 bg-[#FBF8F2] border border-[#EDE8DF] rounded-2xl px-7 py-9 shadow-[0_4px_24px_rgba(100,60,0,0.06)] hover:shadow-[0_12px_36px_rgba(100,60,0,0.13)] hover:-translate-y-1 hover:border-[#C9A96E]/50 transition-all duration-300 overflow-hidden"
                style={{ textDecoration: "none" }}>
                <div className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.12) 0%, transparent 65%)" }} />
                <div className="relative">
                  <span className="absolute -inset-2 rounded-full animate-ping"
                    style={{ background: "rgba(201,169,110,0.20)", animationDuration: "2.4s" }} />
                  <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ background: "linear-gradient(135deg,#C9A96E 0%,#9E7D48 100%)" }}>
                    <Image src="/icon/calling-icon.svg" alt="โทร" width={28} height={28} style={{ filter: "brightness(0) invert(1)", width: 28, height: 28 }} />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-1" style={{ color: "#9E7D48" }}>{p.phoneBadge}</p>
                  <p className="font-black text-ink leading-none mb-1" style={{ fontSize: "clamp(20px,3vw,28px)" }}>061-843-7666</p>
                  <p className="text-ink-muted text-xs font-medium">{p.phoneHours}</p>
                </div>
              </a>
            </Reveal>

            {/* LINE */}
            <Reveal delay={100}>
              <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer"
                className="group flex flex-col items-center text-center gap-4 bg-[#FBF8F2] border border-[#EDE8DF] rounded-2xl px-7 py-9 shadow-[0_4px_24px_rgba(100,60,0,0.06)] hover:shadow-[0_12px_36px_rgba(180,50,80,0.13)] hover:-translate-y-1 hover:border-[#D4576E]/40 transition-all duration-300 overflow-hidden relative"
                style={{ textDecoration: "none" }}>
                <div className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,87,110,0.10) 0%, transparent 65%)" }} />
                <div className="relative">
                  <span className="absolute -inset-2 rounded-full animate-ping"
                    style={{ background: "rgba(212,87,110,0.18)", animationDuration: "2.4s", animationDelay: "0.8s" }} />
                  <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ background: "linear-gradient(135deg,#D4576E 0%,#B03255 100%)" }}>
                    <Image src="/icon/line-icon.svg" alt="LINE" width={28} height={28} style={{ width: 28, height: 28 }} />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-1" style={{ color: "#B03255" }}>{p.lineBadge}</p>
                  <p className="font-black text-ink leading-none mb-1" style={{ fontSize: "clamp(20px,3vw,28px)" }}>@dede1721</p>
                  <p className="text-ink-muted text-xs font-medium">{p.lineHours}</p>
                </div>
              </a>
            </Reveal>

            {/* Address */}
            <Reveal delay={200}>
              <div className="flex flex-col items-center text-center gap-4 bg-[#FBF8F2] border border-[#EDE8DF] rounded-2xl px-7 py-9 shadow-[0_4px_24px_rgba(100,60,0,0.06)]">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                  style={{ background: "linear-gradient(135deg,#C9A96E 0%,#9E7D48 100%)" }}>
                  <MapPin size={26} color="#fff" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-1" style={{ color: "#9E7D48" }}>{p.addressBadge}</p>
                  <p className="font-bold text-ink text-sm leading-relaxed">
                    หจก.จัดหางานแม่บ้านดีดี เซอร์วิส<br />
                    206, 208 ถ.เจริญสนิทวงศ์ 82<br />
                    แขวงบางอ้อ เขตบางพลัด<br />
                    กรุงเทพมหานคร 10700
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

          {/* LINE QR + Hours */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">

            <Reveal delay={100}>
              <div className="bg-[#FBF8F2] border border-[#EDE8DF] rounded-2xl p-6 flex flex-col items-center text-center gap-4">
                <p className="text-[10px] font-black tracking-[0.16em] uppercase text-gold-dark">{p.hoursBadge}</p>
                <div className="inline-block bg-white p-3 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
                  <Image
                    src={IMG.lineQr}
                    alt="LINE QR @dede1721"
                    width={120}
                    height={120}
                    style={{ width: 120, height: "auto", display: "block", borderRadius: 8 }}
                  />
                </div>
                <p className="text-ink font-bold">@dede1721</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-[#FBF8F2] border border-[#EDE8DF] rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#C9A96E 0%,#9E7D48 100%)" }}>
                    <Clock size={16} color="#fff" strokeWidth={2} />
                  </div>
                  <p className="text-[10px] font-black tracking-[0.16em] uppercase text-gold-dark">{p.hoursLabel}</p>
                </div>
                {p.hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center border-b border-gold/10 pb-2 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-ink">{day}</span>
                    <span className="text-sm font-bold text-gold-dark">{time}</span>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative bg-[#FBF8F2] py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-5">
          <Reveal className="text-center mb-8">
            <span className="sec-badge">{p.mapBadge}</span>
            <h2 className="font-black text-ink mt-3" style={{ fontSize: "clamp(24px,3vw,36px)" }}>
              {p.mapTitle}{" "}
              <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">{p.mapHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl overflow-hidden border border-[#EDE8DF] shadow-[0_8px_36px_rgba(100,60,0,0.10)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.0!2d100.4800!3d13.8000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299e0a3534bcb%3A0xce04c449494df71c!2z4Lir4Li04LiZ4LiB4Lij4LiT4Liw4LiB4LixLeKAmOZgm!5e0!3m2!1sth!2sth!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ที่ตั้งสำนักงานแม่บ้านดีดี"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
