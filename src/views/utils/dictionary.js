import en from './dictionaries/en.json'
import es from './dictionaries/es.json'
import de from './dictionaries/de.json'

const dictionaries = {
  en,
  de,
  es,
}

const getDictionary = (lang = 'en') => dictionaries[lang]

export default getDictionary
