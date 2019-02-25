import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

import BurgerMenu from './BurgerMenu';
import NavigationVertical from './NavigationVertical';
import CrossMenu from './CrossMenu';



const Desktop = styled.div`
  @media only screen and (max-width: 650px) {
    display: none };
`;

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'none'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.setState({display:'block'});
  }
  handleClose() {
    this.setState({display:'none' });
  }

  render(){
      return (
        <div>
          <BurgerMenu handleClick={this.handleClick} />
          <div style={{display:this.state.display}}>
            <CrossMenu handleClose={this.handleClose} />
            <NavigationVertical />
          </div>
          <Desktop>
          <nav>
            <div />
            <Link to="/services">
              <h1>SERVICE</h1>
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
    };
  }  
export default Navigation;