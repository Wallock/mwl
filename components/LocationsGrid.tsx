const areas = [
  { name: "สุขุมวิท", hot: true }, { name: "ลาดพร้าว", hot: true },
  { name: "บางนา", hot: false }, { name: "สาทร", hot: false },
  { name: "สีลม", hot: false }, { name: "อ่อนนุช", hot: true },
  { name: "รามคำแหง", hot: false }, { name: "พัฒนาการ", hot: false },
  { name: "ปิ่นเกล้า", hot: false }, { name: "จรัญสนิทวงศ์", hot: false },
  { name: "รัชดาภิเษก", hot: false }, { name: "งามวงศ์วาน", hot: false },
  { name: "นนทบุรี", hot: false }, { name: "ปทุมธานี", hot: false },
  { name: "สมุทรปราการ", hot: false }, { name: "มีนบุรี", hot: false },
  { name: "คลองเตย", hot: false }, { name: "ดอนเมือง", hot: false },
  { name: "ลาดกระบัง", hot: false }, { name: "เชียงใหม่", hot: true },
  { name: "ภูเก็ต", hot: true }, { name: "พัทยา", hot: true },
  { name: "ขอนแก่น", hot: false }, { name: "โคราช", hot: false },
];

export default function LocationsGrid() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ background: "var(--white)", borderTop: "1px solid var(--border-light)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-end mb-10">
          <div>
            <span className="eyebrow mb-3 block">พื้นที่ให้บริการ</span>
            <h2
              className="font-display font-black"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--ink)" }}
            >
              ครอบคลุม
              <span className="gradient-text-gold"> 56 พื้นที่</span>
            </h2>
          </div>
          <p className="font-body text-base leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            ให้บริการทั้งกรุงเทพมหานคร ปริมณฑล และต่างจังหวัดหลักทั่วไทย
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {areas.map((a) => (
            <span
              key={a.name}
              className="font-body text-sm px-4 py-2 rounded-full"
              style={
                a.hot
                  ? { background: "var(--gold-tint-deep)", color: "var(--gold-dark)", border: "1px solid var(--border)" }
                  : { background: "var(--cream)", color: "var(--ink-muted)", border: "1px solid var(--border-light)" }
              }
            >
              {a.hot && <span className="mr-1" style={{ color: "var(--gold)" }}>●</span>}
              {a.name}
            </span>
          ))}
          <span
            className="font-body text-sm px-4 py-2 rounded-full font-semibold"
            style={{ background: "var(--rose-subtle)", color: "var(--rose)", border: "1px solid rgba(200,64,96,0.15)" }}
          >
            + อีก 32 พื้นที่
          </span>
        </div>
      </div>
    </section>
  );
}
