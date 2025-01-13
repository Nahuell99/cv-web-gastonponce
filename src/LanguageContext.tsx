import React, { createContext, useContext, useState, ReactNode } from "react";
import es from "../locales/es.json";
import en from "../locales/en.json";

// Definir el tipo de las traducciones
type Translations = {
  [key: string]: string; // Claves de tipo string y valores de tipo string
};

const translations = { es, en };

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    // Añadir la comprobación de tipo
    const translation = translations[language] as Translations;
    return translation[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};