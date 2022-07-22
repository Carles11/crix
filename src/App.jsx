import React, { Fragment } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import AllRoutes from './Routes'

const App = () => {
  return (
    <Fragment>
      <Header />
      <AllRoutes />
      <Footer />
    </Fragment>
  )
}

export default App
