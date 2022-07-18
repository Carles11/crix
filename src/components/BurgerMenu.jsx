import React from 'react'
import styled from 'styled-components'



const MainBurger = styled.div`
    padding: 20px;
    margin-right: 20px;
    display: inline-block;
    align-content: end;
    cursor: pointer;
`;

const Burger = styled.div`
  width: 35px;
  margin: 6px 0;
  background: #0a6284;
  padding: 2px;
  justify-items: end;
`;

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
    );
  }
}

export default BurgerMenu;