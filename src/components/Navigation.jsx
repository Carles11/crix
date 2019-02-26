import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

import BurgerMenu from './BurgerMenu';
import NavigationVertical from './NavigationVertical';
import CrossMenu from './CrossMenu';


const PositionCrossMenu = styled.div`
  padding-top: 40px;
  padding-right: 25px;
`;

const Desktop = styled.div`
  white-space: nowrap;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'block',
      opacity: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    if (this.state.display === 'block') {
      this.setState({ display: 'none',opacity: 1})
    } else {
      this.setState({ display: 'block',opacity: 0 })
    }
  }
  handleClose() {
    this.setState({display:'block',opacity:0 });
  }

  render(){
      return (
        <div>
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
          <div style={{ display: this.state.display }}>
            <BurgerMenu handleClick={this.handleClick} />
          </div>
          <PositionCrossMenu style={{ opacity: this.state.opacity }}>
            <CrossMenu handleClose={this.handleClose} />
            <NavigationVertical />
          </PositionCrossMenu>
        </div>
      );
    };
  }  

export default Navigation;