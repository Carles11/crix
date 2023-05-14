import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Logo from '../components/Logo'

import '../css/mainHeader.css'

const MainHeader = (props) => {
  const { DIC, handleDIC } = props
  const [showMenu, setShowMenu] = useState(false)

  const [isMobile, setIsMobile] = useState(false)

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  const pickTheLang = (langPick) => {
    handleDIC(langPick)
  }

  const handleClick = () => {
    if (isMobile) {
      setShowMenu(!showMenu)
    }
    return
  }
  return (
    <header className="header">
      <Logo />
      {!showMenu && (
        <label
          className={`menu-icon${showMenu ? '_checked' : ''}`}
          onClick={handleClick}
        >
          <span className={`navicon${showMenu ? '_checked' : ''}`}></span>
        </label>
      )}
      <ul className={`menu${showMenu ? '_checked' : ''}`}>
        <li className="nodecoration" onClick={handleClick}>
          <Link to="/whatandwithwho">
            <h6>{DIC.NAV_SERVICES}</h6>
          </Link>
        </li>
        <li className="nodecoration" onClick={handleClick}>
          <Link to="/about-us">
            <h6>{DIC.NAV_ABOUT_US}</h6>
          </Link>
        </li>
        <li className="nodecoration" onClick={handleClick}>
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
