import React from 'react'
import PropTypes from 'prop-types'

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

SkillsBlock.propTypes = {
  DIC: PropTypes.shape({
    // Add PropTypes declarations for the DIC object properties
  }),
}

export default SkillsBlock
