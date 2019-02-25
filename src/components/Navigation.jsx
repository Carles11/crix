import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

import BurgerMenu from './BurgerMenu';
// import CrossMenu from './CrossMenu';


const Mobile = styled.div`
  @media only screen and (min-width: 650px) {
    display: none;
  }
`;
const Desktop = styled.div`
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;
const VerticalMenu = styled.ul`
  @media only screen and (min-width: 650px) {
    display: none;
  }

`;

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active : false
    }
  }
// My functions

  componentDidMount(BurgerMenu) {
    BurgerMenu ? this.showVertical() : this.setState({ active: false });
  }
  showVertical () {
    this.setState({ active: true });
  }

  render(){
    return (
      <div>
        <Mobile>
          <BurgerMenu />
        </Mobile>

        <VerticalMenu>
          <Link to="/services">
            <h1>SERVICES</h1>
          </Link>
          <Link to="/about-us">
            <h1>ABOUT US</h1>
          </Link>
          <Link to="/contact">
            <h1>CONTACT</h1>
          </Link>
        
        </VerticalMenu>  

        <Desktop>
          <nav>
            <div />
            <Link to="/services">
              <h1>SERVICES</h1>
            </Link>
            <Link to="/about-us">
              <h1>ABOUT US</h1>
            </Link>
            <Link to="/contact">
              <h1>CONTACT</h1>
            </Link>
          </nav>
        </Desktop>
      </div>
    );
  }
}

export default Navigation;