import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './views/Landing'
import Whatandwithwho from './views/Whatandwithwho'
import Contact from './views/Contact'
import AboutUs from './views/AboutUs'
import Datenschutzerklaerung from './views/Datenschutzerklaerung'
import Impressum from './views/Impressum'
import NotFound from './views/NotFound'

const AllRoutes = (props) => {
  const { DIC } = props
  return (
    <Routes onChange={() => window.scrollTo(0, 0)}>
      <Route exact path="/" element={<Landing DIC={DIC} />} />
      <Route path="/whatandwithwho" element={<Whatandwithwho DIC={DIC} />} />
      <Route path="/contact" element={<Contact DIC={DIC} />} />
      <Route path="/about-us" element={<AboutUs DIC={DIC} />} />
      <Route path="*" element={<NotFound DIC={DIC} />} />
      <Route
        path="/datenschutzerklaerung"
        element={<Datenschutzerklaerung DIC={DIC} />}
      />
      <Route path="/impressum" element={<Impressum DIC={DIC} />} />
    </Routes>
  )
}

export default AllRoutes
