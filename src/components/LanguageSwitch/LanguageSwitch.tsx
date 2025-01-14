import React, { useState } from "react";
import "./LanguageSwitch.css"; // Archivo CSS para los estilos

interface LanguageSwitchProps {
  language: string;
  setLanguage: (lang: "en" | "es") => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <div className="language-switch" onClick={toggleLanguage}>
      <span className={`switch-text ${language === "en" ? "right" : "left"}`}>
        {language === "en" ? "EN" : "ES"}
      </span>
      <div className={`switch-circle ${language === "en" ? "left" : "right"}`}>
        <img
          src={language === "en" ? "/uk-flag.svg" : "/spain-flag.svg"}
          alt={language === "en" ? "English" : "Español"}
        />
      </div>
    </div>
  );
};

export default LanguageSwitch;
