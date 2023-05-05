import React from 'react'

import BurgerMenu from './BurgerMenu'
import NavigationDesktop from './NavigationDesktop'
import NavigationMobile from './NavigationMobile'

import '../css/navigation.css'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDropdown: false,
    }
  }

  handleClick = () => {
    this.setState({ showDropdown: true })
  }

  handleClose = () => {
    this.setState({ showDropdown: false })
  }

  render() {
    const { DIC, handleDIC } = this.props

    const pickTheLang = (langPick) => {
      handleDIC(langPick)
    }

    return (
      <div className="menu-items-block">
        <div className="desktop-view">
          <NavigationDesktop handleClose={this.handleClose} DIC={DIC} />
        </div>
        <div className="mobile-view">
          {this.state.showDropdown ? (
            <NavigationMobile handleClose={this.handleClose} DIC={DIC} />
          ) : (
            <BurgerMenu handleClick={this.handleClick} />
          )}
        </div>
        <div className="languages">
          <button onClick={() => pickTheLang('en')}>ENG</button>
          <button onClick={() => pickTheLang('de')}>DE</button>
          <button onClick={() => pickTheLang('es')}>ESP</button>
        </div>
      </div>
    )
  }
}

export default Navigation
