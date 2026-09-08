import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function CloneAbout() {
  return (
    <section className="bg-ground py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">

          {/* LEFT — big editorial number with glow pulse */}
          <Reveal className="lg:col-span-2 flex flex-col items-start">
            <div
              className="font-display font-black leading-none bg-gradient-to-b from-gold to-gold-dark bg-clip-text text-transparent animate-gold-glow"
              style={{ fontSize: "clamp(64px, 12vw, 108px)" }}
            >
              <CountUp end={20} suffix="+" />
            </div>
            <div className="h-0.5 w-14 bg-gradient-to-r from-gold to-gold-dark mt-3 mb-2" />
            <p className="text-ink-muted font-semibold text-base leading-snug">
              ปีประสบการณ์<br />จัดหาแม่บ้านทั่วไทย
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 w-full">
              {[
                { end: 95742, suffix: "", label: "รีวิวจริง" },
                { end: 10000, suffix: "+", label: "ครอบครัว" },
              ].map(({ end, suffix, label }) => (
                <div key={label} className="border-l-2 border-gold pl-3">
                  <div className="font-display text-xl font-black text-gold-dark leading-none mb-0.5">
                    <CountUp end={end} suffix={suffix} />
                  </div>
                  <div className="text-ink-subtle text-xs">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* RIGHT — story + CTA */}
          <Reveal delay={150} className="lg:col-span-3">
            <h2 className="text-2xl lg:text-4xl font-black text-ink mb-4 leading-tight">
              ทำไมต้องเลือก{" "}
              <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                แม่บ้านดีดี?
              </span>
            </h2>
            <p className="text-ink-muted leading-[1.9] text-[15px] mb-6">
              เราก่อตั้งขึ้นเพื่อตอบโจทย์ครอบครัวยุคใหม่ที่ต้องการแม่บ้านคุณภาพ
              ผ่านการคัดกรองและอบรมอย่างเข้มงวด ส่งตรงถึงบ้านคุณใน 56 จังหวัดทั่วไทย
            </p>

            <div className="flex gap-4 mb-6 pb-5 border-b border-border">
              {[
                { end: 56, suffix: "", label: "พื้นที่ทั่วไทย" },
                { end: 100, suffix: "%", label: "ตรวจสอบได้" },
              ].map(({ end, suffix, label }) => (
                <div key={label}>
                  <div className="font-display text-2xl font-black text-gold-dark leading-none mb-0.5">
                    <CountUp end={end} suffix={suffix} />
                  </div>
                  <div className="text-ink-subtle text-xs">{label}</div>
                </div>
              ))}
              <div>
                <div className="font-display text-2xl font-black text-gold-dark leading-none mb-0.5">24 ชม.</div>
                <div className="text-ink-subtle text-xs">บริการหลังส่ง</div>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a href="tel:0618437666" className="btn-gold">📞 โทรปรึกษาฟรี</a>
              <a
                href="https://www.maidwonderland.com/about_us/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line"
              >
                ดูข้อมูลเพิ่มเติม →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
