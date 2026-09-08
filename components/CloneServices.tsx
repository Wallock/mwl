import { IMG } from "@/lib/images";
import Reveal from "./Reveal";

const BASE = "https://www.maidwonderland.com";

const services = [
  {
    img: IMG.maid,
    name: "แม่บ้านทั่วไป",
    price: "11,000 - 13,000 บาท/เดือน",
    tag: "ยอดนิยม",
    gold: true,
    href: `${BASE}/our-service/maid-service/`,
  },
  {
    img: IMG.nanny,
    name: "พี่เลี้ยงเด็ก",
    price: "12,000 - 15,000 บาท/เดือน",
    tag: "แนะนำ",
    gold: false,
    href: `${BASE}/our-service/nanny_sv/`,
  },
  {
    img: IMG.elder,
    name: "ดูแลผู้สูงอายุ",
    price: "12,000 - 16,000 บาท/เดือน",
    tag: "มืออาชีพ",
    gold: true,
    href: `${BASE}/our-service/elder_care/`,
  },
  {
    img: IMG.labor,
    name: "แรงงานทั่วไป",
    price: "353 - 500 บาท/วัน",
    tag: "รายวัน",
    gold: false,
    href: `${BASE}/our-service/general_labor/`,
  },
];

export default function CloneServices() {
  return (
    <section className="bg-surface-gold py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-5">

        <Reveal className="text-center mb-8 lg:mb-12">
          <span className="sec-badge">บริการของเรา</span>
          <h2 className="text-3xl lg:text-[2.5rem] font-black text-ink mt-3 mb-2">
            เลือกบริการที่{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              เหมาะกับคุณ
            </span>
          </h2>
          <p className="text-ink-muted text-sm lg:text-[15px] max-w-sm mx-auto leading-relaxed">
            ราคาโปร่งใส ส่งไวทั่วกรุงเทพและ 56 จังหวัด
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 100} className="flex flex-col">
              <a href={s.href} className="svc-card group flex-1">
                <div className="relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="svc-img"
                    style={{ aspectRatio: "1/1" }}
                  />
                  <span
                    className="absolute top-2 left-2 text-white text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: s.gold
                        ? "linear-gradient(135deg,#C9A96E 0%,#9E7D48 100%)"
                        : "linear-gradient(135deg,#D4576E 0%,#B03255 100%)",
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <div className="p-3 lg:p-5">
                  <h3 className="font-bold text-ink text-sm lg:text-[17px] mb-1 tracking-tight">{s.name}</h3>
                  <p className="text-xs font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent mb-2">
                    {s.price}
                  </p>
                  <span className="text-rose text-xs font-semibold">ดูรายละเอียด →</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
