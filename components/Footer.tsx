const services = [
  ["แม่บ้านทั่วไป", "#services"],
  ["พี่เลี้ยงเด็ก", "#services"],
  ["ดูแลผู้สูงอายุ", "#services"],
  ["แรงงานทั่วไป", "#services"],
];

const info = [
  ["เกี่ยวกับเรา", "#about"],
  ["วิธีใช้บริการ", "#how-it-works"],
  ["พื้นที่ให้บริการ", "#"],
  ["คำถามที่พบบ่อย", "#faq"],
  ["ติดต่อเรา", "#contact"],
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)", opacity: 0.5 }}
      />
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-sm text-white"
                style={{ background: "linear-gradient(135deg, var(--gold), var(--rose))" }}
              >
                DD
              </div>
              <div>
                <div className="font-display font-bold text-base" style={{ color: "var(--cream)" }}>
                  แม่บ้านดีดี เซอร์วิส
                </div>
                <div className="font-body text-[9px] tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
                  MAID DEDE SERVICE
                </div>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed max-w-xs mb-5" style={{ color: "rgba(253,249,247,0.45)" }}>
              หจก.จัดหางานแม่บ้านดีดี เซอร์วิส บริการจัดหาแม่บ้าน พี่เลี้ยงเด็ก และผู้ดูแลผู้สูงอายุ มาตรฐานสูง ดำเนินงานมากกว่า 20 ปี
            </p>
            <div className="flex gap-2">
              <a
                href="tel:0618437666"
                className="font-body text-xs px-3 py-2 rounded-full"
                style={{ background: "rgba(200,164,90,0.12)", border: "1px solid rgba(200,164,90,0.25)", color: "var(--gold)" }}
              >
                0618-437-666
              </a>
              <a
                href="https://line.me/ti/p/~@dede1721"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs px-3 py-2 rounded-full"
                style={{ background: "rgba(6,199,85,0.08)", border: "1px solid rgba(6,199,85,0.18)", color: "#06C755" }}
              >
                LINE @dede1721
              </a>
            </div>
          </div>

          <div>
            <div className="font-body text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>
              บริการของเรา
            </div>
            <ul className="space-y-3">
              {services.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="font-body text-sm" style={{ color: "rgba(253,249,247,0.45)" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-body text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>
              ข้อมูล
            </div>
            <ul className="space-y-3">
              {info.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="font-body text-sm" style={{ color: "rgba(253,249,247,0.45)" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(253,249,247,0.07)" }}
        >
          <p className="font-body text-xs" style={{ color: "rgba(253,249,247,0.25)" }}>
            {new Date().getFullYear()} หจก.จัดหางานแม่บ้านดีดี เซอร์วิส · สงวนลิขสิทธิ์
          </p>
          <p className="font-body text-xs" style={{ color: "rgba(253,249,247,0.18)" }}>
            ใบอนุญาตจัดหางาน · กรมการจัดหางาน · กรุงเทพมหานคร
          </p>
        </div>
      </div>
    </footer>
  );
}
