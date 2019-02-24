import React from 'react'
import { Link } from 'react-router-dom';

import CrossMenu from './CrossMenu';

class Navigation extends React.Component {
  render(){
    return (
      <nav>
        <Link to="/services">
            <h1>SERVICES</h1>
        </Link>
        <Link to="/about-us">
            <h1>ABOUT US</h1>
        </Link>
        <Link to="/contact">
            <h1>CONTACT</h1>
        </Link>
        <CrossMenu
          handleClose={this.props.handleClose}
        />
      </nav>
    );
  }
}

export default Navigation;