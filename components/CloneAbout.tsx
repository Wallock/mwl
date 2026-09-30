import Reveal from "./Reveal";
import { ShieldCheck, Stethoscope, FileCheck, GraduationCap, MapPin } from "lucide-react";

const checks = [
  { Icon: Stethoscope,   text: "ตรวจโรคติดต่อก่อนส่งงาน" },
  { Icon: ShieldCheck,   text: "ตรวจประวัติอาชญากรรม" },
  { Icon: FileCheck,     text: "คนงานมีใบอนุญาตถูกต้อง" },
  { Icon: GraduationCap, text: "อบรมก่อนส่ง มาตรฐานสูง" },
  { Icon: MapPin,        text: "จัดส่งทั่วประเทศไทย" },
];

export default function CloneAbout() {
  return (
    <section className="relative bg-white overflow-hidden py-12 lg:py-16">

      {/* Decorative blobs */}
      {/* Dot pattern */}
      <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-60" />

      <div data-blob
        className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 70%)", filter: "blur(120px)" }}
      />
      <div data-blob
        className="pointer-events-none absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(212,87,110,0.12) 0%, transparent 70%)", filter: "blur(120px)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Video */}
          <Reveal delay={0} className="order-2 lg:order-1">
            <div
              className="rounded-2xl overflow-hidden aspect-video relative"
              style={{
                border: "1.5px solid rgba(201,169,110,0.30)",
                boxShadow: "0 0 0 6px rgba(201,169,110,0.07), 0 20px 60px rgba(100,60,0,0.16), 0 4px 16px rgba(158,125,72,0.12)",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/udTUWGXdaDg?si=03TlVZ8rom37vQ7o&controls=0"
                title="แม่บ้านดีดี เซอร์วิส"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Reveal>

          {/* RIGHT — Content */}
          <Reveal delay={120} className="order-1 lg:order-2">
            <span className="sec-badge mb-5">บริการของเรา</span>

            <h2
              className="font-black leading-tight text-ink mb-5"
              style={{ fontSize: "clamp(30px,3.8vw,46px)" }}
            >
              บริการจัดหา
              <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                {" "}แม่บ้าน
              </span>
            </h2>

            <p className="text-[15px] text-ink-muted leading-relaxed mb-8">
              หากคุณกำลังมองหาบริการจัดส่งแม่บ้านที่เชื่อถือได้ เราคือคำตอบของคุณ
              ไม่ว่าจะเป็น{" "}
              <strong className="text-gold-dark font-semibold">
                แม่บ้านทั่วไป · พี่เลี้ยงเด็ก · คนดูแลผู้สูงอายุ · กรรมกรทั่วไป
              </strong>
              {" "}คนไทยและคนลาว พร้อมทำงาน มีบัตรถูกต้อง
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {checks.map(({ Icon, text }, i) => (
                <Reveal key={text} delay={i * 70}>
                  <div className="flex items-center gap-3 bg-white border border-[#EDE8DF] rounded-2xl px-4 py-3 shadow-[0_4px_24px_rgba(100,60,0,0.06)] hover:shadow-[0_8px_32px_rgba(100,60,0,0.12)] hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                    <div className="w-9 h-9 rounded-xl shrink-0 bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-sm">
                      <Icon size={15} color="#fff" strokeWidth={2.5} />
                    </div>
                    <span className="text-[13px] font-bold text-ink leading-tight">{text}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
