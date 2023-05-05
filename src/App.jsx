import React, { useEffect, useState } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import { getDictionary } from './utils/dictionary'

import AllRoutes from './Routes'

const App = (props) => {
  const [language, setLanguage] = useState('')

  let DIC
  DIC = getDictionary()

  useEffect(() => {
    DIC = getDictionary(language)
    console.log({ language })
    console.log({ DIC })
  }, [language])

  return (
    <>
      <Header DIC={DIC} handleDIC={setLanguage} />
      <AllRoutes {...props} DIC={DIC} />
      <Footer DIC={DIC} />
    </>
  )
}

export default App
