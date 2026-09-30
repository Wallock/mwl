import Image from "next/image";
import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import GSAPAnimations from "@/components/GSAPAnimations";
import Reveal from "@/components/Reveal";
import { IMG } from "@/lib/images";
import { ShieldCheck, Stethoscope, FileCheck, GraduationCap, MapPin, Award, Users, Clock } from "lucide-react";

const checks = [
  { Icon: Stethoscope,   text: "ตรวจโรคติดต่อ 5 โรคก่อนส่งงาน" },
  { Icon: ShieldCheck,   text: "ตรวจประวัติอาชญากรรม" },
  { Icon: FileCheck,     text: "คนงานมีใบอนุญาตถูกต้องตามกฎหมาย" },
  { Icon: GraduationCap, text: "อบรมมาตรฐานก่อนส่งงานทุกคน" },
  { Icon: MapPin,        text: "จัดส่งทั่วกรุงเทพและ 56 จังหวัด" },
];

const stats = [
  { Icon: Users,  value: "95,000+", label: "ลูกค้าและรีวิว" },
  { Icon: Clock,  value: "20+",     label: "ปีประสบการณ์" },
  { Icon: MapPin, value: "56",      label: "พื้นที่ให้บริการ" },
  { Icon: Award,  value: "100%",    label: "มีใบอนุญาตถูกต้อง" },
];

const dscPhotos = [
  { src: IMG.dsc06983, alt: "ทีมงานแม่บ้านดีดี" },
  { src: IMG.dsc06792, alt: "กิจกรรมบริษัท" },
  { src: IMG.dsc06833, alt: "อบรมพนักงาน" },
  { src: IMG.dsc06815, alt: "ทีมงาน" },
  { src: IMG.dsc06213, alt: "กิจกรรมทีมงาน" },
];

