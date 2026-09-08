import { Check } from "lucide-react";

const features = [
  { title: "ตรวจสุขภาพ 5 โรค", desc: "ยาเสพติด, ตับอักเสบ B, วัณโรค, HIV, ซิฟิลิส และตรวจครรภ์ทุกคน" },
  { title: "ตรวจประวัติอาชญากรรม", desc: "ตรวจสอบจากกรมตำรวจทุกราย ก่อนส่งเข้าบ้านลูกค้า" },
  { title: "อบรมก่อนส่งงาน", desc: "มารยาท ความสะอาด ความปลอดภัย และทักษะเฉพาะงาน" },
  { title: "ใบอนุญาตถูกต้อง", desc: "ได้รับใบอนุญาตจากกรมการจัดหางาน ดำเนินงานตามกฎหมาย" },
  { title: "รับประกันคุณภาพ", desc: "ไม่พอใจสามารถเปลี่ยนทดแทนได้ ทีมงานติดตามผลหลังส่งมอบ" },
  { title: "บริการ 56 พื้นที่", desc: "กรุงเทพ ปริมณฑล เชียงใหม่ ภูเก็ต พัทยา และต่างจังหวัด" },
];

export default function WhyUs() {
  return (
    <section
      id="about"
      className="py-20 md:py-24"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="eyebrow mb-3 block">ทำไมต้องเลือกเรา</span>
            <h2
              className="font-display font-black mb-5"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--ink)" }}
            >
              มาตรฐาน
              <br />
              <span className="gradient-text-gold">พิสูจน์ได้จริง</span>
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-8"
              style={{ color: "var(--ink-muted)" }}
            >
              กว่า 20 ปีที่ดำเนินงาน เราพิสูจน์คุณภาพด้วยกระบวนการที่ตรวจสอบได้ทุกขั้นตอน
            </p>

            <div
              className="p-6 rounded-2xl"
              style={{
                background: "var(--gold-tint-deep)",
                border: "1.5px solid var(--border)",
              }}
            >
              <div
                className="font-display font-black text-5xl mb-1"
                style={{ color: "var(--gold-dark)" }}
              >
                95,000+
              </div>
              <div className="font-body text-sm" style={{ color: "var(--ink-muted)" }}>
                รีวิวจากลูกค้าจริง · คะแนนเฉลี่ย 4.9/5.0
              </div>
              <div className="font-body text-xs mt-2" style={{ color: "var(--ink-subtle)" }}>
                ตัวเลขจากรีวิวที่ได้รับจริง ไม่ใช่ตัวเลขโฆษณา
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-2">
            {features.map((f) => (
              <div key={f.title} className="feature-row">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "var(--gold-tint-deep)", color: "var(--gold-dark)" }}
                >
                  <Check size={15} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-display font-bold text-base mb-1" style={{ color: "var(--ink)" }}>
                    {f.title}
                  </div>
                  <div className="font-body text-xs leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
