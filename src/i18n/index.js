import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pl from './lang/pl.json';
import en from './lang/en.json';

const localLang = document.documentElement.lang || navigator.language;

i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: pl },
    en: { translation: en },
  },
  lng: localLang,
  fallbackLng: 'pl',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;