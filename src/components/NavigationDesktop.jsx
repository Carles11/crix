import React from 'react'
import PropTypes from 'prop-types'

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

NavigationDesktop.propTypes = {
  DIC: PropTypes.object.isRequired,
  // Add PropTypes declarations for other props used in NavigationDesktop.jsx
}

export default NavigationDesktop
