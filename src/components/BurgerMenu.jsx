import React from 'react'

class BurgerMenu extends React.Component {

    render() {
        return (
            <div
                className="mainBurger"
                onClick={this.props.handleClick}>
                <div
                    className="burger"></div>
                <div
                    className="burger"></div>
                <div
                    className="burger"></div>
            </div>
        )
    }
}

export default BurgerMenu;