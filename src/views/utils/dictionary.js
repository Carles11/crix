import en from './dictionaries/en.json';
import es from './dictionaries/es.json';

const dictionaries = {
  en,
  es,
};

export default function getLanguage(lang) {
  return dictionaries[lang];
}
