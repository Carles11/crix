import React from 'react'
import styled from 'styled-components'

import BurgerMenu from './BurgerMenu'
import NavigationMobile from './NavigationMobile'
import NavigationDesktop from './NavigationDesktop'

import '../css/navigation.css'

const Mobile = styled.div`
  @media only screen and (min-width: 601px) {
    display: none;
  }
`

const Desktop = styled.div`
  white-space: nowrap;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`

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
    console.log('PICKING-LANG', langPick)
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
