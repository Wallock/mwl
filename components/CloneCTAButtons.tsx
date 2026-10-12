"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { useT } from "@/context/LanguageContext";

export default function CloneCTAButtons() {
  const T = useT();
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-24"
      style={{ background: "var(--surface-2)" }}
    >
      {/* Gold glow orbs */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.16) 0%, transparent 65%)", filter: "blur(100px)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.10) 0%, transparent 65%)", filter: "blur(80px)" }}
      />
      <div className="bg-dots absolute inset-0 pointer-events-none z-0 opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-5">

        {/* Heading */}
        <Reveal className="text-center mb-10">
          <span className="sec-badge">{T.cta.badge}</span>
          <h2
            className="text-ink font-black mt-3 mb-3"
            style={{ fontSize: "clamp(20px, 5.5vw, 64px)" }}
          >
            {T.cta.heading}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A96E, #9E7D48)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {T.cta.headingHighlight}
            </span>
          </h2>
          <p className="text-ink-muted text-[15px] max-w-sm mx-auto leading-relaxed">
            {T.cta.desc}
          </p>
        </Reveal>

        {/* 2 split-buttons — same row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* PHONE */}
          <Reveal delay={0}>
            <motion.a
              href="tel:0618437666"
              className="flex items-stretch rounded-2xl overflow-hidden"
              style={{
                textDecoration: "none",
                boxShadow: "0 8px 40px rgba(243,0,60,0.38)",
              }}
              whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(243,0,60,0.52)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              {/* Icon panel */}
              <div
                className="flex items-center justify-center shrink-0"
                style={{ background: "#C4006A", padding: "22px 26px" }}
              >
                <Image
                  src="/icon/calling-icon.svg"
                  alt="โทร"
                  width={40}
                  height={40}
                  style={{ filter: "brightness(0) invert(1)", width: 40, height: 40 }}
                />
              </div>
              {/* Text panel */}
              <div
                className="flex flex-col justify-center flex-1 px-5 py-5"
                style={{ background: "linear-gradient(180deg, #FF00CB 0%, #F3003C 100%)" }}
              >
                <span className="text-white font-black" style={{ fontSize: 20, lineHeight: 1.2 }}>{T.cta.callBtn}</span>
                <span className="text-white/85 font-semibold" style={{ fontSize: 15, marginTop: 3 }}>061-843-7666</span>
              </div>
            </motion.a>
          </Reveal>

          {/* LINE */}
          <Reveal delay={100}>
            <motion.a
              href="https://line.me/ti/p/~@dede1721"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-stretch rounded-2xl overflow-hidden"
              style={{
                textDecoration: "none",
                boxShadow: "0 8px 40px rgba(6,109,0,0.38)",
              }}
              whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(6,109,0,0.52)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              {/* Icon panel */}
              <div
                className="flex items-center justify-center shrink-0"
                style={{ background: "#04520A", padding: "22px 26px" }}
              >
                <Image
                  src="/icon/line-icon.svg"
                  alt="LINE"
                  width={40}
                  height={40}
                  style={{ width: 40, height: 40 }}
                />
              </div>
              {/* Text panel */}
              <div
                className="flex flex-col justify-center flex-1 px-5 py-5"
                style={{ background: "linear-gradient(180deg, #3EB600 0%, #066D00 100%)" }}
              >
                <span className="text-white font-black" style={{ fontSize: 20, lineHeight: 1.2 }}>{T.cta.lineBtn}</span>
                <span className="text-white/85 font-semibold" style={{ fontSize: 15, marginTop: 3 }}>@dede1721</span>
              </div>
            </motion.a>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
