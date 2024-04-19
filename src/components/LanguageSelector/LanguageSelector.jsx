import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select className="selector" onChange={changeLanguage}>
      <option className="options" value="es">
        Español
      </option>
      <option className="options" value="en">
        English
      </option>
    </select>
  );
}

export default LanguageSelector;
