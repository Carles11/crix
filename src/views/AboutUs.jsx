import React from 'react'
import styled from 'styled-components'

import img from '../assets/images/about-us.jpg'
import Portraits from '../components/Portraits'
import TextContentAboutUs from '../components/TextContentAboutUs'

const BgImage = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block:
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 2.6em;
  text-align: center;
  color: white;
  margin-top: 0;
  padding-top: 125px;
`

const SubTitle = styled.h2`
  font-size: 2em;
  text-align: center;
  margin: auto;
  color: white;
  padding-top: 4%;
  padding-bottom: 2%;
`

const AboutUs = () => {
  return (
    <div>
      <BgImage>
        <Title>ABOUT US</Title>
        <SubTitle>Our teamo</SubTitle>
        <TextContentAboutUs />
        <Portraits />
      </BgImage>
    </div>
  )
}

export default AboutUs
