const services = [
  {
    heading: "จัดหาแม่บ้าน",
    href: "/services/maid",
    keyword: "แม่บ้าน",
  },
  {
    heading: "พี่เลี้ยงเด็ก",
    href: "/services/nanny",
    keyword: "พี่เลี้ยงเด็ก",
  },
  {
    heading: "ดูแลผู้สูงอายุ",
    href: "/services/elder",
    keyword: "ผู้ดูแลผู้สูงอายุ",
  },
  {
    heading: "แรงงานทั่วไป",
    href: "/services/labor",
    keyword: "แรงงานทั่วไป",
  },
];

const locations = [
  "กรุงเทพ",
  "ลาดพร้าว",
  "สุขุมวิท",
  "บางนา",
  "ทองหล่อ",
  "นนทบุรี",
  "ปทุมธานี",
  "สมุทรปราการ",
  "รามคำแหง",
  "บางกะปิ",
  "มีนบุรี",
  "ลาดกระบัง",
];


export default function CloneSEOLinks() {
  return (
    <section className="bg-[#FAFAF9] py-12 lg:py-16 border-t border-[#EDE8DF]">
      <div className="max-w-6xl mx-auto px-5">

        {/* Divider */}
        <div className="flex items-center gap-5 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/20" />
          <p className="text-[10px] font-black tracking-[0.18em] text-ink-subtle uppercase whitespace-nowrap">
            พื้นที่ให้บริการ
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/20" />
        </div>

        {/* Service × Location grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {services.map((svc) => (
            <div key={svc.href}>
              <h3 className="text-[11px] font-black tracking-wider uppercase mb-3 pb-2 border-b border-[#EDE8DF] bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                {svc.heading}
              </h3>
              <ul className="space-y-1.5 list-none p-0 m-0">
                {locations.map((loc) => (
                  <li key={loc}>
                    <a href={`${svc.href}/${svc.keyword}${loc}`} className="seo-link">
                      <span className="text-gold text-[6px]">◆</span>
                      {svc.keyword}{loc}
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
