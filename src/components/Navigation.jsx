import React from 'react'

import BurgerMenu from './BurgerMenu'
import NavigationMobile from './NavigationMobile'
import NavigationDesktop from './NavigationDesktop'

import '../css/navigation.css'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDropdown: false,
      lang: '',
    }
  }

  handleClick = () => {
    this.setState({ showDropdown: true })
  }
  handleClose = () => {
    this.setState({ showDropdown: false })
  }

  pickTheLang = (langPick) => {
    this.setState({ lang: langPick })
  }

  render() {
    const { DIC, handleDIC } = this.props
    const { lang } = this.state

    handleDIC(lang)

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
          <button onClick={() => this.pickTheLang('en')}>ENG</button>
          <button onClick={() => this.pickTheLang('de')}>DE</button>
          <button onClick={() => this.pickTheLang('es')}>ESP</button>
        </div>
      </div>
    )
  }
}

export default Navigation
