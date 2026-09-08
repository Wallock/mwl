const steps = [
  {
    num: "01",
    title: "ติดต่อแจ้งความต้องการ",
    desc: "โทรหาเราหรือแชท LINE ระบุประเภทบริการ จำนวนคน และรายละเอียด ทีมงานให้คำปรึกษาฟรี ไม่มีค่าใช้จ่าย",
  },
  {
    num: "02",
    title: "คัดเลือกและจับคู่",
    desc: "ทีมงานคัดสรรผู้สมัครที่ผ่านการตรวจสุขภาพ ตรวจประวัติ และฝึกอบรมแล้ว ส่งโปรไฟล์ให้คุณเลือก",
  },
  {
    num: "03",
    title: "รับมอบและติดตามผล",
    desc: "รับแม่บ้านเข้างานพร้อมเอกสารครบ มีทีมงานติดตามผลหลังเริ่มงาน รับประกันคุณภาพ เปลี่ยนทดแทนได้",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-24"
      style={{ background: "var(--gold-tint)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="eyebrow mb-3 inline-flex">ขั้นตอนการใช้บริการ</span>
          <h2
            className="font-display font-black"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--ink)" }}
          >
            ง่าย เพียง
            <span className="gradient-text-gold"> 3 ขั้นตอน</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          <div
            className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px"
            style={{ background: "linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-light))" }}
          />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative flex flex-col items-center text-center gap-5"
            >
              <div
                className="relative w-20 h-20 rounded-2xl flex items-center justify-center font-display font-black text-2xl z-10"
                style={{
                  background: i === 1 ? "var(--gold)" : "var(--white)",
                  color: i === 1 ? "white" : "var(--gold-dark)",
                  border: i === 1 ? "none" : "1.5px solid var(--border)",
                  boxShadow: i === 1
                    ? "0 8px 32px rgba(200,164,90,0.4)"
                    : "0 4px 16px rgba(200,164,90,0.1)",
                }}
              >
                {step.num}
              </div>

              <div>
                <h3
                  className="font-display font-bold text-xl mb-2"
                  style={{ color: "var(--ink)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl"
          style={{
            background: "var(--white)",
            border: "1px solid var(--border)",
            boxShadow: "0 4px 24px rgba(200,164,90,0.1)",
          }}
        >
          <div>
            <div className="font-display font-bold text-lg" style={{ color: "var(--ink)" }}>
              ไม่มีค่าบริการในการสอบถาม
            </div>
            <div className="font-body text-sm" style={{ color: "var(--ink-muted)" }}>
              ค่าใช้จ่ายเกิดขึ้นเมื่อท่านตกลงรับบริการและส่งมอบเรียบร้อยแล้วเท่านั้น
            </div>
          </div>
          <a href="tel:0618437666" className="btn-gold flex-shrink-0">
            โทรเลย
          </a>
        </div>
      </div>
    </section>
  );
}
