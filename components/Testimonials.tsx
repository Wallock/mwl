import { Star, Quote } from "lucide-react";

const featured = {
  name: "คุณณัฐพร วงศ์สุวรรณ",
  role: "ลูกค้าประจำ สุขุมวิท 63 · ใช้บริการ 3 ปี",
  rating: 5,
  text: "เริ่มใช้บริการมาตั้งแต่ปี 2565 เปลี่ยนแม่บ้านไปแล้ว 2 คน แต่ละคนคุณภาพดีมาก ทีมงานที่นี่เข้าใจความต้องการของลูกค้าจริงๆ ตรวจสอบได้ทุกอย่างตั้งแต่ใบรับรองสุขภาพจนถึงประวัติ มั่นใจมากค่ะ",
};

const reviews = [
  {
    name: "คุณวิชัย ทองดี", role: "ลาดพร้าว", rating: 5,
    text: "พี่เลี้ยงเด็กดูแลลูกได้ดีเกินคาดครับ ทีมงานให้คำปรึกษาดีมาก",
  },
  {
    name: "คุณรัตนา ชัยวัฒน์", role: "เชียงใหม่", rating: 5,
    text: "ดูแลแม่ที่ป่วย ใจเย็น อดทน เรียนรู้ไว มีความรับผิดชอบสูง แนะนำเลยค่ะ",
  },
  {
    name: "คุณสมชาย แสงทอง", role: "สาทร", rating: 5,
    text: "ใช้บริการมา 2 ปีแล้ว คุ้มค่ามาก แม่บ้านขยัน ซื่อสัตย์ ดีกว่าที่คิด",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(n)].map((_, i) => (
        <Star key={i} size={13} fill="#C8A45A" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="py-20 md:py-24"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="eyebrow mb-3 block">เสียงจากลูกค้า</span>
          <h2
            className="font-display font-black"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--ink)" }}
          >
            ลูกค้ากว่า
            <span className="gradient-text-gold"> 95,000 รีวิว</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-5">
          <div
            className="md:col-span-3 rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: "var(--gold-tint-deep)",
              border: "1.5px solid var(--border)",
            }}
          >
            <Quote
              size={70}
              className="absolute -top-2 -right-2 opacity-10"
              style={{ color: "var(--gold-dark)" }}
            />
            <Stars n={featured.rating} />
            <p
              className="font-body text-lg md:text-xl leading-relaxed my-6"
              style={{ color: "var(--ink-mid)" }}
            >
              &ldquo;{featured.text}&rdquo;
            </p>
            <div className="pt-5" style={{ borderTop: "1px solid var(--border)" }}>
              <div className="font-display font-bold text-lg" style={{ color: "var(--ink)" }}>
                {featured.name}
              </div>
              <div className="font-body text-sm mt-0.5" style={{ color: "var(--ink-subtle)" }}>
                {featured.role}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl p-5 flex-1"
                style={{ background: "var(--white)", border: "1px solid var(--border-light)" }}
              >
                <Stars n={r.rating} />
                <p
                  className="font-body text-sm leading-relaxed mt-3 mb-3"
                  style={{ color: "var(--ink-muted)" }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="font-display font-bold text-sm" style={{ color: "var(--ink)" }}>
                  {r.name}
                </div>
                <div className="font-body text-xs" style={{ color: "var(--ink-subtle)" }}>
                  {r.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
