import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import Reveal from "@/components/Reveal";
import { IMG } from "@/lib/images";
import { CheckCircle2, Banknote, Clock, ShieldCheck } from "lucide-react";

const features = [
  "ดูแลผู้สูงอายุและผู้ป่วยติดเตียง",
  "ให้ยาตามเวลาที่กำหนด",
  "พาไปพบแพทย์ นัดหมายต่างๆ",
  "ออกกำลังกายเบาๆ กายภาพบำบัด",
  "ดูแลความสะอาดของร่างกาย",
  "ทำอาหารเหมาะสมตามสภาพร่างกาย",
];

const guarantees = [
  { Icon: ShieldCheck,   text: "ตรวจประวัติอาชญากรรม" },
  { Icon: CheckCircle2,  text: "ตรวจโรคติดต่อ 5 โรค" },
  { Icon: CheckCircle2,  text: "มีใบอนุญาตถูกต้อง" },
  { Icon: CheckCircle2,  text: "อบรมดูแลผู้สูงอายุโดยเฉพาะ" },
];

export const metadata = {
  title: "บริการดูแลผู้สูงอายุ | แม่บ้านดีดี เซอร์วิส",
  description: "บริการจัดหาผู้ดูแลผู้สูงอายุ ผ่านการอบรมเฉพาะทาง ตรวจโรค ตรวจประวัติ ราคา 12,000–16,000 บาท/เดือน",
};

export default function ElderServicePage() {
  return (
    <>
      <CloneNavbar />
      <GSAPAnimations />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #F5E6BE 0%, #EDD49E 40%, #F0DDB8 70%, #F8EDD3 100%)" }}>
          <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-30" />
          <div data-blob
            className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full z-0"
            style={{ background: "radial-gradient(circle, rgba(201,169,110,0.25) 0%, transparent 70%)", filter: "blur(100px)" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-5 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <Reveal>
                <span className="sec-badge mb-4">มืออาชีพ</span>
                <h1 className="font-black text-ink mt-4 mb-4" style={{ fontSize: "clamp(36px,5vw,60px)" }}>
                  บริการดูแล{" "}
                  <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                    ผู้สูงอายุ
                  </span>
                </h1>
                <p className="text-ink-muted text-base lg:text-lg leading-relaxed mb-6">
                  ผู้ดูแลผู้สูงอายุที่ผ่านการอบรมเฉพาะทาง
                  ดูแลด้วยความเอาใจใส่ ให้ผู้สูงอายุได้รับการดูแลอย่างถูกต้อง
                </p>
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-white border border-[#EDE8DF] rounded-2xl px-5 py-3 shadow-[0_4px_24px_rgba(100,60,0,0.08)]">
                    <Banknote size={18} className="text-gold-dark" />
                    <div>
                      <div className="text-[10px] text-ink-muted font-medium uppercase tracking-wide">ราคาเริ่มต้น</div>
                      <div className="font-black text-lg bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent leading-none">
                        12,000 บาท/เดือน
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-[#EDE8DF] rounded-2xl px-5 py-3 shadow-[0_4px_24px_rgba(100,60,0,0.08)]">
                    <Clock size={18} className="text-gold-dark" />
                    <div>
                      <div className="text-[10px] text-ink-muted font-medium uppercase tracking-wide">ทำงาน</div>
                      <div className="font-black text-base text-ink leading-none">จ.–ส. 08:00–17:00</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:0618437666" style={{
                    display: "flex", alignItems: "stretch", borderRadius: 14,
                    overflow: "hidden", textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(243,0,60,0.35)",
                  }}>
                    <span style={{ background: "#C4006A", padding: "12px 14px", display: "flex", alignItems: "center" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/icon/calling-icon.svg" alt="โทร" width={22} height={22} style={{ filter: "brightness(0) invert(1)" }} />
                    </span>
                    <span style={{ background: "linear-gradient(180deg,#FF00CB 0%,#F3003C 100%)", padding: "12px 18px", fontWeight: 700, fontSize: 14, color: "#fff" }}>
                      โทรสอบถามเลย
                    </span>
                  </a>
                  <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "stretch", borderRadius: 14,
                    overflow: "hidden", textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(6,109,0,0.35)",
                  }}>
                    <span style={{ background: "#04520A", padding: "12px 14px", display: "flex", alignItems: "center" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/icon/line-icon.svg" alt="LINE" width={22} height={22} />
                    </span>
                    <span style={{ background: "linear-gradient(180deg,#3EB600 0%,#066D00 100%)", padding: "12px 18px", fontWeight: 700, fontSize: 14, color: "#fff" }}>
                      แอด LINE
                    </span>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(100,60,0,0.18)]"
                  style={{ border: "1.5px solid rgba(201,169,110,0.35)" }}>
                  <img src={IMG.elder} alt="ดูแลผู้สูงอายุ" className="w-full block object-cover" style={{ aspectRatio: "4/3" }} />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative bg-white overflow-hidden py-12 lg:py-16">
          <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-50" />
          <div className="relative z-10 max-w-5xl mx-auto px-5">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <Reveal>
                  <span className="sec-badge mb-4">งานที่รับผิดชอบ</span>
                  <h2 className="font-black text-ink mt-4 mb-6" style={{ fontSize: "clamp(24px,3vw,36px)" }}>
                    งานที่{" "}
                    <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">ผู้ดูแลทำ</span>
                  </h2>
                </Reveal>
                <div className="grid gap-3">
                  {features.map((f, i) => (
                    <Reveal key={f} delay={i * 60}>
                      <div className="flex items-center gap-3 bg-[#FBF8F2] border border-[#EDE8DF] rounded-xl px-4 py-3">
                        <CheckCircle2 size={16} className="text-gold-dark shrink-0" strokeWidth={2.5} />
                        <span className="text-[14px] font-medium text-ink">{f}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
              <div>
                <Reveal delay={80}>
                  <span className="sec-badge mb-4">มาตรฐาน</span>
                  <h2 className="font-black text-ink mt-4 mb-6" style={{ fontSize: "clamp(24px,3vw,36px)" }}>
                    ผ่านการ{" "}
                    <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">รับรอง</span>
                  </h2>
                </Reveal>
                <div className="grid gap-3">
                  {guarantees.map(({ Icon, text }, i) => (
                    <Reveal key={text} delay={80 + i * 60}>
                      <div className="flex items-center gap-3 bg-[#FBF8F2] border border-[#EDE8DF] rounded-xl px-4 py-3">
                        <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg,#C9A96E 0%,#9E7D48 100%)" }}>
                          <Icon size={14} color="#fff" strokeWidth={2.5} />
                        </div>
                        <span className="text-[14px] font-medium text-ink">{text}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Reveal delay={200}>
                  <div className="mt-8 bg-[#FBF8F2] border border-gold/25 rounded-2xl p-6"
                    style={{ boxShadow: "0 8px 32px rgba(201,169,110,0.12)" }}>
                    <div className="text-[10px] font-black tracking-[0.16em] uppercase text-gold-dark mb-3">ค่าบริการ</div>
                    <div className="font-black text-3xl bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent mb-1">
                      12,000 – 16,000
                    </div>
                    <div className="text-ink-muted text-sm font-medium mb-4">บาท / เดือน</div>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      * ราคาขึ้นอยู่กับความเข้มข้นของการดูแลและพื้นที่บริการ
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

      </main>
      <CloneFooter />
    </>
  );
}
