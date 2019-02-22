import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {
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
      </nav>
    );
}

export default Navigation;