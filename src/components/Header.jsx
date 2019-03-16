import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import styled from "styled-components";


import logo from "../assets/logos/crif_logo75_transp.png";

const Sticky_nav = styled.header`
    width: 100%;
    background-color: rgb(236, 236, 236);
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    position: fixed;
    top:0;
    z-index: 2;
    opacity: 0.9;
`;
const Nav_right = styled.div`
    margin-left: auto;
`;

const Header = () => {
    return (
        <Sticky_nav>
                <Link to="/">
                    <img
                        height= "150px"
                        width= "150px"
                        src= {logo} alt="Logo of CriX design web development"/>
                </Link>
                <Nav_right>
                    <Navigation />
                </Nav_right>
        </Sticky_nav>
    )
};

export default Header;
