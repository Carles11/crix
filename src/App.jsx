import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import { getDictionary } from './views/utils/dictionary'

import AllRoutes from './Routes'

let DIC

DIC = getDictionary()

const setDictionary = (lang) => {
  console.log('setDictionary_lang', lang)

  DIC = getDictionary(lang)
}

const App = (props) => {
  return (
    <>
      <Header DIC={DIC} handleDIC={setDictionary} />
      <AllRoutes {...props} DIC={DIC} />
      <Footer DIC={DIC} />
    </>
  )
}

export default App
