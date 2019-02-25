import React from 'react';
import styled from 'styled-components';
import img from "../assets/images/skating-lake.jpg";

import Navigation from "../components/Navigation";
import Logo from "../components/Logo"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;
const BgImage = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
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
      <BgImage>
        <Wrapper>
          <Logo />
          <Navigation />
        </Wrapper>
        <Body>
          <h1>CriX</h1>
          <h3>Web Development</h3>
        </Body>
      </BgImage>
    );
};


export default Landing;