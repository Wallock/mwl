import { IMG } from "@/lib/images";
import Reveal from "./Reveal";

export default function CloneGallery() {
  const photos = IMG.gallery;

  return (
    <section className="bg-ground py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-5">

        <Reveal className="text-center mb-8 lg:mb-12">
          <span className="sec-badge">ภาพกิจกรรม</span>
          <h2 className="text-3xl lg:text-[2.5rem] font-black text-ink mt-3 mb-2">
            บรรยากาศ{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              การทำงาน
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {photos.map((src, i) => (
            <Reveal key={i} delay={i * 60} className="overflow-hidden">
              <div className="gallery-photo overflow-hidden group">
                <img
                  src={src}
                  alt={`กิจกรรม ${i + 1}`}
                  className="w-full block object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.maidwonderland.com/gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pink"
          >
            ดูรูปกิจกรรมทั้งหมด →
          </a>
        </div>
      </div>
    </section>
  );
}
