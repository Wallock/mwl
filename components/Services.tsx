"use client";

import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01", name: "แม่บ้านทั่วไป", nameEn: "General Maid",
    price: "9,000–12,000", unit: "บาท/เดือน",
    desc: "ทำความสะอาด ซักรีด จัดบ้าน ทำอาหาร ดูแลความเป็นระเบียบในบ้านทุกวัน",
    color: "var(--gold-dark)", bg: "var(--gold-tint)",
  },
  {
    num: "02", name: "พี่เลี้ยงเด็ก", nameEn: "Childcare",
    price: "12,000–15,000", unit: "บาท/เดือน",
    desc: "ดูแลเด็กทารกถึงวัยเรียน มีประสบการณ์พัฒนาการเด็ก ปลอดภัย น่าไว้วางใจ",
    color: "var(--rose)", bg: "var(--rose-subtle)",
  },
  {
    num: "03", name: "ดูแลผู้สูงอายุ", nameEn: "Elderly Care",
    price: "12,000–16,000", unit: "บาท/เดือน",
    desc: "ดูแลผู้สูงอายุและผู้ป่วยพักฟื้น ทักษะสุขอนามัย อดทน ใจเย็น",
    color: "#2D7A5C", bg: "#EAF5EF",
  },
  {
    num: "04", name: "แรงงานทั่วไป", nameEn: "General Labor",
    price: "353–500", unit: "บาท/วัน",
    desc: "แรงงานรับใช้งานทั่วไป รายวันและรายเดือน พร้อมส่งได้เร็ว ทั่วกรุงเทพ",
    color: "#1A5C8A", bg: "#EAF2F8",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-24"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow mb-3 block">บริการของเรา</span>
            <h2
              className="font-display font-black"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--ink)" }}
            >
              เลือกบริการ
              <span className="gradient-text-gold"> ที่ใช่</span>
              <br />
              สำหรับคุณ
            </h2>
          </div>
          <p className="font-body text-sm max-w-xs" style={{ color: "var(--ink-subtle)" }}>
            ราคาที่แสดงเป็นช่วงอ้างอิง ขึ้นอยู่กับรายละเอียดและพื้นที่ให้บริการ
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.num}
              className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 group"
              style={{
                background: "var(--white)",
                border: "1px solid var(--border-light)",
                boxShadow: "0 2px 12px rgba(200,164,90,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = s.color;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px rgba(200,164,90,0.15)`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(200,164,90,0.05)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-black text-lg"
                style={{ background: s.bg, color: s.color }}
              >
                {s.num}
              </div>

              <div>
                <div className="font-body text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--ink-subtle)" }}>
                  {s.nameEn}
                </div>
                <h3 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
                  {s.name}
                </h3>
              </div>

              <div>
                <div className="font-display text-2xl font-bold" style={{ color: s.color }}>
                  {s.price}
                </div>
                <div className="font-body text-xs" style={{ color: "var(--ink-subtle)" }}>
                  {s.unit}
                </div>
              </div>

              <p className="font-body text-sm leading-relaxed flex-1" style={{ color: "var(--ink-muted)" }}>
                {s.desc}
              </p>

              <a
                href="#contact"
                className="link-rose flex items-center gap-2 font-body text-sm font-semibold mt-auto"
              >
                สอบถามราคา <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
