"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/translations";

type Language = "en" | "ar";
type Direction = "ltr" | "rtl";

type LanguageContextType = {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  tArr: (key: string) => any[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [direction, setDirection] = useState<Direction>("ltr");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      const savedLang = localStorage.getItem("language") as Language;
      if (savedLang && (savedLang === "en" || savedLang === "ar")) {
        setLanguageState(savedLang);
        setDirection(savedLang === "ar" ? "rtl" : "ltr");
        document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = savedLang;
      }
      setIsHydrated(true);
    });
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const dir = lang === "ar" ? "rtl" : "ltr";
    setDirection(dir);
    localStorage.setItem("language", lang);
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  };

  const resolveTranslation = (
    namespace: Record<string, unknown>,
    path: string,
  ): any => {
    const keys = path.split(".");
    let current: unknown = namespace;

    for (const key of keys) {
      if (
        current &&
        typeof current === "object" &&
        key in (current as Record<string, unknown>)
      ) {
        current = (current as Record<string, unknown>)[key];
      } else {
        return null;
      }
    }

    return current;
  };

  const t = (path: string) => {
    const languageNamespace = (translations as Record<string, unknown>)[language] as Record<string, unknown>;
    let translation = resolveTranslation(languageNamespace, path);

    if (!translation) {
      const fallbackPath = path.toLowerCase();
      if (fallbackPath !== path) {
        translation = resolveTranslation(languageNamespace, fallbackPath);
      }
    }

    if (!translation) {
      console.warn(`Translation missing for key: ${path}`);
      return path;
    }

    return translation;
  };

  const tArr = (path: string): any[] => {
    const value = t(path);
    if (Array.isArray(value)) {
      return value;
    }
    // If the value is the key itself (fallback) or not an array, return empty array
    return [];
  };

  if (!isHydrated) return null;

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t, tArr }}>
      <div
        dir={direction}
        className={direction === "rtl" ? "font-arabic" : "font-sans"}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

