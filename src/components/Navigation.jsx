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

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDropdown: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick() {
    this.setState({ showDropdown: true })
  }
  handleClose() {
    this.setState({ showDropdown: false })
  }

  render() {
    return (
      <div className="menu-items-block">
        <Desktop>
          <NavigationDesktop handleClose={this.handleClose} />
        </Desktop>
        <Mobile>
          {this.state.showDropdown ? (
            <NavigationMobile handleClose={this.handleClose} />
          ) : (
            <BurgerMenu handleClick={this.handleClick} />
          )}
        </Mobile>
      </div>
    )
  }
}

export default Navigation
