"use client";
import { CheckCheck, Star, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

export default function CloneHero() {
  return (
    <section style={{ position: "relative", lineHeight: 0 }}>
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
            เปิดบริการมากกว่า 7 ปี
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
          แม่บ้านดีดี บริการจัดหา
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
            แม่บ้าน · พี่เลี้ยงน้อง
          </span>
          <br />
          <span style={{ fontSize: "3vw" }}>คนดูแลผู้สูงอายุ</span>
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
          ที่มีคุณภาพและมากประสบการณ์
          <span style={{ color: "#FF0080", fontWeight: 700 }}>
            {" "}
            พร้อมจัดส่งทั่วประเทศไทย
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
            บริการรวดเร็วทันใจ มีทีมงานให้คำปรึกษา<br/>พร้อมจัดหาคน ได้ตามความต้องการทันที
          </span>
        </span>

        {/* Trust stats row */}
        <div style={{ display: "flex", gap: "0.8vw", marginTop: "1.5vw" }}>
          {(
            [
              { target: 95, suffix: "K+", label: "รีวิว", Icon: Star },
              { target: 7, suffix: "+", label: "ปีที่เปิดบริการ", Icon: Clock },
              { target: 100, suffix: "%", label: "ตรวจสอบแล้ว", Icon: ShieldCheck },
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
              {/* top gloss */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",
                  borderRadius: "1vw 1vw 0 0",
                  pointerEvents: "none",
                }}
              />
              {/* icon watermark */}
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
                  fontSize: "2.4vw",
                  fontWeight: 900,
                  color: "#7A4F00",
                  lineHeight: 1.0,
                  paddingLeft: "2vw",
                  letterSpacing: "0.1em",
                }}
              >
                <CountUp target={target} suffix={suffix} />
              </div>
              <div
                style={{
                  fontSize: "1vw",
                  color: "#8A5E10",
                  fontWeight: 700,
                  marginTop: "0.5vw",
                  paddingLeft: "2vw",
                  letterSpacing: "0.04em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Animated shimmer gold bar */}
      <div className="h-[3px] shimmer-bar" />
    </section>
  );
}
