import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../assets/logos/crif_logo75_transp.png";


const Logo = () =>{
    return(
        <Link to="/">
            <img
                height="105px"
                width="105px"
                src={logo}
                alt="Logo of CriX web development javascript"
            />
        </Link>
    )
}

export default Logo;