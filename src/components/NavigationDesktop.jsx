import React from 'react'

import { Link } from 'react-router-dom'

import '../css/navigation.css'

class NavigationDesktop extends React.Component {
  render() {
    return (
      <div className="menu-items-container">
        <Link className="menu-item-link" to="/services">
          <h5>Servicios</h5>
        </Link>
        <Link className="menu-item-link" to="/about-us">
          <h5>Sobre Carles</h5>
        </Link>
        <Link className="menu-item-link" to="/contact">
          <h5>Contacta</h5>
        </Link>
      </div>
    )
  }
}

export default NavigationDesktop
