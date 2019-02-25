import React from 'react'
import styled from 'styled-components'

const MainBurger = styled.div`
    padding: 10px;
    display: inline-block;
    justify-items: end;
    cursor: pointer;
`;

const Burger = styled.div`
  width: 50px;
  margin: 8px 0;
  background: white;
  padding: 6px;
  justify-items: end;
  
`;/* future proofing *//* && for old Konqueror browsers */


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