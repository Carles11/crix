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
  font-size: 2em;
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
    font-size: 1.5em;
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
                We use the latest technologies when developing our applications. 
                We code plain Javascript using MERN (Mongo - Express - React - Node).
                All in Javascript. With this, all code we write is personally optimized for your necessities, 
                and it is very scalable. Start with a small project that covers your needs for now and make it 
                grow when the time is right. No templates used, no cheap block constructing systems, 
                no "it is not possible".
                </Article>
            </White_block>
            <Grey_block>
                <Subtitle>Server maintenance</Subtitle>
                <Article>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                sea takimata sanctus est Lorem ipsum dolor sit amet. Duis
                autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </Article>
            </Grey_block>
            <White_block>
                <Subtitle>Social media services</Subtitle>
                <Article>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor
                </Article>
            </White_block>
            <Footer />
      </div>
    );
};

export default Services;