import Image from "next/image";
import { IMG } from "@/lib/images";
import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";

const services = [
  {
    img: IMG.maid,
    name: "แม่บ้านทั่วไป",
    price: "11,000 - 13,000 บาท/เดือน",
    tag: "ยอดนิยม",
    gold: true,
    href: "/services/maid",
  },
  {
    img: IMG.nanny,
    name: "พี่เลี้ยงเด็ก",
    price: "12,000 - 15,000 บาท/เดือน",
    tag: "แนะนำ",
    gold: false,
    href: "/services/nanny",
  },
  {
    img: IMG.elder,
    name: "ดูแลผู้สูงอายุ",
    price: "12,000 - 16,000 บาท/เดือน",
    tag: "มืออาชีพ",
    gold: true,
    href: "/services/elder",
  },
  {
    img: IMG.labor,
    name: "แรงงานทั่วไป",
    price: "353 - 500 บาท/วัน",
    tag: "รายวัน",
    gold: false,
    href: "/services/labor",
  },
];

export default function CloneServices() {
  return (
    <section className="relative bg-white overflow-hidden py-12 lg:py-16">

      {/* Grid pattern */}
      <div className="bg-grid absolute inset-0 pointer-events-none z-0 opacity-70" />

      {/* Decorative gold blob bottom */}
      <div data-blob
        className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full z-0"
        style={{ background: "radial-gradient(ellipse, rgba(201,169,110,0.13) 0%, transparent 70%)", filter: "blur(120px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5">

        <Reveal className="text-center mb-10 lg:mb-14">
          <span className="sec-badge">บริการของเรา</span>
          <h2
            className="font-black text-ink mt-3 mb-2"
            style={{ fontSize: "clamp(30px,3.5vw,46px)" }}
          >
            เลือกบริการที่{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              เหมาะกับคุณ
            </span>
          </h2>
          <p className="text-ink-muted text-sm lg:text-[15px] max-w-sm mx-auto leading-relaxed">
            ราคาโปร่งใส ส่งไวทั่วกรุงเทพและ 56 จังหวัด
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 90} className="flex flex-col">
              <a
                href={s.href}
                className="group flex flex-col flex-1 bg-white border border-[#EDE8DF] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(100,60,0,0.06)] hover:shadow-[0_12px_36px_rgba(100,60,0,0.13)] hover:-translate-y-1.5 hover:border-gold/40 transition-all duration-300 cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.name}
                    width={400}
                    height={400}
                    className="w-full block object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    style={{ aspectRatio: "1/1", height: "auto", width: "100%" }}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={i === 0}
                  />
                  <span className={`absolute top-2.5 left-2.5 text-white text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    s.gold
                      ? "bg-gradient-to-br from-gold to-gold-dark"
                      : "bg-gradient-to-br from-rose to-[#B03255]"
                  }`}>
                    {s.tag}
                  </span>
                </div>
                <div className="p-3.5 lg:p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-ink text-sm lg:text-[17px] mb-1 tracking-tight">{s.name}</h3>
                  <p className="text-xs font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent mb-3">
                    {s.price}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 text-rose text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                    ดูรายละเอียด <ArrowRight size={12} strokeWidth={2.5} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
