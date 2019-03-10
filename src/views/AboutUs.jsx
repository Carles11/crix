import React from 'react';
import styled from "styled-components";

import Header from "../components/Header";
import img from "../assets/images/about-us.jpg";
import Footer from "../components/Footer";
import Portraits from "../components/Portraits";
import TextContentAboutUs from "../components/TextContentAboutUs"


const BgImage = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: block:
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 2.6em;
  text-align: center;
  margin: auto;
  color: white;
  margin-top: 80px;
`;

const SubTitle = styled.h2`
  font-family: Montserrat;
  font-size: 2em;
  text-align: center;
  margin: auto;
  color: white;
  padding-top: 4%;
  padding-bottom: 2%;
`;

const MainSection = styled.section`
  min-height: 100vh; 
  overflow: hidden;
  
  padding-bottom: 100px; 
`;

const AboutUs = () => {
    return (
      <div>
        <MainSection>
          <BgImage>
            <Header />
            <Title>ABOUT US</Title>
            <SubTitle>Our team</SubTitle>
            <TextContentAboutUs />
            <Portraits />
          </BgImage>
        </MainSection>
        <Footer />
      </div>
    );
}




export default AboutUs;