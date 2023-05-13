import React from 'react'
import PropTypes from 'prop-types'

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

NavigationMobile.propTypes = {
  DIC: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  // Add PropTypes declarations for other props used in NavigationMobile.jsx
}

export default NavigationMobile
