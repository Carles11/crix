import React from 'react'

import { Link } from 'react-router-dom'

import '../css/navigation.css'

class NavigationDesktop extends React.Component {
  render() {
    return (
      <div className="menu-items-container">
        <Link to="/whatandwithwho">
          <h6>Qué hago y con quién trabajo</h6>
        </Link>
        <Link to="/about-us">
          <h6>Sobre Carles</h6>
        </Link>
        <Link to="/contact">
          <h6>Contacta</h6>
        </Link>
      </div>
    )
  }
}

export default NavigationDesktop
