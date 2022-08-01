import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import CrossMenu from './CrossMenu'

class NavigationMobile extends React.Component {
  render() {
    return (
      <div className="mobile-menu">
        <div className="mobile-menu-cross">
          <CrossMenu handleClose={this.props.handleClose} />
        </div>
        <Link className="mobile-menu-link" to="/whatandwithwho">
          <h4>Qué hago y con quién trabajo</h4>
        </Link>
        <Link className="mobile-menu-link" to="/about-us">
          <h4>Sobre Carles</h4>
        </Link>
        <Link className="mobile-menu-link" to="/contact">
          <h4>Contacta</h4>
        </Link>
      </div>
    )
  }
}

export default NavigationMobile
