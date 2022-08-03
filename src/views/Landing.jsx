import React, { useState } from 'react'

import Button from '../components/Button'
import SkillsBlock from '../components/skillsBlock'
import '../css/landing.css'

const Landing = (props) => {
  const { DIC } = props
  const HoverableDiv = ({ handleMouseOver }) => {
    return (
      <h4 className="skills-block" onMouseOver={handleMouseOver}>
        {DIC.BTN_SKILLS}
      </h4>
    )
  }

  const HoverSkills = ({ handleClick }) => {
    return <SkillsBlock handleClick={handleClick} />
  }

  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => {
    setIsHovering(true)
  }

  // const handleMouseOut = () => {
  //   setIsHovering(false)
  // }
  const handleClick = () => {
    setIsHovering(false)
  }

  return (
    <div className="landing-img-bg" onClick={handleClick}>
      <div className="landing-body-wrapper">
        <div className="main-titles-align">
          <h1 className="main-title">Carles del Río</h1>
          <h4
            className="main-subtitle"
            content=" Web Development | Graphic design"
          >
            {DIC.LANDING_SUBTITLE}
          </h4>
          <div className="landing-buttons-wrapper">
            <Button
              elementType="Link"
              pathLink="/contact"
              variant="light"
              size="lg"
            >
              {DIC.BTN_CONTACT}
            </Button>
            <Button
              elementType="Link"
              pathLink="/about-us"
              variant="primary"
              size="lg"
            >
              {DIC.BTN_ABOUT}
            </Button>
          </div>
        </div>
      </div>
      <HoverableDiv handleMouseOver={handleMouseOver} />
      {isHovering && <HoverSkills handleClick={handleClick} />}
    </div>
  )
}

export default Landing
