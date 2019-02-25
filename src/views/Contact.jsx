import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

import img from "../assets/images/contact-ball-room.jpg";
import ContactAdress from '../components/ContactAdress';


const BgImage = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
const HighlightMe = styled.h1`
  background-color: black;
  display: inline;
`;

const Title = styled.div`
  color: silver;
  font-size: 2em;
  text-align: center;
  font-family: Montserrat;
  padding-top: 1%;
  padding-bottom: 1%;
`;
const Subtitle = styled.h2`
  font-size: 4em;
  text-align: center;
  padding-top: 4%;
  mix-blend-mode: difference;
`;
const Body = styled.div`
  color: silver;
  font-size: 1.8em;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;
const Section = styled.section`
  color: white;
  min-height: 750px;
  position: relative;
  width: 100%;
  height: 100%;
`;



const Contact = () => {
    return (
      <BgImage>
        <Header />
        <Title>
          <HighlightMe>CONTACT</HighlightMe>
        </Title>
        <Body>
          <Section>
            <Subtitle>CriX Web Development</Subtitle>
            <ContactAdress />
          </Section>
        </Body>
      </BgImage>
    );
};

export default Contact