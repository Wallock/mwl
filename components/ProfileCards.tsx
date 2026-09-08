"use client";

import { Phone, MapPin, ArrowRight } from "lucide-react";

const profiles = [
  {
    id: "PB153", name: "สมหญิง ท.", age: 36,
    service: "แม่บ้านทั่วไป", serviceColor: "#8A6C2A",
    serviceBg: "#FBF5E6",
    location: "กรุงเทพฯ", salary: "10,000–12,000",
    exp: "5 ปี", available: true,
    initials: "สห",
    avatarBg: "linear-gradient(135deg,#C8A45A,#8A6C2A)",
  },
  {
    id: "NY054", name: "กัลยา ส.", age: 29,
    service: "พี่เลี้ยงเด็ก", serviceColor: "#A82E4E",
    serviceBg: "#FCEEF2",
    location: "นนทบุรี", salary: "12,000–15,000",
    exp: "3 ปี", available: true,
    initials: "กส",
    avatarBg: "linear-gradient(135deg,#C84060,#A82E4E)",
  },
  {
    id: "EL023", name: "วิไล ม.", age: 44,
    service: "ดูแลผู้สูงอายุ", serviceColor: "#2D7A5C",
    serviceBg: "#EAF5EF",
    location: "สมุทรปราการ", salary: "13,000–16,000",
    exp: "8 ปี", available: true,
    initials: "วม",
    avatarBg: "linear-gradient(135deg,#3D9A6C,#2D7A5C)",
  },
  {
    id: "PB201", name: "นิตยา จ.", age: 38,
    service: "แม่บ้านทั่วไป", serviceColor: "#8A6C2A",
    serviceBg: "#FBF5E6",
    location: "ปทุมธานี", salary: "9,000–11,000",
    exp: "6 ปี", available: true,
    initials: "นจ",
    avatarBg: "linear-gradient(135deg,#D4B068,#C8A45A)",
  },
  {
    id: "NY089", name: "จันทร์ ร.", age: 31,
    service: "พี่เลี้ยงเด็ก", serviceColor: "#A82E4E",
    serviceBg: "#FCEEF2",
    location: "กรุงเทพฯ", salary: "12,000–14,000",
    exp: "4 ปี", available: false,
    initials: "จร",
    avatarBg: "linear-gradient(135deg,#E07090,#C84060)",
  },
  {
    id: "PB178", name: "มาลี อ.", age: 42,
    service: "แม่บ้านทั่วไป", serviceColor: "#8A6C2A",
    serviceBg: "#FBF5E6",
    location: "กรุงเทพฯ", salary: "10,000–12,000",
    exp: "10 ปี", available: true,
    initials: "มอ",
    avatarBg: "linear-gradient(135deg,#8A6C2A,#C8A45A)",
  },
  {
    id: "EL041", name: "สุนีย์ ป.", age: 50,
    service: "ดูแลผู้สูงอายุ", serviceColor: "#2D7A5C",
    serviceBg: "#EAF5EF",
    location: "เชียงใหม่", salary: "12,000–15,000",
    exp: "12 ปี", available: true,
    initials: "สป",
    avatarBg: "linear-gradient(135deg,#2D7A5C,#3D9A6C)",
  },
  {
    id: "PB220", name: "รัตนา ช.", age: 33,
    service: "แม่บ้านทั่วไป", serviceColor: "#8A6C2A",
    serviceBg: "#FBF5E6",
    location: "ภูเก็ต", salary: "10,000–13,000",
    exp: "4 ปี", available: true,
    initials: "รช",
    avatarBg: "linear-gradient(135deg,#C8A45A,#C84060)",
  },
];

