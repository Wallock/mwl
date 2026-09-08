"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    cat: "เกี่ยวกับบริการ",
    items: [
      { q: "ต้องเสียค่าใช้จ่ายในการสอบถามไหม?", a: "ไม่มีค่าใช้จ่ายในการสอบถามหรือขอดูโปรไฟล์ ค่าบริการเกิดขึ้นเมื่อท่านตัดสินใจรับแม่บ้านและดำเนินการส่งมอบเรียบร้อยแล้วเท่านั้น" },
      { q: "ใช้เวลานานแค่ไหนกว่าจะได้แม่บ้าน?", a: "โดยทั่วไปใช้เวลา 3–7 วัน ขึ้นอยู่กับความต้องการเฉพาะ ในกรณีเร่งด่วนทีมงานจะพยายามจัดหาให้ได้ภายใน 1–3 วัน" },
      { q: "สามารถนัดสัมภาษณ์ก่อนตัดสินใจได้ไหม?", a: "ได้เลย สามารถนัดสัมภาษณ์ที่บ้าน ที่สำนักงาน ออนไลน์ผ่านวิดีโอคอล หรือทดลองงาน 1 วัน ก่อนตัดสินใจ" },
      { q: "ให้บริการแถวบ้านไหม?", a: "ครอบคลุม 56 พื้นที่ทั่วไทย รวมกรุงเทพทุกเขต นนทบุรี ปทุมธานี สมุทรปราการ เชียงใหม่ ภูเก็ต และพัทยา" },
    ],
  },
  {
    cat: "การคัดกรองและอบรม",
    items: [
      { q: "มีการตรวจสุขภาพและประวัติอาชญากรรมอย่างไร?", a: "แม่บ้านทุกคนตรวจสุขภาพ 5 โรค (ยาเสพติด, ตับอักเสบ B, วัณโรค, HIV, ซิฟิลิส) ตรวจครรภ์ และตรวจประวัติอาชญากรรมจากกรมตำรวจก่อนส่งทุกราย" },
      { q: "แม่บ้านได้รับการอบรมอะไรบ้าง?", a: "ผ่านหลักสูตรมารยาท ทัศนคติ เทคนิคทำความสะอาด ความปลอดภัยในบ้าน การดูแลเด็กและผู้สูงอายุ (เฉพาะงานนั้น)" },
      { q: "หากไม่พอใจในช่วงทดลองงานจะเป็นอย่างไร?", a: "มีนโยบายรับประกัน หากไม่พอใจทีมงานจะจัดหาคนใหม่มาทดแทนโดยไม่มีค่าใช้จ่ายเพิ่ม" },
    ],
  },
  {
    cat: "ค่าใช้จ่ายและสัญญา",
    items: [
      { q: "ค่าจัดหางานคิดอย่างไร?", a: "คิดครั้งเดียว ไม่มีค่ารายเดือนเพิ่ม ราคาขึ้นอยู่กับประเภทบริการและระยะเวลา โทรสอบถามเพื่อรับใบเสนอราคา" },
      { q: "เงินเดือนที่แสดงเป็นตัวเลขสุดท้ายไหม?", a: "เป็นช่วงอ้างอิง เงินเดือนจริงขึ้นอยู่กับประสบการณ์ ลักษณะงาน และการตกลงระหว่างนายจ้างกับแม่บ้าน ทีมงานช่วยประสานงานให้" },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        border: "1px solid var(--border-light)",
        background: open ? "var(--gold-tint)" : "var(--white)",
      }}
    >
      <button
        className="w-full flex items-start justify-between gap-4 p-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-display font-semibold text-base" style={{ color: "var(--ink)" }}>
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
          style={{
            background: open ? "var(--gold)" : "var(--gold-tint-deep)",
            color: open ? "white" : "var(--gold-dark)",
          }}
        >
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="font-body text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 md:py-24"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <span className="eyebrow mb-3 block">คำถามที่พบบ่อย</span>
            <h2
              className="font-display font-black mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--ink)" }}
            >
              มีคำถาม?
              <br />
              <span className="gradient-text-gold">เราตอบได้ทุกข้อ</span>
            </h2>
            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "var(--ink-muted)" }}>
              หากไม่เจอคำตอบที่ต้องการ โทรหาเราได้เลย ทีมงานพร้อมตอบทุกวัน 08:00–20:00 น.
            </p>
            <a href="tel:0618437666" className="btn-gold inline-flex">
              โทรสอบถาม
            </a>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-7">
            {faqs.map((cat) => (
              <div key={cat.cat}>
                <div
                  className="font-body text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "var(--gold-dark)" }}
                >
                  {cat.cat}
                </div>
                <div className="flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
