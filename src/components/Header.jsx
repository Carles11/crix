import React from 'react'

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

export default Header
