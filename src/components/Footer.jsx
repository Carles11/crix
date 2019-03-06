import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


import Logo from "../components/Logo";


const StyledFooter = styled.div`
  display: grid;
  font-family: Montserrat;
  font-size: 75%;
  justify-content: end;
  margin-right: 100px;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  color: silver;
  text-decoration: none;
  cursor: pointer;
  height: 100px;
`;
const StyledLink = styled(Link)`
  color: grey;
  text-decoration: none;
  cursor: pointer;
`;


const Footer = () => {
    return (
        <StyledFooter>
          <StyledLink to="/datenschuetzerklaerung">
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