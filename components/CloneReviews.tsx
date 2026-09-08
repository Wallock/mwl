import { IMG } from "@/lib/images";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function CloneReviews() {
  return (
    <section className="bg-surface-gold py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header with animated stars + count-up score */}
        <Reveal className="text-center mb-10 lg:mb-14">
          <span className="sec-badge">รีวิวจากลูกค้า</span>

          <div className="flex justify-center gap-2 mt-4 mb-3">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="star-pop text-2xl text-gold"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                ★
              </span>
            ))}
          </div>

          <div className="flex items-baseline justify-center gap-2 mb-1">
            <span className="font-display font-black bg-gradient-to-b from-gold to-gold-dark bg-clip-text text-transparent leading-none animate-gold-glow" style={{ fontSize: "clamp(48px,8vw,72px)" }}>
              <CountUp end={4.9} decimals={1} />
            </span>
            <span className="text-ink-subtle text-xl">/5.0</span>
          </div>

          <p className="text-ink-muted text-sm">
            จาก{" "}
            <span className="font-bold text-ink">
              <CountUp end={95742} suffix=" รีวิวจริง" />
            </span>
          </p>
        </Reveal>

        {/* Review grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {IMG.review.map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="review-card">
                <img src={src} alt={`รีวิวลูกค้า ${i + 1}`} className="w-full block" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="tel:0618437666" className="btn-gold">📞 โทรสอบถามบริการ</a>
        </div>
      </div>
    </section>
  );
}
