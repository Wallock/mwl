import { Phone, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";

const points = [
  "ตรวจสุขภาพ 5 โรค + ตรวจประวัติอาชญากรรมทุกคน",
  "มีใบอนุญาตจัดหางานถูกต้องตามกฎหมาย",
  "รับประกันคุณภาพ เปลี่ยนทดแทนได้หากไม่พอใจ",
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--white)" }}
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 100% 0%, #FBF5E6 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FBF5E6 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="absolute top-24 right-24 w-64 h-64 rounded-full pointer-events-none hidden lg:block"
        style={{
          background: "linear-gradient(135deg, rgba(200,164,90,0.12) 0%, rgba(200,64,96,0.06) 100%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 font-body text-xs font-bold"
              style={{
                background: "var(--gold-tint-deep)",
                color: "var(--gold-dark)",
                border: "1px solid var(--border)",
              }}
            >
              ✦ ดำเนินงานมากกว่า 20 ปี · ใบอนุญาตถูกต้อง
            </div>

            <h1
              className="font-display font-black mb-6"
              style={{
                fontSize: "clamp(42px, 6vw, 80px)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "var(--ink)",
              }}
            >
              จัดหา
              <span className="gradient-text-gold"> แม่บ้าน</span>
              <br />
              พี่เลี้ยงเด็ก
              <br />
              <span style={{ color: "var(--ink-muted)", fontStyle: "italic" }}>
                ดูแลผู้สูงอายุ
              </span>
            </h1>

            <div className="flex flex-col gap-3 mb-8">
              {points.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle
                    size={17}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "var(--gold)" }}
                  />
                  <span className="font-body text-base" style={{ color: "var(--ink-muted)" }}>
                    {p}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href="tel:0618437666" className="btn-gold">
                <Phone size={16} />
                โทรปรึกษาฟรี
              </a>
              <a
                href="https://line.me/ti/p/~@dede1721"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body font-semibold text-base transition-all duration-200"
                style={{
                  background: "rgba(5,148,68,0.08)",
                  border: "1.5px solid rgba(5,148,68,0.25)",
                  color: "#059444",
                }}
              >
                <MessageCircle size={16} />
                LINE @dede1721
              </a>
            </div>

            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-7"
              style={{ borderTop: "1px solid var(--border-light)" }}
            >
              {[
                { n: "95,000+", sub: "รีวิว" },
                { n: "20+ ปี", sub: "ประสบการณ์" },
                { n: "56 พื้นที่", sub: "ทั่วไทย" },
                { n: "4.9★", sub: "คะแนนเฉลี่ย" },
              ].map((s) => (
                <div key={s.sub}>
                  <div
                    className="font-display font-black text-2xl"
                    style={{ color: "var(--gold-dark)" }}
                  >
                    {s.n}
                  </div>
                  <div className="font-body text-sm" style={{ color: "var(--ink-subtle)" }}>
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--gold-tint)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="font-body text-xs mb-4 font-bold tracking-widest uppercase"
                style={{ color: "var(--gold-dark)" }}
              >
                ขั้นตอนการใช้บริการ
              </div>
              {[
                { step: "1", text: "โทรหาเราหรือแชท LINE แจ้งความต้องการ" },
                { step: "2", text: "ทีมงานคัดสรรและส่งโปรไฟล์ให้เลือก" },
                { step: "3", text: "นัดสัมภาษณ์ และรับแม่บ้านเข้างาน" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3 mt-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 text-white"
                    style={{ background: "var(--gold)" }}
                  >
                    {item.step}
                  </div>
                  <span className="font-body text-sm" style={{ color: "var(--ink-muted)" }}>
                    {item.text}
                  </span>
                </div>
              ))}
              <div
                className="mt-5 pt-4"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <a
                  href="#profiles"
                  className="flex items-center gap-2 font-body text-sm font-semibold"
                  style={{ color: "var(--rose)" }}
                >
                  ดูโปรไฟล์แม่บ้านพร้อมส่ง
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl p-5 text-center"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border-light)",
                  boxShadow: "0 4px 20px rgba(200,164,90,0.08)",
                }}
              >
                <div
                  className="font-display font-black text-3xl mb-1"
                  style={{ color: "var(--gold-dark)" }}
                >
                  95K+
                </div>
                <div className="font-body text-xs" style={{ color: "var(--ink-subtle)" }}>
                  รีวิวจากลูกค้า
                </div>
              </div>
              <div
                className="rounded-2xl p-5 text-center"
                style={{
                  background: "var(--gold)",
                  boxShadow: "0 4px 20px rgba(200,164,90,0.35)",
                }}
              >
                <div className="font-display font-black text-3xl mb-1 text-white">
                  4.9
                </div>
                <div className="font-body text-xs text-white opacity-80">
                  คะแนนเฉลี่ย
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
