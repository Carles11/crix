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
  background: #0a6284;
  padding: 6px;
  justify-items: end;
`;
const Mobile = styled.div`
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

class BurgerMenu extends React.Component {
  
    render() {
        return (
          <Mobile>
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
          </Mobile>
        );
    }
}

export default BurgerMenu;