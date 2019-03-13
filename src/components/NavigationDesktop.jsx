import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import CrossMenu from './CrossMenu';

const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
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