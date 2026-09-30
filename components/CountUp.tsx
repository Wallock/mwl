"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CountUp({
  end,
  suffix = "",
  decimals = 0,
  className = "",
  duration = 2.2,
}: {
  end: number;
  suffix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const obj = useRef({ n: 0 });
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          if (fired.current) return;
          fired.current = true;
          obj.current.n = 0;
          gsap.to(obj.current, {
            n: end,
            duration,
            ease: "power2.out",
            onUpdate() {
              setVal(parseFloat(obj.current.n.toFixed(decimals)));
            },
          });
        },
      });
    });

    return () => ctx.revert();
  }, [end, decimals, duration]);

  const display =
    decimals > 0
      ? val.toFixed(decimals)
      : end >= 1000
      ? Math.floor(val).toLocaleString()
      : Math.floor(val).toString();

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
