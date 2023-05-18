import React from 'react'
import PropTypes from 'prop-types'
import '../../css/skillsBlock.css'

const Skills = (props) => {
  const { DIC } = props
  return (
    <div className="column-2a">
      <h5>{DIC.SKILLS_PROGRAMMING}</h5>
      <table className="table-style">
        <tbody>
          <tr>
            <td>HTML & CSS/SCSS</td>
            <td>⭐⭐⭐⭐⭐</td>
          </tr>
          <tr>
            <td>Javascript</td>
            <td>⭐⭐⭐⭐</td>
          </tr>
          <tr>
            <td>React & NextJS</td>
            <td>⭐⭐⭐⭐</td>
          </tr>
          <tr>
            <td>Redux</td>
            <td>⭐⭐⭐</td>
          </tr>
          <tr>
            <td>Typescript</td>
            <td>⭐⭐⭐</td>
          </tr>
          <tr>
            <td>React-Native & expo</td>
            <td>⭐⭐⭐⭐</td>
          </tr>
          <tr>
            <td>MongoDB & mySQL</td>
            <td>⭐⭐⭐</td>
          </tr>
          <tr>
            <td>Supabase</td>
            <td>⭐⭐⭐</td>
          </tr>
          <hr />
          <tr>
            <td>Wordpress</td>
            <td>⭐⭐⭐⭐</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Skills.propTypes = {
  DIC: PropTypes.shape({
    SKILLS_PROGRAMMING: PropTypes.string.isRequired,
    // Add PropTypes declarations for other DIC object properties used in Skills.jsx
  }),
}

export default Skills
