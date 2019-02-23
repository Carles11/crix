import React from 'react'
import styled from 'styled-components';

import Header from "../components/Header";


const Title = styled.h1`
  background-color: #f4f4f4;
  color: silver;
  font-size: 3.6em;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;
const Subtitle = styled.h2`
  font-size: 2em;
  text-align: center;
  margin-top: 1000px;
`;
const Body = styled.div`
  color: silver;
  font-size: 1.8em;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;
const Section_grey = styled.section`
  background-color: #f4f4f4;
  color: white;
  min-height: 650px;
  position: relative;
  width: 100%;
  height: 100%;
`;
const Section_white = styled.section`
  background-color: white;
  color: silver;
  min-height: 650px;
  position: relative;
  width: 100%;
`;
const Article = styled.article`
    text-align: center;
    line-height: 60px;
    margin-left: 20px;
    margin-right: 25px;
`;


const Services = () => {
    return (
      <div>
        <Header />
        <Title>SERVICES</Title>
        <Body>   
            <Section_white>
                <Subtitle>Web Entwicklung</Subtitle>
                <Article>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                ipsum dolor s
                </Article>
            </Section_white>
            <Section_grey>
                <Subtitle>Brochüre und Plakate Design</Subtitle>
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
            </Section_grey>
            <Section_white>
                <Subtitle>Social media services</Subtitle>
                <Article>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor
                </Article>
            </Section_white>
        </Body>
      </div>
    );
};

export default Services;