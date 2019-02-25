import React from 'react';
// import styled from'styled-components';
import { Link } from "react-router-dom";


class NavigationVertical extends React.Component{
 
    render(){
        return (
          <div>
              <Link to="/services">
                <h1>SERVICE</h1>
              </Link>
              <Link to="/about-us">
                <h1>ABOUT US</h1>
              </Link>
              <Link to="/contact">
                <h1>CONTACT</h1>
              </Link>
          </div>
        );
    }
}

export default NavigationVertical;