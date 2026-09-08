import { Phone, MessageCircle, ArrowRight, MapPin } from "lucide-react";

export default function CTABand() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--gold-tint-deep) 0%, var(--gold-tint) 100%)",
        borderTop: "1.5px solid var(--border)",
      }}
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 100% 50%, rgba(200,164,90,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow mb-3 block">ติดต่อเรา</span>
            <h2
              className="font-display font-black mb-4"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--ink)" }}
            >
              เริ่มต้น
              <br />
              <span className="gradient-text-gold">วันนี้เลย</span>
            </h2>
            <p className="font-body text-base leading-relaxed mb-5" style={{ color: "var(--ink-muted)" }}>
              ปรึกษาฟรี ไม่มีข้อผูกมัด ทีมงานพร้อมตอบทุกวัน 08:00–20:00 น.
            </p>
            <div className="flex items-center gap-2 font-body text-sm" style={{ color: "var(--ink-muted)" }}>
              <MapPin size={14} style={{ color: "var(--gold)" }} />
              206, 208 ถ.เจริญสนิทวงศ์ 82 แขวงบางอ้อ เขตบางพลัด กรุงเทพฯ 10700
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="tel:0618437666"
              className="flex items-center gap-4 p-5 rounded-2xl group transition-all duration-200"
              style={{
                background: "var(--white)",
                border: "1.5px solid var(--border)",
                boxShadow: "0 4px 20px rgba(200,164,90,0.1)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--gold)", color: "white" }}
              >
                <Phone size={20} />
              </div>
              <div className="flex-1">
                <div className="font-body text-xs mb-0.5" style={{ color: "var(--ink-subtle)" }}>
                  โทรศัพท์ (08:00–20:00 ทุกวัน)
                </div>
                <div className="font-display text-2xl font-bold" style={{ color: "var(--ink)" }}>
                  0618 437 666
                </div>
              </div>
              <ArrowRight size={18} style={{ color: "var(--gold)" }} className="opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://line.me/ti/p/~@dede1721"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl group transition-all duration-200"
              style={{
                background: "var(--white)",
                border: "1.5px solid var(--border)",
                boxShadow: "0 4px 20px rgba(200,164,90,0.1)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#06C755" }}
              >
                <MessageCircle size={20} color="white" />
              </div>
              <div className="flex-1">
                <div className="font-body text-xs mb-0.5" style={{ color: "var(--ink-subtle)" }}>
                  LINE Official Account
                </div>
                <div className="font-display text-2xl font-bold" style={{ color: "var(--ink)" }}>
                  @dede1721
                </div>
              </div>
              <ArrowRight size={18} style={{ color: "#06C755" }} className="opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>

            <div
              className="p-4 rounded-xl text-center font-body text-sm"
              style={{
                background: "rgba(200,164,90,0.08)",
                border: "1px solid var(--border-light)",
                color: "var(--ink-muted)",
              }}
            >
              ไม่มีค่าใช้จ่ายในการสอบถาม · ตอบไวภายใน 1 ชั่วโมง
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
