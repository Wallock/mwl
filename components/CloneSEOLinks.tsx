const BASE = "https://www.maidwonderland.com";

const locations = [
  "ลาดพร้าว", "สุขุมวิท", "บางนา", "ทองหล่อ",
  "นนทบุรี", "เชียงใหม่", "ภูเก็ต", "พัทยา",
];

const cats = [
  { label: "แม่บ้าน",       href: `${BASE}/our-service/maid-service/` },
  { label: "พี่เลี้ยงเด็ก",  href: `${BASE}/our-service/nanny_sv/` },
  { label: "ดูแลผู้สูงอายุ", href: `${BASE}/our-service/elder_care/` },
  { label: "จัดหาแม่บ้าน",   href: `${BASE}/our-service/maid-service/` },
];

export default function CloneSEOLinks() {
  return (
    <section className="bg-ground py-10 lg:py-14 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-5">

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gold/20" />
          <p className="text-[10px] font-black tracking-[0.18em] text-ink-subtle uppercase whitespace-nowrap">
            พื้นที่ให้บริการ
          </p>
          <div className="flex-1 h-px bg-gold/20" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {cats.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-[11px] font-black tracking-wider uppercase mb-3 pb-2 border-b border-border bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                {cat.label}
              </h3>
              <ul className="space-y-1">
                {locations.map((loc) => (
                  <li key={loc}>
                    <a href={cat.href} className="seo-link">
                      <span className="text-gold text-[6px]">◆</span>
                      {cat.label}{loc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
