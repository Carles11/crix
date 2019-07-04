import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import CrossMenu from './CrossMenu';

const StyledMenu = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
text-align: right;
padding-right: 20px;
text-decoration: none;
cursor: pointer;
line-height: 0.2;
`;

const StyledLink = styled(Link)`
    width: 200px;
    text-decoration: none;
    cursor: pointer;
    align-self: center;
    color: #0a6284;
    

`;
const CrossPosition = styled.div`
  margin-right: 40px;
  margin-top: 40px;
`;

class NavigationDesktop extends React.Component {

  render() {
    return (
      <StyledMenu>
        <StyledLink to="/services">
          <h3>SERVICE</h3>
        </StyledLink>
        <StyledLink to="/about-us">
          <h3>ABOUT US</h3>
        </StyledLink>
        <StyledLink to="/contact">
          <h3>CONTACT</h3>
        </StyledLink>
        <CrossPosition>
          <CrossMenu handleClose={this.props.handleClose} />
        </CrossPosition>
      </StyledMenu>
    );
  }
}

export default NavigationDesktop;