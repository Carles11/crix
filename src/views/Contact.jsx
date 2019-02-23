import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { Link } from "react-router-dom";



const Title = styled.h1`
  color: silver;
  font-size: 3.6em;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  `;
const Subtitle = styled.h2`
  font-size: 2em;
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
const Article = styled.article`
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
  padding-bottom: 6%;
`;
const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  mix-blend-mode: difference;
`;


const Contact = () => {
    return (
      <div className="bg-img-contact">
        <Header />
        <Title>
          <span className="highlight-text">KONTAKT</span>
        </Title>
        <Body>
          <Section>
            <Subtitle>CriX Web Development</Subtitle>
            <Article>
                <span className="highlight-text">Elbestr. 15
              <br />
                60329 Frankfurt am Main
              <br />
                Tel.: 01782871785
              <br />
                E-Mail:
              <StyledLink to="mailto:carles@crix.design">
                carles@crix.design
              </StyledLink>
                  </span>
            </Article>
          </Section>
        </Body>
      </div>
    );
};

export default Contact