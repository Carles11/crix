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
        <Link
          className="mobile-menu-link"
          to="/whatandwithwho"
          onClick={this.props.handleClose}
        >
          <h6>Qué hago y con quién trabajo</h6>
        </Link>
        <Link
          className="mobile-menu-link"
          to="/about-us"
          onClick={this.props.handleClose}
        >
          <h6>Sobre Carles</h6>
        </Link>
        <Link
          className="mobile-menu-link"
          to="/contact"
          onClick={this.props.handleClose}
        >
          <h6>Contacta</h6>
        </Link>
      </div>
    )
  }
}

export default NavigationMobile
