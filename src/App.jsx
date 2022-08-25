import React, { Fragment } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import getDictionary from './views/utils/dictionary'

import AllRoutes from './Routes'

let DIC = getDictionary()

const App = (props) => {
  const setDictionary = (lang) => {
    console.log('setDictionary', lang)
    console.log('typOFLANG appppp', typeof lang)

    DIC = getDictionary(lang)
  }
  return (
    <Fragment>
      <Header DIC={DIC} handleDIC={setDictionary} />
      <AllRoutes {...props} DIC={DIC} />
      <Footer DIC={DIC} />
    </Fragment>
  )
}

export default App
