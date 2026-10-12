"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import translations from "@/lib/i18n/translations";

export type Lang = "th" | "en" | "zh" | "ko" | "vi" | "ja" | "my" | "lo";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "th",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("th");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    const valid: Lang[] = ["th", "en", "zh", "ko", "vi", "ja", "my", "lo"];
    if (saved && valid.includes(saved)) setLangState(saved);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("lang", l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

// Main hook — returns full translation object for current language
export function useT() {
  const { lang } = useLanguage();
  return translations[lang];
}
