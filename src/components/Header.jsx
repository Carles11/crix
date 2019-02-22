import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

import logo from "../assets/logos/crif_logo75_transp.png";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img
                    height= "150px"
                    width= "150px"
                    src= {logo} alt="Logo of CriX web development javascript"/>
            </Link>
            <Navigation />
        </header>
    )
};

export default Header;
