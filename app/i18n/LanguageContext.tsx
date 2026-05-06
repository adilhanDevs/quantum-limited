"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, type Language, translations } from "./translations";

export const SUPPORTED_LANGUAGES: Language[] = ["en", "ru", "kg", "zh", "fr", "es"];

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
      if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
        return saved;
      }
    }
    return DEFAULT_LANGUAGE;
  });

  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;

    // Update document title
    const dict = translations[language];
    const path = window.location.pathname === "/" ? "home" : window.location.pathname.replace("/", "");
    const titleKey = `metadata.${path}.title`;
    const pageTitle = dict[titleKey] ?? translations.en[titleKey];
    if (pageTitle) {
      document.title = pageTitle;
    }
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    const dict = translations[language];
    return {
      language,
      setLanguage,
      t: (key: string) => dict[key] ?? translations.en[key] ?? key,
    };
  }, [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
