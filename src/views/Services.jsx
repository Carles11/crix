import React from 'react'
import styled from 'styled-components';

import Header from "../components/Header";

const Body = styled.div`
  color: grey;
  font-size: 2em;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;
const Title = styled.h1`
  color: grey;
  font-size: 3em;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

const Services = () => {
    return (
      <div>
        <Header />
        <Body>
          <h1>SERVICES</h1>
          <ul>
            <li>Web Entwicklung</li>
            <article>
              
            </article>
            <li>Brochüre und Plakate Design</li>
                    <article>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
        
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </article>
            <li>Social media services</li>
          </ul>
        </Body>
      </div>
    );
};

export default Services;


