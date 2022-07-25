import React from 'react'
import styled from 'styled-components'

const MainBurger = styled.div`
  padding: 20px;
  margin-right: 20px;
  display: inline-block;
  align-content: end;
  cursor: pointer;
`

const Burger = styled.div`
  width: 35px;
  margin: 10px 0;
  background: #ff6a3d;
  padding: 1px;
  justify-items: end;
`

class BurgerMenu extends React.Component {
  render() {
    return (
      <nav>
        <div />
        <div />
        <div />
        <MainBurger onClick={this.props.handleClick}>
          <Burger />
          <Burger />
          <Burger />
        </MainBurger>
      </nav>
    )
  }
}

export default BurgerMenu
