import { IMG } from "@/lib/images";

const logos = [
  { src: IMG.aia,      alt: "AIA" },
  { src: IMG.asset,    alt: "ASSET" },
  { src: IMG.toyota,   alt: "Toyota" },
  { src: IMG.maxco,    alt: "Max & Co" },
  { src: IMG.partner1, alt: "Partner" },
  { src: IMG.partner2, alt: "Partner" },
  { src: IMG.partner3, alt: "Partner" },
];

export default function CloneClients() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-5">

        {/* Divider with label */}
        <div className="flex items-center gap-5 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/25" />
          <p className="text-ink-subtle text-[10px] font-black tracking-[0.18em] uppercase whitespace-nowrap">
            บริษัทชั้นนำที่เลือกใช้บริการ
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/25" />
        </div>

        {/* Logo row */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {logos.map((l, i) => (
            <img
              key={i}
              src={l.src}
              alt={l.alt}
              className="client-logo"
              style={{ height: 40 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
