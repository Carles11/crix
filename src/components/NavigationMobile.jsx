import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import CrossMenu from './CrossMenu';

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: right;
  padding-right: 20px;
  color: silver;
  text-decoration: none;
  cursor: pointer;
  line-height: 0.1;

`;

const StyledLink = styled(Link)`
  color: #0a6284;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
`;

const CrossPosition = styled.div`
  margin-left: 120px;
  margin-top: 40px;
`;

class NavigationMobile extends React.Component {

  render() {
    return (
      <StyledMenu>
        <CrossPosition>
          <CrossMenu handleClose={this.props.handleClose} />
        </CrossPosition>
        <StyledLink to="/services">
          <h3>SERVICE</h3>
        </StyledLink>
        <StyledLink to="/about-us">
          <h3>ABOUT US</h3>
        </StyledLink>
        <StyledLink to="/contact">
          <h3>CONTACT</h3>
        </StyledLink>
      </StyledMenu>
    );
  }
}

export default NavigationMobile;