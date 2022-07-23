import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Article = styled.article`
  margin: auto;
  color: white;
  max-width: 90%;
  line-height: 1.8;
`
const Paragraph = styled.p`
  letter-spacing: 3px;
  font-size: 1.4em;
  text-align: justify;
  
  @media only screen and (max-width: 600px) {
    font-size: 1em;
    letter-spacing: 0.7px;
    line-height: 1.5;

  @media only screen and (max-width: 800px) {
    font-size: 1.2em;
    line-height: 1.7;
  }
`
const StyledLink = styled(Link)`
  color: #0a6286;
  background-color: grey;
  decoration: none;
`
const TextContentAboutUs = () => {
  return (
    <Article>
      <Paragraph>
        We are Carles and Xavi. We develope pure Javascript coded websites from
        scratch. Only that gives us the freedom to achieve whatever you want on
        your website. If you have seen it somewhere, it is doable. We started
        developing long time ago and we know what we do.
      </Paragraph>
      <Paragraph>
        At CriX, we code modern designed websites using the latest programming
        technologies, making your website stabler, faster, better. We take one
        client at a time, so you don´t have to worry on top of your project,
        having the feeling no one is on your thing. We are on it until it´s
        done. And we like to make it happen fast. That´s why we warranty you a
        maximum delivery time of 14 weeks for any site. But for that to happen,
        we need your constant feedback from the beginning to make things right
        at once. For the very same OneClientPolicy we have, we might be busy the
        time you need us. In that case we will love to hear your proposal and we
        will communicate you the next possible starting date for us. Once we are
        on it, we deliver.
      </Paragraph>
      <Paragraph>
        No outsource jobs. We both personally code the apps.
      </Paragraph>
      <Paragraph>Just call Carles and let´s talk.</Paragraph>
      <Paragraph>Telephone: 0049-(0)-1782871785</Paragraph>
      <Paragraph>
        Or leave a message through the{' '}
        <StyledLink to="/contact">contact form</StyledLink>.
      </Paragraph>
    </Article>
  )
}

export default TextContentAboutUs
