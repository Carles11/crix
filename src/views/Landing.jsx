import React from 'react'
import styled from 'styled-components'
import img from '../assets/images/skating-lake_crix.jpg'

import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import '../css/landing.css'

const BgImage = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`

const Landing = () => {
  return (
    <BgImage>
      <div className="landing-nav-wrapper">
        <Logo />
        <Navigation invertColor />
      </div>
      <h1 className="main-title">Carles del Río Francés</h1>
      <h3 className="main-subtitle">Web Development and Design</h3>
    </BgImage>
  )
}

export default Landing
