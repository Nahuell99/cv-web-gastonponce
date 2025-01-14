import React from "react";
import "./LanguageSwitch.css"; // Archivo CSS para los estilos
import ukFlag from "../../assets/uk-flag.svg";
import spainFlag from "../../assets/spain-flag.svg";

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
          src={language === "en" ? ukFlag : spainFlag}
          alt={language === "en" ? "English" : "Español"}
        />
      </div>
    </div>
  );
};

export default LanguageSwitch;
