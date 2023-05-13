import React from 'react'
import PropTypes from 'prop-types'

import Navigation from '../components/Navigation'
import Logo from '../components/Logo'

import '../css/header.css'

const Header = (props) => {
  const { DIC, handleDIC } = props

  return (
    <div className="header-nav-wrapper">
      <Logo />
      <Navigation DIC={DIC} handleDIC={handleDIC} />
    </div>
  )
}

Header.propTypes = {
  DIC: PropTypes.object.isRequired,
  handleDIC: PropTypes.func.isRequired,
  // Add PropTypes declarations for other props used in Header.jsx
}

export default Header
