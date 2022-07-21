import React from 'react'
// import styled from 'styled-components'
// import img from '../assets/images/skating-lake_crix.jpg'

import Navigation from '../components/Navigation'
import Logo from '../components/Logo'

import Button from '../components/Button'
import '../css/landing.css'

// const BgImage = styled.div`
//   background-image: url(${img});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 100vh;
//   width: 100%;
// `

const Landing = () => {
  return (
    <div className="landing-img-bg">
      <div className="landing-nav-wrapper">
        <Logo />
        <Navigation invertColor />
      </div>
      <div className="landing-titles-wrapper">
        <h1 className="main-title">Carles del Río</h1>
        <h4 className="main-subtitle">Web Development | Graphic design</h4>
        <div className="landing-buttons-wrapper">
          <Button
            elementType="Link"
            pathLink="/contact"
            variant="light"
            size="lg"
          >
            CONTACTA
          </Button>
          <Button
            elementType="Link"
            pathLink="/about-us"
            variant="primary"
            size="lg"
          >
            SOBRE CARLES
          </Button>
        </div>
      </div>
      <hr className="bottom-line" />
    </div>
  )
}

export default Landing
