import React from 'react';
import styled from'styled-components';
import { Link } from "react-router-dom";

const StyledMenu = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: end;
  padding-right: 20px;
  color: #0a6284;
  text-decoration: none;
  cursor: pointer;
  line-height: 1.1;
`;
class NavigationVertical extends React.Component{
 
    render(){
        return (
          <StyledMenu>
            <Link to="/services">
              <h1>SERVICE</h1>
            </Link>
            <Link to="/about-us">
              <h1>ABOUT US</h1>
            </Link>
            <Link to="/contact">
              <h1>CONTACT</h1>
            </Link>
          </StyledMenu>
        );
    }
}

export default NavigationVertical;