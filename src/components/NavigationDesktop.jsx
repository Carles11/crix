import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import CrossMenu from './CrossMenu';

const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
justify-content: flex-end;

  @media only screen and (max-width: 1115px) {
    font-size: 60%;  }
`;

const StyledLink = styled(Link)`
  width: 200px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  align-self: center;

    @media only screen and (max-width: 811px) {
    width: 111px;
  }
    @media only screen and (max-width: 1115px) {
    width: 160px;
}

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
                    <h1>SERVICE</h1>
                </StyledLink>
                <StyledLink to="/about-us">
                    <h1>ABOUT US</h1>
                </StyledLink>
                <StyledLink to="/contact">
                    <h1>CONTACT</h1>
                </StyledLink>
                <CrossPosition>
                    <CrossMenu handleClose={this.props.handleClose} />
                </CrossPosition>
            </StyledMenu>
        );
    }
}

export default NavigationDesktop;