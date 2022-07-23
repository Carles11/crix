import React from 'react'

import Button from '../components/Button'
import SocialMedia from '../components/SocialMedia'
import '../css/landing.css'

const Landing = () => {
  return (
    <div className="landing-img-bg">
      <div className="landing-body-wrapper">
        <div className="main-titles-align">
          <h1 className="main-title">Carles del Río</h1>
          <h4
            className="main-subtitle"
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
      </div>
    </div>
  )
}

export default Landing
