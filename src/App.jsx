import React, { useEffect, useState } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import { getDictionary } from './utils/dictionary'

import AllRoutes from './Routes'

const App = (props) => {
  let DIC
  DIC = getDictionary()
  const [language, setLanguage] = useState('')
  const [activeDIC, setActiveDIC] = useState({})

  useEffect(() => {
    DIC = getDictionary(language ? language : 'en')
    console.log({ language })
    setActiveDIC(DIC)
  }, [language, DIC])

  console.log({ activeDIC })
  return (
    <>
      <Header DIC={activeDIC} handleDIC={setLanguage} />
      <AllRoutes {...props} DIC={activeDIC} />
      <Footer DIC={activeDIC} />
    </>
  )
}

export default App
