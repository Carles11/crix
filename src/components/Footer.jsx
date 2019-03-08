import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 500px:
  font-family: Montserrat;
  font-size: 75%;
  padding-right: 100px;
  justify-content: end;
  text-decoration: none;
  background-color: #0a6284;
  bottom: 0;
  width: 100%;
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const Footer = () => {
    return (
        <StyledFooter>
          <StyledLink to="/datenschutzerklaerung">
            <h1>Datenschutzerklärung</h1>
          </StyledLink>
          <StyledLink to="/impressum">
            <h1>Impressum</h1>
          </StyledLink>
          <StyledLink to="/contact">
            <h1>Contact</h1>
          </StyledLink>
        </StyledFooter>
    );
};

export default Footer;