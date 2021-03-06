import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

import img from "../assets/images/contact-ball-room.jpg";
import ContactAdress from '../components/ContactAdress';
import ContactForm from '../components/ContactForm';
import Footer from "../components/Footer";



const BgImage = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block:
  flex-direction: column;
`;
const HighlightMe = styled.div`
  background-color: black;
  display: inline;
`;
const Text = styled.p`
  background-color: black;
  display: inline;
  font-size: 20px;
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 2.6em;
  text-align: center;
  margin: auto;
  color: silver;
  margin-top: 0;
  padding-top: 125px;
`;
const Subtitle = styled.h2`
  font-size: 4em;
  text-align: center;
  padding-top: 4%;
  mix-blend-mode: difference;

  @media screen and (max-width: 600px) {
    font-size: 1.9em;
  }
  @media screen and (min-width: 601px) {
  font-size: 2.9em;

  @media screen and (min-width: 801px) {
  font-size: 4em;
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
      <div>
        <BgImage>
          <Header />
          <Title>
            <HighlightMe>CONTACT</HighlightMe>
          </Title>
          <Body>
            <Section>
              <Subtitle>CriX Web Development</Subtitle>
              <ContactAdress />
              <Text>Or leave us a message</Text>
              <ContactForm />
            </Section>
          </Body>
        </BgImage>
        <Footer />
      </div>
    );
};

export default Contact