export const metadata = {
  title: "เกี่ยวกับเรา | แม่บ้านดีดี เซอร์วิส",
  description: "หจก.จัดหางานแม่บ้านดีดี เซอร์วิส ผู้นำจัดหาแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ มีใบอนุญาตถูกต้อง ประสบการณ์กว่า 20 ปี รีวิวกว่า 95,000 รีวิว โทร 061-843-7666",
  alternates: { canonical: "https://www.maidwonderland.com/about" },
  openGraph: {
    title: "เกี่ยวกับเรา | แม่บ้านดีดี เซอร์วิส",
    description: "หจก.จัดหางานแม่บ้านดีดี เซอร์วิส ผู้นำจัดหาแม่บ้าน พี่เลี้ยงเด็ก ผู้ดูแลผู้สูงอายุ มีใบอนุญาตถูกต้อง ประสบการณ์กว่า 20 ปี รีวิวกว่า 95,000 รีวิว โทร 061-843-7666",
    url: "https://www.maidwonderland.com/about",
    siteName: "แม่บ้านดีดี เซอร์วิส",
    images: [{ url: "/images/bg_header.webp", width: 1920, height: 800, alt: "แม่บ้านดีดี เซอร์วิส" }],
    locale: "th_TH",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <CloneNavbar />
      <GSAPAnimations />
      <main>

        {/* Page Banner */}
        <section className="relative overflow-hidden py-16 lg:py-24"
          style={{ background: "linear-gradient(135deg, #F5E6BE 0%, #EDD49E 40%, #F0DDB8 70%, #F8EDD3 100%)" }}>
          <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-30" />
          <div data-blob
            className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full z-0"
            style={{ background: "radial-gradient(circle, rgba(201,169,110,0.30) 0%, transparent 70%)", filter: "blur(100px)" }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">
            <Reveal>
              <span className="sec-badge mb-4">หจก.จัดหางานแม่บ้านดีดี เซอร์วิส</span>
              <h1 className="font-black text-ink mt-4 mb-4" style={{ fontSize: "clamp(36px,5vw,60px)" }}>
                เกี่ยวกับ{" "}
                <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                  เรา
                </span>
              </h1>
              <p className="text-ink-muted text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
                ผู้ให้บริการจัดหาแม่บ้านและบุคลากรบ้านชั้นนำ ด้วยประสบการณ์กว่า 20 ปี
              </p>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="relative bg-white py-10 lg:py-14 border-b border-gold/10">
          <div className="max-w-5xl mx-auto px-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map(({ Icon, value, label }, i) => (
                <Reveal key={label} delay={i * 80}>
                  <div className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl border border-[#EDE8DF] bg-white shadow-[0_4px_24px_rgba(100,60,0,0.06)]">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg,#C9A96E 0%,#9E7D48 100%)" }}>
                      <Icon size={20} color="#fff" strokeWidth={2} />
                    </div>
                    <div className="font-black text-2xl lg:text-3xl bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent leading-none">
                      {value}
                    </div>
                    <div className="text-ink-muted text-xs font-medium">{label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About content */}
        <section className="relative bg-white overflow-hidden py-12 lg:py-16">
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

              <Reveal delay={0} className="order-2 lg:order-1">
                <div
                  className="rounded-2xl overflow-hidden aspect-video relative"
                  style={{
                    border: "1.5px solid rgba(201,169,110,0.30)",
                    boxShadow: "0 0 0 6px rgba(201,169,110,0.07), 0 20px 60px rgba(100,60,0,0.16)",
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube-nocookie.com/embed/udTUWGXdaDg?si=03TlVZ8rom37vQ7o&controls=0"
                    title="แม่บ้านดีดี เซอร์วิส"
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </Reveal>

              <Reveal delay={120} className="order-1 lg:order-2">
                <span className="sec-badge mb-5">เกี่ยวกับบริษัท</span>
                <h2 className="font-black leading-tight text-ink mb-5" style={{ fontSize: "clamp(28px,3.5vw,42px)" }}>
                  บริการจัดหา{" "}
                  <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                    แม่บ้านคุณภาพ
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
                      <div className="flex items-center gap-3 bg-white border border-[#EDE8DF] rounded-2xl px-4 py-3 shadow-[0_4px_24px_rgba(100,60,0,0.06)] hover:shadow-[0_8px_32px_rgba(100,60,0,0.12)] hover:-translate-y-0.5 transition-all duration-200">
                        <div className="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center shadow-sm"
                          style={{ background: "linear-gradient(135deg,#C9A96E 0%,#9E7D48 100%)" }}>
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

        {/* Team Photos */}
        <section className="relative bg-[#FBF8F2] overflow-hidden py-12 lg:py-16">
          <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-40" />
          <div className="relative z-10 max-w-6xl mx-auto px-5">
            <Reveal className="text-center mb-10">
              <span className="sec-badge">ทีมงาน</span>
              <h2 className="font-black text-ink mt-3 mb-2" style={{ fontSize: "clamp(26px,3vw,38px)" }}>
                บรรยากาศ{" "}
                <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                  การทำงาน
                </span>
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {dscPhotos.map(({ src, alt }, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="group overflow-hidden rounded-xl border border-[#EDE8DF] shadow-[0_4px_24px_rgba(100,60,0,0.06)] hover:shadow-[0_10px_36px_rgba(100,60,0,0.13)] transition-all duration-300">
                    <Image
                      src={src}
                      alt={alt}
                      width={400}
                      height={400}
                      className="w-full block object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ aspectRatio: "1/1", height: "auto" }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Address */}
        <section className="relative bg-white overflow-hidden py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-5">
            <Reveal className="text-center mb-10">
              <span className="sec-badge">ที่อยู่</span>
              <h2 className="font-black text-ink mt-3 mb-2" style={{ fontSize: "clamp(26px,3vw,38px)" }}>
                สำนักงาน
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="bg-[#FBF8F2] border border-[#EDE8DF] rounded-2xl p-6 lg:p-8 text-center shadow-[0_4px_24px_rgba(100,60,0,0.06)]">
                <p className="text-ink text-base lg:text-lg leading-relaxed mb-2">
                  หจก.จัดหางานแม่บ้านดีดี เซอร์วิส
                </p>
                <p className="text-ink-muted text-sm lg:text-base leading-relaxed">
                  206, 208 ถ.เจริญสนิทวงศ์ 82<br />
                  แขวงบางอ้อ เขตบางพลัด กรุงเทพมหานคร 10700
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <a href="tel:0618437666" style={{
                    display: "flex", alignItems: "stretch", borderRadius: 12,
                    overflow: "hidden", textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(243,0,60,0.30)",
                  }}>
                    <span style={{ background: "#C4006A", padding: "10px 12px", display: "flex", alignItems: "center" }}>
                      <Image src="/icon/calling-icon.svg" alt="โทร" width={18} height={18} style={{ filter: "brightness(0) invert(1)", width: 18, height: 18 }} />
                    </span>
                    <span style={{ background: "linear-gradient(180deg,#FF00CB 0%,#F3003C 100%)", padding: "10px 16px", fontWeight: 700, fontSize: 13, color: "#fff" }}>
                      061-843-7666
                    </span>
                  </a>
                  <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "stretch", borderRadius: 12,
                    overflow: "hidden", textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(6,109,0,0.30)",
                  }}>
                    <span style={{ background: "#04520A", padding: "10px 12px", display: "flex", alignItems: "center" }}>
                      <Image src="/icon/line-icon.svg" alt="LINE" width={18} height={18} style={{ width: 18, height: 18 }} />
                    </span>
                    <span style={{ background: "linear-gradient(180deg,#3EB600 0%,#066D00 100%)", padding: "10px 16px", fontWeight: 700, fontSize: 13, color: "#fff" }}>
                      LINE @dede1721
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <CloneFooter />
    </>
  );
}
