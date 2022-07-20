import React from 'react'

import { Link } from 'react-router-dom'

import '../css/navigation.css'

class NavigationDesktop extends React.Component {
  render() {
    return (
      <div className="menu-items-container">
        <Link to="/services">
          <h5 className="menu-item-link">Servicios</h5>
        </Link>
        <Link to="/about-us">
          <h5 className="menu-item-link">Sobre Carles</h5>
        </Link>
        <Link to="/contact">
          <h5 className="menu-item-link">Contacta</h5>
        </Link>
      </div>
    )
  }
}

export default NavigationDesktop
