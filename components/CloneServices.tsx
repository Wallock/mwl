"use client";
import Image from "next/image";
import { IMG } from "@/lib/images";
import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";
import { useT } from "@/context/LanguageContext";

export default function CloneServices() {
  const T = useT();

  const services = [
    { img: IMG.maid,  name: T.services.maid,  price: `11,000 - 13,000 ${T.services.priceMonth}`, href: "/services/maid"  },
    { img: IMG.nanny, name: T.services.nanny, price: `12,000 - 15,000 ${T.services.priceMonth}`, href: "/services/nanny" },
    { img: IMG.elder, name: T.services.elder, price: `12,000 - 16,000 ${T.services.priceMonth}`, href: "/services/elder" },
    { img: IMG.labor, name: T.services.labor, price: `353 - 500 ${T.services.priceDay}`,          href: "/services/labor" },
  ];

  return (
    <section className="relative bg-white overflow-hidden py-12 lg:py-16">
      <div className="bg-grid absolute inset-0 pointer-events-none z-0 opacity-60" />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full z-0"
        style={{
          background: "radial-gradient(ellipse, rgba(201,169,110,0.14) 0%, transparent 70%)",
          filter: "blur(130px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <Reveal className="text-center mb-10 lg:mb-14">
          <span className="sec-badge">{T.services.badge}</span>
          <h2
            className="font-black text-ink mt-3 mb-2"
            style={{ fontSize: "clamp(34px,4vw,52px)" }}
          >
            {T.services.heading}{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#C9A96E,#9E7D48)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {T.services.headingHighlight}
            </span>
          </h2>
          <p className="text-[15px] lg:text-[17px] max-w-sm mx-auto leading-relaxed" style={{ color: "#7A6555" }}>
            {T.services.desc}
          </p>
        </Reveal>

        {/* 4 equal cards — 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((s, i) => (
            <Reveal key={s.href} delay={i * 70}>
              <a
                href={s.href}
                className="group relative block rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(100,60,0,0.08)] hover:shadow-[0_20px_60px_rgba(100,60,0,0.18)] hover:-translate-y-2 transition-all duration-300"
                style={{ textDecoration: "none", aspectRatio: "3/4" }}
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width:1024px) 50vw, 25vw"
                    priority={i === 0}
                  />
                </div>

                {/* Permanent gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                {/* Hover deepen */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.20) 55%, transparent 100%)" }}
                />

                {/* Bottom text */}
                <div className="absolute inset-x-0 bottom-0 px-4 pt-2 pb-0 z-10">
                  <h3
                    className="font-black text-white leading-tight mb-1"
                    style={{ fontSize: "clamp(20px,2.2vw,28px)" }}
                  >
                    {s.name}
                  </h3>
                  <p className="text-[14px] font-bold" style={{ color: "#EDD99A" }}>
                    {s.price}
                  </p>
                  <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-white/85 text-[13px] font-semibold">{T.services.detailsBtn}</span>
                    <ArrowRight size={12} strokeWidth={2.5} className="text-white/85" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
