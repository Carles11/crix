import React from 'react'
import PropTypes from 'prop-types'

import '../css/burgerMenu.css'

class BurgerMenu extends React.Component {
  render() {
    return (
      <nav>
        <div />
        <div />
        <div />

        <div className="burger-container" onClick={this.props.handleClick}>
          <div className="burger-item" />
          <div className="burger-item" />
          <div className="burger-item" />
        </div>
      </nav>
    )
  }
}

BurgerMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default BurgerMenu
