import React from 'react'
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

export default BurgerMenu
