import React, { useState } from 'react'

import Button from '../components/Button'
import SkillsBlock from '../components/skillsBlock'
import '../css/landing.css'

const Landing = () => {
  const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
    return (
      <h4
        className="skills-block"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Educación y competencias
      </h4>
    )
  }

  const HoverSkills = () => {
    return <SkillsBlock />
  }

  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

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
        <HoverableDiv
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
        {isHovering && <HoverSkills />}
      </div>
    </div>
  )
}

export default Landing
