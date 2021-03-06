import React from 'react'
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';
import QuotationForm from "../components/QuotationForm";

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 2.6em;
  text-align: center;
  margin-top: 50px;
  padding-top: 125px;
`;
const Subtitle = styled.h2`
  font-family: Montserrat;
  font-size: 2.2em;
  text-align: center;
  margin: auto;
  padding-top: 4%;
  padding-bottom: 2%;
`;
const Bg_pic_block = styled.section`
  min-height: auto;
  width: 100%;
  color: white;

  background-image: url("https://res.cloudinary.com/dssldws2k/image/upload/v1552013085/CRiF/BG_code_javascript_FILTRD.png");
  background-position: bottom center;
  background-attachment: scroll;

  @media only screen and (max-width: 800px) {
    min-height: auto;
  }

  @media only screen and (max-width: 600px) {
    min-height: auto;
  }

  @media (min-width: 1025px) {
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;
const White_block = styled.section`
  background-color: white;
  color: #696969;
  min-height: 650px;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 600px) {
    min-height: auto;
    width: 80%;

  }
  @media only screen and (max-width: 800px) {
    min-height: auto;
    width: 75%;

  }
`;
const Article = styled.article`
  font-family: Montserrat;
  font-size: 1.4em;
  text-align: justify;
  margin: auto;
  padding: 20px;
  color: #696969;
  max-width: 80%;
  text-align: justify;
  letter-spacing: 3px;
  line-height: 1.8em;

  @media only screen and (max-width: 800px) {
    font-size: 1.2em;
    max-width: 75%;
    letter-spacing: 2px;
    line-height: 1.8em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1em;
    max-width: 90%;
    letter-spacing: 1px;
    line-height: 1.6em;
  }
`;
const Article_w = styled.article`
  font-family: Montserrat;
  font-size: 1.4em;
  text-align: center;
  margin: auto;
  padding: 20px;
  color: white;
  max-width: 70%;
  text-align: justify;
  letter-spacing: 3px;
  line-height: 1.8;

  @media only screen and (max-width: 800px) {
    font-size: 1.2em;
    max-width: 75%;
    letter-spacing: 2px;
    line-height: 1.8;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1em;
    max-width: 90%;
    letter-spacing: 1px;
    line-height: 1.6;
  }
`;


const Services = () => {
    return (
      <div>
        <Header />
        <Title>SERVICES</Title>   
            <White_block>
                <Subtitle>Web development</Subtitle>
                <Article>
                You need a website. Your budget is limited but nonetheless you expect a professional website to impress your clients
                and you want to leave a door open to scalate the features of your website as your project grows.
         
                We use the latest technologies when developing our applications. 
                All the code we write for you is personally optimized to your necessities, 
                and it is very scalable. That way, if you start with a small project that covers your needs for now and you want to make it 
                grow when the time is right, it will nicely grow. We don´t use any templates or web constructing systems. We just Javascript code from scratch for you.
                </Article>
            </White_block>
            <Bg_pic_block>
                <Subtitle>Server maintenance</Subtitle>
                <Article_w>
                Besides coding you a tailor made website, we offer you server maintenance and domain buy.
                Leave us the job of maintaining your server and let us take care of the domain you like. We update all our servers regularly and take care that your website is always on-line.
                </Article_w>
            </Bg_pic_block>
            <White_block>
                <Subtitle>What about prices?</Subtitle>
                <Article>
                    We offer you fixed prices for your website. Tell us what features you need in your site and
                    we will give you that fair price you have in mind. 
                </Article>
            </White_block>
            <QuotationForm />
            <Footer />
      </div>
    );
};

// Services.propTypes = {
//   DIC: PropTypes.shape({
//     SERVICES_TITLE: PropTypes.string.isRequired,
//   }).isRequired,
// };


export default Services;