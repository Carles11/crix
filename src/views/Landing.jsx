import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../components/Button'
import SkillsBlock from '../components/skillsBlock'
import '../css/landing.css'

const Landing = (props) => {
  const [isHovering, setIsHovering] = useState(false)

  const { DIC } = props
  const screenWidth = window.innerWidth

  const HoverableDiv = () => {
    const handleMouseOver = () => {
      if (screenWidth > 767) {
        setIsHovering(true)
      }
    }

    const handleMobileClose = () => {
      if (screenWidth < 767) {
        setIsHovering((prevState) => !prevState) // Use functional update to access the previous state
      }
    }

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
    return <SkillsBlock DIC={DIC} />
  }

  const handleClick = () => {
    if (screenWidth > 767) {
      setIsHovering(false)
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
        <HoverableDiv />
        {isHovering && <HoverSkills />}
      </div>
    </div>
  )
}

Landing.propTypes = {
  DIC: PropTypes.shape({
    BTN_SKILLS: PropTypes.string,
    LANDING_SUBTITLE: PropTypes.string,
    BTN_CONTACT: PropTypes.string,
    BTN_ABOUT: PropTypes.string,
  }),
}

export default Landing
