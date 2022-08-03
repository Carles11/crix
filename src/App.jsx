import React, { Fragment } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import getDictionary from './views/utils/dictionary'

import AllRoutes from './Routes'

const DIC = getDictionary()

console.log('DIDIDI', DIC)
const App = (props) => {
  return (
    <Fragment>
      <Header DIC={DIC} />
      <AllRoutes {...props} DIC={DIC} />
      <Footer DIC={DIC} />
    </Fragment>
  )
}

export default App
