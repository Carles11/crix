import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HighlightMe = styled.h4`
  background-color: black;
  display: inline;
`
// const StyledLink = styled(Link)`
//   color: palevioletred;
//   font-weight: bold;
//   mix-blend-mode: difference;
// `;
const Article = styled.article`
  text-align: left;
  line-height: 1.3;
  margin-left: 20%;
  margin-right: 20%;
  padding-bottom: 6%;
  max-width: 60%;
  color: silver;
  font-size: 30px;

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
  @media screen and (min-width: 801px) {
    font-size: 27px;
  }
`

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
        E-Mail: <a href="mailto:carles@crix.design"> carles@crix.design</a>
      </HighlightMe>
    </Article>
  )
}

export default ContactAdress
