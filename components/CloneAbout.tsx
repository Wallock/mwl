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
    <section
      className="py-12 lg:py-10"
      style={{
        background: "linear-gradient(135deg, #F5E6C0 0%, #FDF3D8 40%, #F0DCA8 70%, #E8D090 100%)",
        fontFamily: '"Anuphan", sans-serif',
      }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">

          {/* LEFT — desktop: col-span-2 | mobile: shows after video */}
          <Reveal delay={0} className="lg:col-span-2 order-1 lg:order-1">

            <h2 className="text-center lg:text-left" style={{ fontSize: "clamp(36px,3.8vw,48px)", fontWeight: 900, lineHeight: 1.15, color: "#1A1008", margin: "0 0 14px" }}>
              บริการจัดหา
              <span style={{ background: "linear-gradient(135deg,#C67C00,#E8A000)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {" "}แม่บ้าน
              </span>
            </h2>

            <p className="text-center lg:text-left" style={{ fontSize: 17, color: "#5A3E20", lineHeight: 1.85, margin: "0 0 20px" }}>
              หากคุณกำลังมองหาบริการจัดส่งแม่บ้านที่เชื่อถือได้ เราคือคำตอบของคุณ
              ไม่ว่าจะเป็น <strong style={{ color: "#9E7D48" }}>แม่บ้านทั่วไป · พี่เลี้ยงเด็ก · คนดูแลผู้สูงอายุ · กรรมกรทั่วไป</strong>
              {" "}คนไทยและคนลาว พร้อมทำงาน มีบัตรถูกต้อง
            </p>

            {/* checklist */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 lg:gap-[10px]">
              {checks.map(({ Icon, text }) => (
                <div key={text} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.80) 0%, rgba(255,248,225,0.70) 100%)",
                  border: "1px solid rgba(201,169,110,0.40)",
                  borderBottom: "2px solid rgba(180,130,40,0.30)",
                  borderRadius: 12, padding: "10px 12px",
                  boxShadow: "0 2px 10px rgba(158,125,72,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 9, flexShrink: 0,
                    background: "linear-gradient(145deg,#B8860B,#C9A96E)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 3px 10px rgba(158,125,72,0.40), inset 0 1px 0 rgba(255,255,255,0.25)",
                  }}>
                    <Icon size={16} color="#fff" strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#3A2810", lineHeight: 1.3 }}>{text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* RIGHT — video | mobile: shows first */}
          <Reveal delay={150} className="lg:col-span-3 order-2 lg:order-2">
            <div style={{
              borderRadius: 20, overflow: "hidden",
              boxShadow: "0 16px 48px rgba(100,60,0,0.25), 0 4px 16px rgba(158,125,72,0.20)",
              border: "3px solid rgba(201,169,110,0.50)",
              lineHeight: 0,
              aspectRatio: "16/9",
              position: "relative",
            }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/udTUWGXdaDg?si=03TlVZ8rom37vQ7o&controls=0"
                title="แม่บ้านดีดี เซอร์วิส"
                style={{ border: 0, position: "absolute", inset: 0, width: "100%", height: "100%" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
