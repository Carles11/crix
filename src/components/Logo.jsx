import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logos/crif_logo75_transp.png'
import '../css/logo.css'
const Logo = () => {
  return (
    <Link to="/" className="menu-logo dont-underline">
      <img
        height="120px"
        width="120px"
        src={logo}
        alt="Logo of CriX web development javascript"
      />
    </Link>
  )
}

export default Logo
