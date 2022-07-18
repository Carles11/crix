import React from 'react';
import styled from 'styled-components';
import img from "../assets/images/skating-lake_crix.jpg";

import Navigation from "../components/Navigation";
import Logo from "../components/Logo"

const Wrapper = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BgImage = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
const Title = styled.div`
  font-family: "Roboto", sans-serif;
  color: 101010;
  font-size: 4em;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1.9em;
  }
  @media screen and (min-width: 601px) {
  font-size: 2.9em;

  @media screen and (min-width: 801px) {
  font-size: 4em;
  

`;



const Landing = () => {
  return (
    <BgImage>
      <Wrapper>
        <Logo />
        <Navigation invertColor />
      </Wrapper>
      <Title>
        <h1>CriX</h1>
        <h3>Web Development and Design</h3>
      </Title>
    </BgImage>
  );
};


export default Landing;