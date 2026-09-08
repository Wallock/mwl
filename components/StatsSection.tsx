const stats = [
  { value: "95,000+", label: "รีวิวจากลูกค้า", sub: "คะแนนเฉลี่ย 4.9 / 5.0" },
  { value: "20,000+", label: "ครอบครัวที่ไว้วางใจ", sub: "ทั่วกรุงเทพและต่างจังหวัด" },
  { value: "20+ ปี", label: "ประสบการณ์", sub: "ก่อตั้งโดยผู้เชี่ยวชาญ" },
  { value: "56+", label: "พื้นที่ให้บริการ", sub: "ทั่วประเทศไทย" },
];

export default function StatsSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, var(--gold-tint-deep) 0%, var(--gold-tint) 100%)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
      className="py-14 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-amber-200">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center px-6 py-2">
              <div
                className="font-display font-black mb-1"
                style={{
                  fontSize: "clamp(30px, 4vw, 50px)",
                  color: "var(--gold-dark)",
                }}
              >
                {s.value}
              </div>
              <div
                className="font-display font-semibold text-base mb-1"
                style={{ color: "var(--ink)" }}
              >
                {s.label}
              </div>
              <div className="font-body text-xs" style={{ color: "var(--ink-muted)" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
