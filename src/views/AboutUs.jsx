import React from 'react';
import styled from "styled-components";

import Header from "../components/Header";
import img from "../assets/images/about-us.jpg";
import avatarC from "../assets/images/avatar_carles.png";
import avatarX from "../assets/images/avatar_xavi.png";
import Footer from "../components/Footer";

// import PhotoC from "../components/PhotoC";
// import PhotoX from "../components/PhotoX";

const BgImage = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
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

const Paragraph = styled.p`
  font-family: Montserrat;
  font-size: 1.2em;
  text-align: center;
  margin: auto;
  color: silver;
  max-width: 60%;
  text-align: justify;
  letter-spacing: 3px;
  line-height: 1.8;

  @media only screen and (max-width: 600px) {
    font-size: 0.8em;
    max-width: 90%;
    letter-spacing: 1px;
    line-height: 1;
  }
  @media only screen and (max-width: 800px) {
    font-size: 1em;
    max-width: 75%;
    letter-spacing: 2px;
    line-height: 1.3;
  }
`;
const Portraits = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr;
  margin-top: 5%;
  font-family: Montserrat;
  color: white;
  font-size: 1.4em;
  font-decoration: bold;
  text-align: center;
  padding: auto;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 5%;
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    margin-top: 5%;
    max-height: 250px;
  }
`;


const AboutUs = () => {
    return (
      <div>
        <BgImage>
          <Header />
          <Title>ABOUT US</Title>
          <SubTitle>Our team</SubTitle>
          <Paragraph>
            Thanks for landing here. We are Carles and Xavi. We started
            developing long time ago and we learned from the best. After a
            while, we felt confident enough to start our own company and...
            here we are! At CriX Carles will be your feedback receiver and
            your personal contact to us. When all is cleared, settled and
            ready, Xavi and Carles will start coding. We take one client at
            a time, so you never have the feeling no one is on your thing.
            That´s why we will communicate you the next possible starting
            date for your project. Once we are on it, we deliver in 14
            weeks. No project takes more than that with us.
          </Paragraph>
          <Portraits>
            <div>
              <img
                src={avatarC}
                alt="Portrait of Carles del Río Francés"
                width="350px"
                />
              <h3>Carles</h3>
            </div>
            <div>
              <img
                src={avatarX}
                alt="Portrait of Xavi Vilà Albiol"
              width="350px"
              />
              <h3>Xavi</h3>
            </div>
          </Portraits>
        </BgImage>
        <Footer />
      </div>
    );
}




export default AboutUs;