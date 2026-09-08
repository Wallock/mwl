import { Phone, MessageCircle, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div
      className="hidden md:block w-full"
      style={{ background: "var(--gold-tint-deep)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5 font-body text-xs" style={{ color: "var(--ink-muted)" }}>
          <Clock size={12} style={{ color: "var(--gold-dark)" }} />
          เปิดให้บริการ จันทร์–อาทิตย์ 08:00–20:00 น.
        </div>
        <div className="flex items-center gap-5">
          <a
            href="tel:0618437666"
            className="flex items-center gap-1.5 font-body text-xs font-bold transition-colors duration-200"
            style={{ color: "var(--gold-dark)" }}
          >
            <Phone size={11} />
            0618-437-666
          </a>
          <div className="w-px h-3" style={{ background: "var(--border)" }} />
          <a
            href="https://line.me/ti/p/~@dede1721"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-body text-xs font-bold transition-colors duration-200"
            style={{ color: "#059444" }}
          >
            <MessageCircle size={11} />
            LINE @dede1721
          </a>
          <div className="w-px h-3" style={{ background: "var(--border)" }} />
          <span className="font-body text-xs" style={{ color: "var(--ink-subtle)" }}>
            ปรึกษาฟรี ไม่มีข้อผูกมัด
          </span>
        </div>
      </div>
    </div>
  );
}
