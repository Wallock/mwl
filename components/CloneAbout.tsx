"use client";
import Reveal from "./Reveal";
import { ShieldCheck, Stethoscope, FileCheck, GraduationCap, MapPin } from "lucide-react";
import YoutubeEmbed from "./YoutubeEmbed";
import { motion } from "framer-motion";
import { useT } from "@/context/LanguageContext";

const checkIcons = [Stethoscope, ShieldCheck, FileCheck, GraduationCap, MapPin];

export default function CloneAbout() {
  const T = useT();
  const checks = T.about.checks.map((text, i) => ({ Icon: checkIcons[i], text }));
  const stats = [
    { n: "20+",  l: T.about.statYears },
    { n: "95K+", l: T.about.statReviews },
    { n: "56",   l: T.about.statProvinces },
  ];
  return (
    <section className="relative bg-white overflow-hidden py-16 lg:py-28">
      <div className="bg-grid absolute inset-0 pointer-events-none z-0 opacity-50" />
      <div className="pointer-events-none absolute -top-20 -right-20 w-[560px] h-[560px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.14) 0%, transparent 70%)", filter: "blur(100px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <Reveal delay={0} className="order-1 text-center lg:text-left">

            <span className="sec-badge">{T.about.badge}</span>

            <h2
              className="font-black leading-[1.1] mt-4 mb-5"
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                color: "#1A1410",
              }}
            >
              {T.about.heading}
              <br />
              <span style={{
                background: "linear-gradient(135deg, #C9A96E 0%, #9E7D48 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                {T.about.headingHighlight}
              </span>
            </h2>

            <p className="leading-relaxed mb-7 text-[16px]" style={{ color: "#5A4A3A", maxWidth: 520 }}>
              {T.about.desc}
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {checks.map(({ Icon, text }) => (
                <motion.div
                  key={text}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3.5 cursor-default"
                  style={{
                    background: "rgba(201,169,110,0.07)",
                    border: "1px solid rgba(201,169,110,0.22)",
                  }}
                  whileHover={{
                    background: "rgba(201,169,110,0.13)",
                    borderColor: "rgba(201,169,110,0.45)",
                    x: 5,
                  }}
                  transition={{ duration: 0.18 }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg, #C9A96E, #9E7D48)", boxShadow: "0 3px 10px rgba(201,169,110,0.35)" }}
                  >
                    <Icon size={16} color="#fff" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] font-bold leading-tight" style={{ color: "#1A1410" }}>{text}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={140} className="order-2">
            <div className="space-y-5">

              {/* Video */}
              <div
                className="relative rounded-2xl overflow-hidden aspect-video"
                style={{
                  border: "2px solid rgba(201,169,110,0.32)",
                  boxShadow: "0 0 0 8px rgba(201,169,110,0.07), 0 28px 90px rgba(100,60,0,0.20)",
                }}
              >
                <YoutubeEmbed videoId="udTUWGXdaDg" title="แม่บ้านดีดี เซอร์วิส" />
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-3 rounded-2xl overflow-hidden"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(201,169,110,0.18)",
                  boxShadow: "0 4px 28px rgba(100,60,0,0.08)",
                }}
              >
                {stats.map(({ n, l }, i) => (
                  <motion.div
                    key={l}
                    className="py-6 text-center"
                    style={i < 2 ? { borderRight: "1px solid rgba(201,169,110,0.14)" } : {}}
                    whileHover={{ background: "rgba(201,169,110,0.05)" }}
                    transition={{ duration: 0.18 }}
                  >
                    <div
                      className="font-black leading-none mb-1.5"
                      style={{
                        fontSize: "clamp(28px, 3.5vw, 40px)",
                        background: "linear-gradient(135deg, #C9A96E, #9E7D48)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {n}
                    </div>
                    <div className="text-[13px] font-semibold" style={{ color: "#7A6555" }}>{l}</div>
                  </motion.div>
                ))}
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
