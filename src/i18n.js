import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  aze: {
    translation: {
      welcome: "xoş gəlmişsiniz",
      home: { nav: "ana sahifə", header: "bizden alin razi qalin" },
      about: "haqqımızda",
      services: "xidmətlər",
      contact: "əlaqə",
      users: "istifadəçilər",
    },
  },
  en: {
    translation: {
      welcome: "welcome",
      home: { nav: "home", header: "buy from us stay razi" },
      about: "about",
      services: "services",
      contact: "contact",
      users: "users",
    },
  },
};
i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});
export default i18n;
