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
  font-size: 1.4em;
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
            We are Carles and Xavi. We develope pure Javascript from scratch
            coded websites. Only that gives you the freedom to achieve
            whatever you want on your website. If you have seen it somewhere,
            it is doable. 
            
            We started developing long time ago and we know what we do. 
            At CriX, Carles and Xavi will code a modern design website using the 
            latest programming technologies, making your website stabler, faster, better.
                   
            We take one client at a time, so you don´t have to worry on top of
            your project, having the feeling no one is on your thing. 
            We are on it until it´s done. 

            And we like to make it happen fast. That´s why we warranty you a maximum 
            delivery time of 14 weeks for any site. But for that to happen, we need your 
            constant feedback from the beginning to make things right at once.

            For the very same OneClientPolicy we have, we might be busy the time you need us.
            In that case we will love to hear your proposal and we will communicate you 
            the next possible starting date for us. Once we are on it, we deliver. 
          </Paragraph>
          <Paragraph>
            Just call Carles and let´s talk. 
          </Paragraph>
          <Paragraph>
            Telephone: 0049-(0)-1782871785          
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