import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import CrossMenu from './CrossMenu'

const NavigationMobile = (props) => {
  const { DIC, handleClose } = props

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-cross">
        <CrossMenu handleClose={handleClose} />
      </div>
      <Link
        className="mobile-menu-link"
        to="/whatandwithwho"
        onClick={handleClose}
      >
        <h6>{DIC.NAV_SERVICES}</h6>
      </Link>
      <Link className="mobile-menu-link" to="/about-us" onClick={handleClose}>
        <h6>{DIC.NAV_ABOUT_US}</h6>
      </Link>
      <Link className="mobile-menu-link" to="/contact" onClick={handleClose}>
        <h6>{DIC.NAV_CONTACT}</h6>
      </Link>
    </div>
  )
}

export default NavigationMobile