export default function ProfileCards() {
  return (
    <section
      id="profiles"
      className="py-16 md:py-20"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow mb-3 block">แม่บ้านพร้อมส่ง</span>
            <h2
              className="font-display font-black"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--ink)" }}
            >
              เลือกดูโปรไฟล์
              <span className="gradient-text-gold"> แม่บ้านของเรา</span>
            </h2>
            <p className="font-body text-sm mt-2" style={{ color: "var(--ink-subtle)" }}>
              ทุกโปรไฟล์ผ่านการตรวจสุขภาพและประวัติอาชญากรรมแล้ว
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold flex-shrink-0"
            style={{ color: "var(--rose)" }}
          >
            สอบถามทั้งหมด <ArrowRight size={14} />
          </a>
        </div>

        <div
          className="flex gap-4 overflow-x-auto pb-3 -mx-6 px-6 md:grid md:grid-cols-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {profiles.map((p) => (
            <div
              key={p.id}
              className="flex-shrink-0 w-[200px] md:w-auto rounded-2xl overflow-hidden transition-all duration-250"
              style={{
                scrollSnapAlign: "start",
                background: "var(--white)",
                border: "1px solid var(--border-light)",
                boxShadow: "0 2px 12px rgba(200,164,90,0.06)",
              }}
            >
              <div
                className="h-28 flex items-center justify-center relative"
                style={{ background: p.avatarBg }}
              >
                <span className="font-display font-black text-4xl text-white select-none" style={{ opacity: 0.9 }}>
                  {p.initials}
                </span>
                <div className="absolute top-2.5 left-2.5">
                  <span
                    className="font-body text-[10px] font-bold px-1.5 py-0.5 rounded"
                    style={{ background: "rgba(255,255,255,0.25)", color: "white", backdropFilter: "blur(4px)" }}
                  >
                    {p.id}
                  </span>
                </div>
                <div className="absolute top-2.5 right-2.5">
                  <span
                    className="font-body text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: p.available ? "#059444" : "rgba(120,96,80,0.7)",
                      color: "white",
                    }}
                  >
                    {p.available ? "พร้อมส่ง" : "ไม่ว่าง"}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2.5">
                <div>
                  <div className="font-display font-bold text-base" style={{ color: "var(--ink)" }}>
                    {p.name}
                  </div>
                  <div className="font-body text-xs" style={{ color: "var(--ink-subtle)" }}>
                    อายุ {p.age} ปี · ประสบการณ์ {p.exp}
                  </div>
                </div>

                <span
                  className="self-start font-body text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                  style={{
                    background: p.serviceBg,
                    color: p.serviceColor,
                    border: `1px solid ${p.serviceColor}30`,
                  }}
                >
                  {p.service}
                </span>

                <div className="flex items-center gap-1.5 font-body text-xs" style={{ color: "var(--ink-muted)" }}>
                  <MapPin size={11} style={{ color: "var(--gold)" }} />
                  {p.location}
                </div>

                <div className="pt-2.5" style={{ borderTop: "1px solid var(--border-light)" }}>
                  <div className="font-body text-[10px]" style={{ color: "var(--ink-subtle)" }}>เงินเดือน</div>
                  <div className="font-display font-bold text-base" style={{ color: "var(--gold-dark)" }}>
                    {p.salary}
                    <span className="font-body text-[10px] font-normal ml-1" style={{ color: "var(--ink-subtle)" }}>
                      บาท/เดือน
                    </span>
                  </div>
                </div>

                <a
                  href="tel:0618437666"
                  className="mt-1 w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-body text-xs font-semibold transition-all duration-200 text-white"
                  style={{
                    background: p.available ? "var(--gold)" : "var(--border)",
                    color: p.available ? "white" : "var(--ink-subtle)",
                  }}
                >
                  <Phone size={11} />
                  {p.available ? "สอบถาม" : "ไม่ว่าง"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 font-body text-xs text-center" style={{ color: "var(--ink-subtle)" }}>
          ← ปัดซ้ายขวาเพื่อดูเพิ่มเติม (บนมือถือ)
        </p>
      </div>
    </section>
  );
}
