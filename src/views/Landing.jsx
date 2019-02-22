import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from "../assets/logos/crif_logo75_transp.png";
import HeaderHome from "../components/HeaderHome.jsx";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
const Body = styled.div`
  color: white;
  font-size: 4em;
  text-align: center;
  font-family: "Montserrat Subrayada", sans-serif;
`;


const Landing = () => {
    return (
        <div className= "bg-img-landing">
        <Wrapper>
          <Link to="/">
            <img
              height="150px"
              width="150px"
              src={logo}
              alt="Logo of CriX web development javascript"
            />
          </Link>
          <HeaderHome />
        </Wrapper>
        <Body>
            <h1>CriX</h1>
            <h3>Web Development</h3>
        </Body>
      </div>
    );
};


export default Landing;