import React from 'react';
import styled from 'styled-components';

import HeaderHome from "../components/HeaderHome";
import Logo from "../components/Logo"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;
const Body = styled.div`
  text-align: center;
  font-family: "Montserrat Subrayada", sans-serif;
  color: white;
  font-size: 4em;
  text-align: center;
`;

const Landing = () => {
    return (
        <div className= "bg-img-landing">
        <Wrapper>
          <Logo />
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