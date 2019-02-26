import React from 'react';
import styled from'styled-components';
import { Link } from "react-router-dom";

const StyledMenu = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: end;
  text-align: right;
  padding-right: 20px;
  color: silver;
  text-decoration: none;
  cursor: pointer;
  line-height: 1.1;
  
`;

const StyledLink = styled(Link)`
  color: #0a6284;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  `;

  
class NavigationVertical extends React.Component{
 
    render(){
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

export default NavigationVertical;