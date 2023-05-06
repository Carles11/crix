import React from 'react'

import Education from './Education'
import Skills from './Skills'

import '../../css/skillsBlock.css'

const SkillsBlock = (props) => {
  const { DIC } = props
  return (
    <div className="skills-container">
      {/* <div className="cross" onClick={handleClick} /> */}
      <div className="skills-table">
        <Education DIC={DIC} />
        <Skills DIC={DIC} />
      </div>
    </div>
  )
}

export default SkillsBlock
