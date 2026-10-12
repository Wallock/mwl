"use client";
import { CheckCheck, Star, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useT } from "@/context/LanguageContext";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(tick);
            else setValue(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </div>
  );
}

// ─── Desktop ──────────────────────────────────────────────────────────────────
function HeroDesktop() {
  const T = useT();
  return (
    <section className="hidden lg:block" style={{ position: "relative", lineHeight: 0 }}>
      <Image
        src="/images/bg_header.webp"
        alt="แม่บ้านดีดี เซอร์วิส"
        width={1920}
        height={800}
        priority
        sizes="100vw"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      {/* dark overlay left side */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, rgba(0,0,0,0.10) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating text — right side */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "5vw",
          zIndex: 2,
          width: "40%",
          fontFamily: '"Anuphan", sans-serif',
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.7vw",
            marginBottom: "1.5vw",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              height: "1px",
              width: "5.5vw",
              background: "linear-gradient(90deg, transparent, #C9A96E)",
              display: "block",
            }}
          />
          <span
            style={{
              fontSize: "1.65vw",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#9E7D48",
              padding: "0.4vw 0.4vw",
            }}
          >
            {T.hero.badge}
          </span>
          <span
            style={{
              height: "1px",
              width: "5.5vw",
              background: "linear-gradient(90deg, #C9A96E, transparent)",
              display: "block",
            }}
          />
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontSize: "3.5vw",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#1A1008",
            margin: 0,
            letterSpacing: "-0.02em",
            textShadow: "0 1px 2px rgba(255,255,255,0.4)",
          }}
        >
          {T.hero.heading1}
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #FF0080 0%, #FF4DAD 50%, #FF0080 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "3.4vw",
              filter: "drop-shadow(0 1px 4px rgba(255,0,128,0.40))",
            }}
          >
            {T.hero.heading2}
          </span>
          <br />
          <span style={{ fontSize: "3vw" }}>{T.hero.heading3}</span>
        </h1>

        {/* Sub */}
        <p
          style={{
            margin: "1.5vw 0",
            fontSize: "1.3vw",
            fontWeight: 700,
            color: "#4A3020",
            lineHeight: 0.5,
          }}
        >
          {T.hero.desc}
          <span style={{ color: "#FF0080", fontWeight: 700 }}>
            {" "}
            {T.hero.descHighlight}
          </span>
        </p>

        {/* Divider */}
        <div
          style={{
            margin: "1.5vw 0 1.2vw",
            display: "flex",
            alignItems: "center",
            gap: "0.6vw",
          }}
        >
          <div
            style={{
              height: "2px",
              flex: 1,
              background:
                "linear-gradient(90deg, rgba(201,169,110,0.4), transparent)",
              borderRadius: 2,
            }}
          />
        </div>

        {/* Sub - True */}
        <span style={{
          display: "inline-flex", alignItems: "stretch",
          borderRadius: "0.6vw", overflow: "hidden",
          fontSize: "1.3vw", fontWeight: 700,
        }}>
          <span style={{
            background: "#15803d",
            padding: "0.4vw 0.9vw",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <CheckCheck size="1.5em" color="#fff" strokeWidth={2.5} />
          </span>
          <span style={{
            background: "#166534",
            color: "#fff",
            padding: "0.4vw 0.9vw",lineHeight: 1.3,
            display: "flex", alignItems: "center",
          }}>
            {T.hero.greenBadge}
          </span>
        </span>

        {/* Trust stats row */}
        <div style={{ display: "flex", gap: "0.8vw", marginTop: "1.5vw" }}>
          {(
            [
              { target: 95, suffix: "K+", label: T.hero.statReviews, Icon: Star },
              { target: 7, suffix: "+", label: T.hero.statYears, Icon: Clock },
              { target: 100, suffix: "%", label: T.hero.statVerified, Icon: ShieldCheck },
            ] as const
          ).map(({ target, suffix, label, Icon }) => (
            <div
              key={label}
              style={{
                flex: 1,
                textAlign: "center",
                background:
                  "linear-gradient(170deg, rgb(255,245,180) 0%, rgb(255,225,110) 45%, rgb(240,195,60) 100%)",
                borderRadius: "1vw",
                border: "1px solid rgba(180,130,40,0.50)",
                borderBottom: "3px solid rgba(160,110,20,0.55)",
                boxShadow:
                  "0 6px 20px rgba(120,80,0,0.22), 0 2px 6px rgba(200,150,30,0.30), inset 0 1px 0 rgba(255,255,255,0.70)",
                padding: "0.5vw 0.8vw 1.2vw",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "40%",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",
                  borderRadius: "1vw 1vw 0 0",
                  pointerEvents: "none",
                }}
              />
              <div style={{
                position: "absolute", top: "50%", left: "-0.9vw",
                transform: "translateY(-50%)",
                opacity: 0.10, pointerEvents: "none",
                color: "#7A4F00",
              }}>
                <Icon size="4.5vw" strokeWidth={1.5} />
              </div>
              <div
                style={{
                  fontSize: "2.4vw", fontWeight: 900, color: "#7A4F00",
                  lineHeight: 1.0, paddingLeft: "2vw", letterSpacing: "0.1em",
                }}
              >
                <CountUp target={target} suffix={suffix} />
              </div>
              <div
                style={{
                  fontSize: "1vw", color: "#8A5E10", fontWeight: 700,
                  marginTop: "0.5vw", paddingLeft: "2vw", letterSpacing: "0.04em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[3px] shimmer-bar" />
    </section>
  );
}

// ─── Mobile ───────────────────────────────────────────────────────────────────
function HeroMobile() {
  const T = useT();
  return (
    <section className="lg:hidden">
      {/* Image — fixed height, never changes */}
      <div className="relative overflow-hidden" style={{ height: "92vw", minHeight: 340 }}>
        <Image
          src="/images/bg_header.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "-80px center", opacity: 0.9 }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(251,248,242,0.70) 80%, #FBF8F2 100%)" }} />
      </div>

      {/* Text block — below image, overlaps slightly */}
      <div className="relative z-10 px-5 pt-4 pb-6 -mt-32" style={{ background: "linear-gradient(to bottom, transparent, #FBF8F2 30%)" }}>
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-px w-10" style={{ background: "linear-gradient(90deg,transparent,#C9A96E)" }} />
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase" style={{ color: "#9E7D48" }}>
            {T.hero.badge}
          </span>
          <span className="h-px w-10" style={{ background: "linear-gradient(90deg,#C9A96E,transparent)" }} />
        </div>

        {/* Heading */}
        <h1 className="font-bold leading-snug text-center mb-1" style={{ fontSize: "clamp(26px,7vw,34px)", color: "#1A1008", letterSpacing: "-0.02em" }}>
          {T.hero.heading1}
          <br />
          <span style={{
            background: "linear-gradient(135deg,#FF0080 0%,#FF4DAD 50%,#FF0080 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 1px 3px rgba(255,0,128,0.35))",
          }}>
            {T.hero.heading2}
          </span>
          <br />
          <span style={{ fontSize: "clamp(22px,6vw,30px)" }}>{T.hero.heading3}</span>
        </h1>

        <p className="text-center text-[14px] font-bold mt-2 mb-4" style={{ color: "#4A3020" }}>
          {T.hero.desc}{" "}
          <span style={{ color: "#FF0080" }}>{T.hero.descHighlight}</span>
        </p>

        {/* Green badge */}
        <div className="flex overflow-hidden rounded-xl mb-5 text-[13px] font-bold">
          <span className="flex items-center justify-center px-3 py-2.5 shrink-0" style={{ background: "#15803d" }}>
            <CheckCheck size={18} color="#fff" strokeWidth={2.5} />
          </span>
          <span className="flex items-center px-3 py-2.5 leading-snug" style={{ background: "#166534", color: "#fff" }}>
            {T.hero.greenBadge}
          </span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {(
            [
              { target: 95, suffix: "K+", label: T.hero.statReviews, Icon: Star },
              { target: 7, suffix: "+", label: T.hero.statYears, Icon: Clock },
              { target: 100, suffix: "%", label: T.hero.statVerified, Icon: ShieldCheck },
            ] as const
          ).map(({ target, suffix, label, Icon }) => (
            <div
              key={label}
              className="text-center relative overflow-hidden rounded-2xl py-3 px-2"
              style={{
                background: "linear-gradient(170deg,rgb(255,245,180) 0%,rgb(255,225,110) 45%,rgb(240,195,60) 100%)",
                border: "1px solid rgba(180,130,40,0.50)",
                borderBottom: "3px solid rgba(160,110,20,0.55)",
                boxShadow: "0 4px 16px rgba(120,80,0,0.18),inset 0 1px 0 rgba(255,255,255,0.70)",
              }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg,rgba(255,255,255,0.30) 0%,transparent 50%)", borderRadius: "inherit" }} />
              <div className="text-[22px] font-black" style={{ color: "#7A4F00", lineHeight: 1 }}>
                <CountUp target={target} suffix={suffix} />
              </div>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Icon size={11} style={{ color: "#8A5E10" }} strokeWidth={2} />
                <span className="text-[11px] font-bold" style={{ color: "#8A5E10" }}>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 h-[3px] shimmer-bar" />
    </section>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────
export default function CloneHero() {
  return (
    <>
      <HeroDesktop />
      <HeroMobile />
    </>
  );
}
