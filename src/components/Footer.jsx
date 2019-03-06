import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
  display: grid;
  font-family: Montserrat;
  font-size: 75%;
  justify-content: end;
  padding-right: 100px;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  text-decoration: none;
  background-color: #0a6284;
  margin-bottom: 0;
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