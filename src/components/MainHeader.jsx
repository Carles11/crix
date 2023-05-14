import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Logo from '../components/Logo'

import '../css/mainHeader.css'

const MainHeader = (props) => {
  const { DIC, handleDIC } = props

  const pickTheLang = (langPick) => {
    handleDIC(langPick)
  }
  return (
    <header className="header">
      <Logo />
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li className="nodecoration">
          <Link to="/whatandwithwho">
            <input className="menu-btn" type="checkbox" id="menu-btn" />

            <h6>{DIC.NAV_SERVICES}</h6>
          </Link>
        </li>
        <li className="nodecoration">
          <Link to="/about-us">
            <input className="menu-btn" type="checkbox" id="menu-btn" />

            <h6>{DIC.NAV_ABOUT_US}</h6>
          </Link>
        </li>
        <li className="nodecoration">
          <input className="menu-btn" type="checkbox" id="menu-btn" />

          <Link to="/contact">
            <h6>{DIC.NAV_CONTACT}</h6>
          </Link>
        </li>
      </ul>
      <div className="languages">
        <button className="language-button" onClick={() => pickTheLang('en')}>
          ENG
        </button>
        <button className="language-button" onClick={() => pickTheLang('de')}>
          DE
        </button>
        <button className="language-button" onClick={() => pickTheLang('es')}>
          ESP
        </button>
      </div>
    </header>
  )
}

MainHeader.propTypes = {
  DIC: PropTypes.object.isRequired,
  handleDIC: PropTypes.func.isRequired,
  // Add PropTypes declarations for other props used in Header.jsx
}

export default MainHeader
