import React from 'react';
import styled from "styled-components";

import Header from "../components/Header";
// import PhotoC from "../components/PhotoC";
// import PhotoX from "../components/PhotoX";


const Title = styled.h1`
  font-family: Montserrat;
  font-size: 2em;
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

const Paragraph = styled.p`
  font-family: Montserrat;
  font-size: 2em;
  text-align: center;
  margin: auto;
  color: white;
  max-width: 60%;
  text-align: justify;
  letter-spacing: 3px;
  line-height:1.8;
`;

const AboutUs = () => {
    return (
      <div className="bg-img-about-us">
        <Header />
        <Title>ABOUT US</Title>
        <SubTitle>Our team</SubTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
        </Paragraph>
        {/* <PhotoC />
        <PhotoX /> */}
      </div>
    );
}




export default AboutUs;