import React, { useState } from 'react'

import Button from '../components/Button'
import SkillsBlock from '../components/skillsBlock'
import '../css/landing.css'

const Landing = (props) => {
  const { DIC } = props

  const HoverableDiv = ({ handleMouseOver }) => {
    return (
      <h4
        className="skills-block"
        onMouseOver={handleMouseOver}
        onClick={handleMobileClose}
      >
        {DIC.BTN_SKILLS}
      </h4>
    )
  }

  const HoverSkills = () => {
    return <SkillsBlock />
  }

  const [isHovering, setIsHovering] = useState(false)

  const handleMobileClose = () => {
    if (window.innerWidth > 767) {
      return
    } else {
      setIsHovering(!isHovering)
    }
  }

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleClick = () => {
    if (window.innerWidth > 767) {
      setIsHovering(false)
    } else {
      return
    }
  }

  return (
    <div className="landing-bg" onClick={handleClick}>
      <div className="landing-body-wrapper">
        <div className="main-titles-align">
          <h1 className="main-title">Carles del Río Francés</h1>
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
              className="dont-underline"
            >
              {DIC.BTN_CONTACT}
            </Button>
            <Button
              elementType="Link"
              pathLink="/about-us"
              variant="primary"
              size="lg"
              className="dont-underline"
            >
              {DIC.BTN_ABOUT}
            </Button>
          </div>
        </div>
        <HoverableDiv handleMouseOver={handleMouseOver} />
        {isHovering && <HoverSkills />}
      </div>
    </div>
  )
}

export default Landing
