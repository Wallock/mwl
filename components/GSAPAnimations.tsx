"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimations() {
  useEffect(() => {
    /* ── 1. Scroll progress bar ────────────────────────────────── */
    const bar = document.createElement("div");
    bar.id = "gsap-progress";
    bar.style.cssText = [
      "position:fixed", "top:0", "left:0", "height:3px", "z-index:9999",
      "width:0%", "pointer-events:none",
      "background:linear-gradient(90deg,#C9A96E 0%,#E8A870 50%,#D4576E 100%)",
      "box-shadow:0 0 8px rgba(201,169,110,0.6)",
    ].join(";");
    document.body.appendChild(bar);

    ScrollTrigger.create({
      start: 0,
      end: "max",
      scrub: 0,
      onUpdate: (self) => {
        bar.style.width = `${self.progress * 100}%`;
      },
    });

    /* ── 2. Blob parallax ──────────────────────────────────────── */
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-blob]").forEach((blob) => {
        const section = blob.closest("section") ?? blob.parentElement;
        gsap.to(blob, {
          y: -90,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });

      /* ── 3. Replace CSS animate-float with GSAP ──────────────── */
      gsap.utils.toArray<HTMLElement>(".animate-float").forEach((el) => {
        (el as HTMLElement).style.animation = "none";
        gsap.fromTo(
          el,
          { y: 0 },
          { y: -14, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1 }
        );
      });

      /* ── 4. sec-badge pop-in (after Reveal has settled) ─────── */
      gsap.utils.toArray<HTMLElement>(".sec-badge").forEach((el) => {
        gsap.from(el, {
          scale: 0.65,
          opacity: 0,
          duration: 0.55,
          ease: "back.out(2.5)",
          delay: 0.25,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      /* ── 5. Numbered steps shimmer on hover (CloneTrust) ─────── */
      gsap.utils.toArray<HTMLElement>(".shimmer-bar").forEach((el) => {
        gsap.set(el, { backgroundSize: "250% auto" });
        gsap.to(el, {
          backgroundPosition: "250% center",
          duration: 2.2,
          ease: "none",
          repeat: -1,
        });
      });
    });

    /* ── 6. Magnetic CTA buttons ───────────────────────────────── */
    const btns = Array.from(
      document.querySelectorAll<HTMLElement>(".btn-gold, .btn-pink, .foot-contact")
    );
    const evtCleanups: Array<() => void> = [];

    btns.forEach((btn) => {
      const onMove = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.2;
        const y = (e.clientY - r.top - r.height / 2) * 0.2;
        gsap.to(btn, { x, y, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      };
      const onLeave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)", overwrite: "auto" });
      };
      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      evtCleanups.push(() => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
        gsap.killTweensOf(btn);
      });
    });

    /* ── 7. Card hover micro-lift (service/package/review cards) ─ */
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>("[class*='rounded-2xl'][class*='border'][class*='hover']")
    );
    const cardCleanups: Array<() => void> = [];

    cards.slice(0, 30).forEach((card) => {
      const onEnter = () =>
        gsap.to(card, { scale: 1.01, duration: 0.25, ease: "power2.out", overwrite: "auto" });
      const onLeave = () =>
        gsap.to(card, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)", overwrite: "auto" });
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      cardCleanups.push(() => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
        gsap.killTweensOf(card);
      });
    });

    return () => {
      bar.remove();
      ctx.revert();
      evtCleanups.forEach((fn) => fn());
      cardCleanups.forEach((fn) => fn());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
