import React from 'react'

import Navigation from '../components/Navigation'
import Logo from '../components/Logo'

import '../css/header.css'

const Header = () => {
  return (
    <div className="header-nav-wrapper">
      <Logo />
      <Navigation />
    </div>
  )
}

export default Header
