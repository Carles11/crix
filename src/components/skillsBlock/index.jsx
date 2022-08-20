import React from 'react'

import Education from './Education'
import Skills from './Skills'

import '../../css/skillsBlock.css'

const SkillsBlock = () => {
  return (
    <div className="skills-container">
      {/* <div className="cross" onClick={handleClick} /> */}
      <div className="skills-table">
        <Education />
        <Skills />
      </div>
    </div>
  )
}

export default SkillsBlock
