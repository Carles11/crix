import React from 'react'

import { Link } from 'react-router-dom'

import '../css/navigation.css'

class NavigationDesktop extends React.Component {
  render() {
    return (
      <div className="menu-items-container">
        <Link to="/services">
          <h6 className="menu-item-link">Servicios</h6>
        </Link>
        <Link to="/about-us">
          <h6 className="menu-item-link">Sobre Carles</h6>
        </Link>
        <Link to="/contact">
          <h6 className="menu-item-link">Contacta</h6>
        </Link>
      </div>
    )
  }
}

export default NavigationDesktop
