import React from 'react';
import styled from 'styled-components';
import img from "../assets/images/skating-lake.jpg";

import Navigation from "../components/Navigation";
import Logo from "../components/Logo"

const Wrapper = styled.div`
  width: 100%;
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const BgImage = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
const Title = styled.div`
  font-family: "Montserrat Subrayada", sans-serif;
  color: white;
  font-size: 4em;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1.6em;
  }
  @media screen and (max-width: 800px) {
  font-size: 2.6em;
`;



const Landing = () => {
    return (
      <BgImage>
        <Wrapper>
          <Logo />
          <Navigation />
        </Wrapper>
        <Title>
          <h1>CriX</h1>
          <h3>Web Development</h3>
        </Title>
      </BgImage>
    );
};


export default Landing;