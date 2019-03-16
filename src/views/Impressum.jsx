import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

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
  min-height: 450px;
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
  min-height: 450px;
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

const Impressum = () => {
  return (
    <div>
      <Header />
      <Title>IMPRESSUM</Title>
      <White_block>
        <Subtitle>Anbieter</Subtitle>
        <Article>
          Carles del Río Francés
          <br />
          Elbestrasse 15
          <br />
          60329 Frankfurt am Main
          <br />
          Steuernummer: 013 861 02632
          <br />
          Ust-Id.Nr.: DE275710941
        </Article>
      </White_block>
      <Grey_block>
        <Subtitle>Bei redaktionellen Inhalten</Subtitle>
        <Article>
          Verantwortlich nach § 55 Abs.2 RStV
          <br /> Carles del Río Francés
          <br /> Elbestrasse 15
          <br /> 60329 Frankfurt am Main
        </Article>
      </Grey_block>
      <Footer />
    </div>
  );
};

export default Impressum;
