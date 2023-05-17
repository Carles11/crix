import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import logo from '../assets/logos/crix-design-logo-white_transp-500.png'
import '../css/logo.css'
const Logo = ({ handleClick }) => {
  return (
    <Link
      to="/"
      className="menu-logo dont-underline"
      onClick={() => handleClick('logo-click')}
    >
      <img
        height="120px"
        width="120px"
        src={logo}
        alt="Logo of CriX web development javascript"
      />
    </Link>
  )
}

Logo.propTypes = {
  handleClick: PropTypes.function,
}

export default Logo
