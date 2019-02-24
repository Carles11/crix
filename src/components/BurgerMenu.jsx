import React from 'react'

class BurgerMenu extends React.Component {

    render() {
        return (
          <nav>
            <div />
            <div />
            <div />
            <div
              className="mainBurger"
              onClick={this.props.handleClick}
            >
              <div className="burger" />
              <div className="burger" />
              <div className="burger" />
            </div>
          </nav>
        );
    }
}

export default BurgerMenu;