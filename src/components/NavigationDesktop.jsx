import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  align-self: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
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
            </StyledMenu>
        );
    }
}

export default NavigationDesktop;