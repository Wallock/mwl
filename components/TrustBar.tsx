const items = [
  "ใบอนุญาตจัดหางานถูกต้อง",
  "ตรวจสุขภาพ 5 โรค",
  "ตรวจประวัติอาชญากรรม",
  "อบรมก่อนส่งงาน",
  "รับประกันคุณภาพ",
  "บริการ 56 พื้นที่ทั่วไทย",
  "ปรึกษาฟรี ไม่มีค่าใช้จ่าย",
  "ใบอนุญาตจัดหางานถูกต้อง",
  "ตรวจสุขภาพ 5 โรค",
  "ตรวจประวัติอาชญากรรม",
];

export default function TrustBar() {
  return (
    <div
      className="w-full overflow-hidden py-3"
      style={{
        background: "var(--gold)",
        borderTop: "1px solid var(--gold-bright)",
        borderBottom: "1px solid var(--gold-bright)",
      }}
    >
      <div className="flex gap-0 whitespace-nowrap">
        <div className="flex items-center gap-0 min-w-max">
          {items.map((t, i) => (
            <span
              key={i}
              className="font-body text-xs font-bold px-5 flex items-center gap-2"
              style={{ color: "var(--ink)" }}
            >
              <span style={{ color: "var(--gold-ink)", opacity: 0.5, fontSize: "10px" }}>✦</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
