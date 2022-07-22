import React from 'react'

import Button from '../components/Button'
import SocialMedia from '../components/SocialMedia'
import '../css/landing.css'

const Landing = () => {
  return (
    <div className="landing-img-bg">
      <div className="landing-body-wrapper">
        <h1 className="main-title inverted-bar">Carles del Río</h1>
        <h4
          className="main-subtitle inverted-bar"
          content=" Web Development | Graphic design"
        >
          Web Development | Graphic design
        </h4>
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
      <div className="social-media-section">
        <SocialMedia />
      </div>
    </div>
  )
}

export default Landing
