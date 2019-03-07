import React from 'react'
import { Link } from 'react-router-dom' 
import styled from 'styled-components';


const HighlightMe = styled.div`
  background-color: black;
  display: inline;
`;
const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  mix-blend-mode: difference;
`;
const Article = styled.article`
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
  padding-bottom: 6%;
  max-width: 60%;
  color: silver;
  font-size: 1.2em;
  font-family: "Montserrat", sans - serif;

  @media only screen and (max-width: 600px) {
    font-size: 0.8em;
    max-width: 90%;
    line-height: 1;
  }
  @media only screen and (max-width: 800px) {
    font-size: 1em;
    max-width: 75%;
    line-height: 1.3;
  }
`;

const ContactAdress = () => {
    return (
      <Article>
        <HighlightMe>
          Elbestr. 15
          <br />
          60329 Frankfurt am Main
          <br />
          Germany
          <br />
          Tel.: 01782871785
          <br />
          E-Mail: <StyledLink to="mailto:carles@crix.design"> carles@crix.design</StyledLink>
        </HighlightMe>
      </Article>
    );

};

export default ContactAdress;