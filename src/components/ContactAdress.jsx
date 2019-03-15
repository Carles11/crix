import React from 'react'
// import { Link } from 'react-router-dom' 
import styled from 'styled-components';


const HighlightMe = styled.div`
  background-color: black;
  display: inline;
`;
// const StyledLink = styled(Link)`
//   color: palevioletred;
//   font-weight: bold;
//   mix-blend-mode: difference;
// `;
const Article = styled.article`
  text-align: center;
  line-height: 1.3;
  margin-left: 20%;
  margin-right: 20%;
  padding-bottom: 6%;
  max-width: 60%;
  color: silver;
  font-size: 1.2em;
  font-family: "Montserrat", sans - serif;

  @media screen and (max-width: 600px) {
    font-size: 0.8em;
  }
  @media screen and (min-width: 601px) {
  font-size: 1.1em;

  @media screen and (min-width: 801px) {
  font-size: 1.4em;
`;
const Mailto = styled.div`
  color: palevioletred !important;
  font-weight: bold !important;
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
          E-Mail: <Mailto><a href="mailto:carles@crix.design"> carles@crix.design</a></Mailto>
        </HighlightMe>
      </Article>
    );

};

export default ContactAdress;