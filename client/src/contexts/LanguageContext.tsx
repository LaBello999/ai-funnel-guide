import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Language, extractLanguageFromPath, setLanguagePreference } from '@/lib/language';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [language, setLanguageState] = useState<Language>('en');

  // Initialize language from URL on mount
  useEffect(() => {
    const lang = extractLanguageFromPath(location);
    setLanguageState(lang);
    setLanguagePreference(lang);
  }, [location]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setLanguagePreference(lang);
  };

  // Simple translation function (can be extended with i18n library later)
  const t = (key: string, fallback: string = key): string => {
    // Placeholder for future translation system
    return fallback;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
