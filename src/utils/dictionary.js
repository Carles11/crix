import de from './dictionaries/de.json'
import en from './dictionaries/en.json'
import es from './dictionaries/es.json'

const dictionaries = {
  en,
  de,
  es,
}

export const getDictionary = (lang = 'en') => dictionaries[lang]
