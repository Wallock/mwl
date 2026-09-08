import { IMG } from "@/lib/images";

const packages = [
  { src: IMG.pkg1, alt: "โปรโมชั่น 3,500 บาท" },
  { src: IMG.pkg2, alt: "โปรโมชั่น 5,000 บาท" },
  { src: IMG.pkg3, alt: "โปรโมชั่น 7,000 บาท" },
  { src: IMG.pkg4, alt: "โปรโมชั่น 10,000 บาท" },
];

export default function ClonePackages() {
  return (
    <section className="bg-cream py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-5">

        <div className="text-center mb-8 lg:mb-12">
          <span className="sec-badge">โปรโมชั่น</span>
          <h2 className="text-3xl lg:text-[2.5rem] font-black text-ink mt-3 mb-2">
            แพ็กเกจ{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">พิเศษ</span>
          </h2>
          <p className="text-ink-muted text-sm max-w-xs mx-auto">คุ้มค่าทุกงบประมาณ สอบถามได้เลย</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 mb-8 lg:mb-10">
          {packages.map((p) => (
            <a key={p.alt} href="tel:0618437666" className="pkg-card block group overflow-hidden">
              <img
                src={p.src}
                alt={p.alt}
                className="w-full block transition-transform duration-400 group-hover:scale-[1.03]"
              />
            </a>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-border p-6 lg:p-8 text-center shadow-sm">
          <p className="font-bold text-ink text-base lg:text-lg mb-1">สนใจโปรโมชั่น?</p>
          <p className="text-ink-muted text-sm mb-5">ติดต่อทีมงานได้เลยทันที ฟรีค่าปรึกษา</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="tel:0618437666" className="btn-gold">📞 061-843-7666</a>
            <a href="https://line.me/ti/p/~@dede1721" target="_blank" rel="noopener noreferrer" className="btn-pink">
              💬 LINE @dede1721
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
