import React from 'react'
import styled from 'styled-components';

import Header from "../components/Header";

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 2em;
  text-align: center;
  margin: auto;
  color: silver;
  margin-top: 80px;
`;
const Subtitle = styled.h2`
  font-size: 2em;
  text-align: center;
  padding-top: 4%;
`;
const Body = styled.div`
  color: silver;
  font-size: 1.8em;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;
const Section_grey = styled.section`
  background-color: #f4f4f4;
  color: silver;
  min-height: 750px;
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
  text-align: justify;
  line-height: 60px;
  margin-left: 20%;
  margin-right: 20%;
  padding-bottom: 6%;
 
`;


const Services = () => {
    return (
      <div>
        <Header />
        <Title>
          <h1>SERVICE</h1>
        </Title>
        <Body>   
            <Section_white>
                <Subtitle>Web development</Subtitle>
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