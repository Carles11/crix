import React from 'react'

import { Link } from 'react-router-dom'

import '../css/navigation.css'

const NavigationDesktop = (props) => {
  const { DIC } = props

  return (
    <div className="menu-items-container">
      <Link to="/whatandwithwho">
        <h6>{DIC.NAV_SERVICES}</h6>
      </Link>
      <Link to="/about-us">
        <h6>{DIC.NAV_ABOUT_US}</h6>
      </Link>
      <Link to="/contact">
        <h6>{DIC.NAV_CONTACT}</h6>
      </Link>
    </div>
  )
}

export default NavigationDesktop
