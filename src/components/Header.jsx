import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import styled from "styled-components";


import logo from "../assets/logos/crif_logo75_transp.png";

const Sticky_bar = styled.header`
    position: fixed;
    top:0;
    z-index: 2;
`;

const Header = () => {
    return (
        <Sticky_bar>
                <Link to="/">
                    <img
                        height= "150px"
                        width= "150px"
                        src= {logo} alt="Logo of CriX web development javascript"/>
                </Link>
                <Navigation />
        </Sticky_bar>
    )
};

export default Header;
