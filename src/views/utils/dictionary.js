import en from './dictionaries/en.json'
import es from './dictionaries/es.json'

const dictionaries = {
  en,
  es,
}

const getDictionary = (lang = 'es') => dictionaries[lang]

export default getDictionary
