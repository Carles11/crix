import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledFooter = styled.ul`
  flex-direction: column;
  height: 300px;
  background-color: #0a6284;
  padding-top: 100px;
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  align-items: flex-end;
  padding-right: 35px;
`;
const MenuItem = styled.li`
  list-style: none;
  font-family: Montserrat;
  font-size: 1.4em;
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const Footer = () => {
    return (
      <StyledFooter>
        <MenuItem>
          <StyledLink to="/datenschutzerklaerung">
            <li>Datenschutzerklärung</li>
          </StyledLink>
        </MenuItem>
        <MenuItem>
        <StyledLink to="/impressum">
          <li>Impressum</li>
        </StyledLink>
        </MenuItem>
        <MenuItem>
        <StyledLink to="/contact">
          <li>Contact</li>
        </StyledLink>
        </MenuItem>
      </StyledFooter>
    );
};

export default Footer;