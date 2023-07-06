import React from "react";
import { useTranslation } from "react-i18next";
import Home from "./Home";
const SelectLanguage = () => {
  const { t, i18n } = useTranslation();
  const clickHandle = async (language) => {
    await i18n.changeLanguage(language);
  };
  return (
    <div>
      Aktiv dil : {i18n.language}
      <br />
      <button onClick={() => clickHandle("aze")}>Aze</button>
      <button onClick={() => clickHandle("en")}>En</button>
      <br />
      {/* <br /> {t("welcome")} */}
      <Home welcome={t("welcome")} />
    </div>
  );
};

export default SelectLanguage;
