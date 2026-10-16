"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ShieldCheck, Settings2 } from "lucide-react";
import { useT } from "@/context/LanguageContext";

export default function CookieBanner() {
  const T = useT();
  const [visible, setVisible] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mw-cookie-consent");
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem("mw-cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("mw-cookie-consent", "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-[9991] flex justify-center pb-5 px-4 pointer-events-none">
          <motion.div
            className="w-full max-w-[500px] pointer-events-auto"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.9 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#fff",
                border: "1.5px solid rgba(201,169,110,0.30)",
                boxShadow: "0 -4px 0 rgba(201,169,110,0.15), 0 8px 48px rgba(26,20,16,0.14)",
              }}
            >
              {/* Gold top bar */}
              <div
                className="h-1"
                style={{
                  background: "linear-gradient(90deg, #C9A96E 0%, #EDD99A 50%, #9E7D48 100%)",
                  backgroundSize: "200% auto",
                  animation: "shimmer-bar 3s linear infinite",
                }}
              />

              <div className="px-5 py-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, #C9A96E, #9E7D48)" }}
                    >
                      <Cookie size={16} color="#fff" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-black text-[14px] leading-tight" style={{ color: "#1A1410" }}>
                        {T.cookie.title}
                      </h3>
                      <p className="text-[11px]" style={{ color: "#9E7D48" }}>
                        {T.cookie.subtitle}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={decline}
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors hover:bg-[rgba(26,20,16,0.06)]"
                    aria-label="ปิด"
                  >
                    <X size={13} strokeWidth={2.5} style={{ color: "#7A6555" }} />
                  </button>
                </div>

                <AnimatePresence>
                  {showDetail && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="rounded-xl px-4 py-3 mb-3 space-y-2"
                        style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.18)" }}
                      >
                        {[
                          { icon: ShieldCheck, label: T.cookie.necessary, desc: T.cookie.necessaryDesc },
                          { icon: Settings2,   label: T.cookie.analytics, desc: T.cookie.analyticsDesc },
                        ].map(({ icon: Icon, label, desc }) => (
                          <div key={label} className="flex items-center gap-3">
                            <Icon size={13} strokeWidth={2} style={{ color: "#9E7D48", flexShrink: 0 }} />
                            <span className="text-[12px] font-bold" style={{ color: "#1A1410" }}>{label}</span>
                            <span className="text-[11px]" style={{ color: "#7A6555" }}>{desc}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex gap-2">
                  <motion.button
                    onClick={accept}
                    className="flex-1 py-2.5 rounded-xl font-black text-[13px] text-white"
                    style={{ background: "linear-gradient(135deg, #C9A96E, #9E7D48)", boxShadow: "0 3px 12px rgba(201,169,110,0.38)" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {T.cookie.acceptAll}
                  </motion.button>

                  <motion.button
                    onClick={() => setShowDetail(v => !v)}
                    className="px-3.5 py-2.5 rounded-xl font-bold text-[12px]"
                    style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.25)", color: "#9E7D48" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                  >
                    {showDetail ? T.cookie.hide : T.cookie.details}
                  </motion.button>

                  <motion.button
                    onClick={decline}
                    className="px-3.5 py-2.5 rounded-xl font-bold text-[12px]"
                    style={{ background: "rgba(26,20,16,0.04)", border: "1px solid rgba(26,20,16,0.08)", color: "#7A6555" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                  >
                    {T.cookie.decline}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
