import React, { useEffect, useState } from 'react'

import Footer from './components/Footer'
import MainHeader from './components/MainHeader'
import { getDictionary } from './utils/dictionary'

import AllRoutes from './Routes'

const App = (props) => {
  let DIC
  DIC = getDictionary()
  const [language, setLanguage] = useState('')
  const [activeDIC, setActiveDIC] = useState({})

  useEffect(() => {
    DIC = getDictionary(language ? language : 'en')
    setActiveDIC(DIC)
  }, [language, DIC])

  return (
    <>
      {/* <Header DIC={activeDIC} handleDIC={setLanguage} /> */}
      <MainHeader DIC={activeDIC} handleDIC={setLanguage} />
      <AllRoutes {...props} DIC={activeDIC} />
      <Footer DIC={activeDIC} />
    </>
  )
}

export default App
