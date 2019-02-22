import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../assets/logos/crif_logo75_transp.png";


const Landing = () => {
    return (
        <div className="bg-img-landing">
            <div className="landing-grid">
                <Link to="/">
                    <img
                        height="150px"
                        width="150px"
                        src={logo}
                        alt="Logo of CriX web development javascript"
                    />
                </Link>
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
            </div>
                <div>
                    <h2>Landing page</h2>
                </div>
        </div>
    );
};


export default Landing;