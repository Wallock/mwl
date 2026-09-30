import { IMG } from "@/lib/images";
import { Phone, MessageCircle, Tag } from "lucide-react";

const packages = [
  { src: IMG.pkg1, alt: "โปรโมชั่น 3,500 บาท" },
  { src: IMG.pkg2, alt: "โปรโมชั่น 5,000 บาท" },
  { src: IMG.pkg3, alt: "โปรโมชั่น 7,000 บาท" },
  { src: IMG.pkg4, alt: "โปรโมชั่น 10,000 บาท" },
];

export default function ClonePackages() {
  return (
    <section className="relative bg-white overflow-hidden py-12 lg:py-16">

      {/* Dot pattern */}
      <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-50" />

      {/* Decorative rose blob */}
      <div data-blob
        className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(212,87,110,0.10) 0%, transparent 70%)", filter: "blur(120px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5">

        <div className="text-center mb-10 lg:mb-14">
          <span className="sec-badge">โปรโมชั่น</span>
          <h2
            className="font-black text-ink mt-3 mb-2"
            style={{ fontSize: "clamp(30px,3.5vw,46px)" }}
          >
            แพ็กเกจ{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">พิเศษ</span>
          </h2>
          <p className="text-ink-muted text-sm max-w-xs mx-auto">คุ้มค่าทุกงบประมาณ สอบถามได้เลย</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10 lg:mb-12">
          {packages.map((p) => (
            <a
              key={p.alt}
              href="tel:0618437666"
              className="group block rounded-2xl overflow-hidden border border-[#EDE8DF] shadow-[0_4px_24px_rgba(100,60,0,0.06)] hover:shadow-[0_12px_36px_rgba(100,60,0,0.13)] hover:-translate-y-1.5 hover:border-gold/40 transition-all duration-300 cursor-pointer"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full block transition-transform duration-400 group-hover:scale-[1.03]"
              />
            </a>
          ))}
        </div>

        {/* Highlighted CTA block */}
        <div className="bg-[#FBF8F2] rounded-2xl border border-[#EDE8DF] p-8 lg:p-10 text-center shadow-[0_4px_24px_rgba(100,60,0,0.06)]">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-md">
              <Tag size={20} color="#fff" strokeWidth={2} />
            </div>
          </div>
          <p className="font-black text-ink text-lg lg:text-xl mb-1.5">สนใจโปรโมชั่น?</p>
          <p className="text-ink-muted text-sm mb-7">ติดต่อทีมงานได้เลยทันที ฟรีค่าปรึกษา</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="tel:0618437666" className="btn-gold">
              <Phone size={16} strokeWidth={2.5} /> 061-843-7666
            </a>
            <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer" className="btn-pink">
              <MessageCircle size={16} strokeWidth={2.5} /> LINE @dede1721
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
