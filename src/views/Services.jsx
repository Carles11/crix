import React from 'react'
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 2.6em;
  text-align: center;
  margin: auto;
  color: silver;
  margin-top: 80px;
`;
const Subtitle = styled.h2`
  font-family: Montserrat;
  font-size: 2em;
  text-align: center;
  margin: auto;
  color: silver;
  padding-top: 4%;
  padding-bottom: 2%;
`;
const Grey_block = styled.section`
  background-color: #f4f4f4;
  color: silver;
  min-height: 750px;
  position: relative;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 600px) {
    min-height: 450px;
  }
  @media only screen and (max-width: 800px) {
    min-height: 500px;
  }
`;
const White_block = styled.section`
  background-color: white;
  color: silver;
  min-height: 650px;
  position: relative;
  width: 100%;
  @media only screen and (max-width: 600px) {
    min-height: 450px;
  }
  @media only screen and (max-width: 800px) {
    min-height: 500px;
  }
`;
const Article = styled.article`
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


const Services = () => {
    return (
      <div>
        <Header />
        <Title>SERVICE</Title>   
            <White_block>
                <Subtitle>Web development</Subtitle>
                <Article>
                You need a website. Your budget is limited but nonetheless you expect a professional website to impress your clients
                and you want to leave a door open to scalate the features of your website as your project grows.
         
                We use the latest technologies when developing our applications. 
                We code plain Javascript using MERN (Mongo - Express - React - Node). This might not tell
                you much, but it means that your app will be stable and fast, very fast.
                With this, all code we write is personally optimized for your necessities, 
                and it is very scalable. Start with a small project that covers your needs for now and make it 
                grow when the time is right. No templates used, no cheap block constructing systems, 
                no "it is not possible with this template". Just Javascript code for you.
                </Article>
            </White_block>
            <Grey_block>
                <Subtitle>Server maintenance</Subtitle>
                <Article>
                Besides coding your tailor made website, we offer you also server maintenance and domain buy.
                Leave us the hard job of maintaining your server and your domain. We update all our projects weekly,
                so there are no down-falls. We always use two kernel servers, so your website is allways up and running.
                </Article>
            </Grey_block>
            <White_block>
                <Subtitle>What about prices?</Subtitle>
                <Article>
                    Web development is a curious world. Similar coded sites usually have very different prices. 
                    It more likely depends on who is your customer and how money he can spend. Not here.
                    We offer you fixed prices for your website. Tell us what features you need in your site and
                    we give you a fixed price. Use the form below to find your quotation.
                </Article>
            </White_block>
            <Footer />
      </div>
    );
};

export default Services;