"use client";
import { useEffect, useRef } from "react";

export default function CloneReviews() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mo = new MutationObserver(() => {
      document.querySelectorAll<HTMLAnchorElement>('a[href*="elfsight.com"][target="_blank"]')
        .forEach((a) => { a.style.setProperty("display", "none", "important"); });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        if (!document.querySelector('script[src*="elfsightcdn.com"]')) {
          const s = document.createElement("script");
          s.src = "https://static.elfsight.com/platform/platform.js";
          s.async = true;
          document.body.appendChild(s);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#FBF8F2] overflow-hidden py-12 lg:py-16" ref={ref}>

      <div data-blob
        className="pointer-events-none absolute -top-20 -right-20 w-[460px] h-[460px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 70%)", filter: "blur(120px)" }}
      />
      <div data-blob
        className="pointer-events-none absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(212,87,110,0.10) 0%, transparent 70%)", filter: "blur(120px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="elfsight-app-4768500b-991c-41c0-98b8-c7de5620a9dc" data-elfsight-app-lazy />
      </div>
    </section>
  );
}
