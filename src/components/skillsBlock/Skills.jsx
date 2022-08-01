import React from 'react'
import '../../css/skillsBlock.css'

const Skills = () => {
  return (
    <div className="column-2a">
      <h5>Development Skills</h5>
      <table className="table-style">
        <tr>
          <td>HTML & CSS/SCSS</td>
          <td>⭐⭐⭐⭐⭐</td>
        </tr>
        <tr>
          <td>Javascript with React in Node.js</td>
          <td>⭐⭐⭐⭐</td>
        </tr>
        <tr>
          <td>Redux</td>
          <td>⭐⭐⭐</td>
        </tr>
        <tr>
          <td>MongoDB & mySQL</td>
          <td>⭐⭐⭐</td>
        </tr>
        <tr>
          <td>React-native</td>
          <td>⭐⭐</td>
        </tr>
        <tr>
          <td>Wordpress</td>
          <td>⭐⭐⭐⭐</td>
        </tr>
      </table>
      <table className="table-style">
        <h5>Graphicdesign Skills</h5>
        <tr>
          <td>Adobe inDesign</td>
          <td>⭐⭐⭐⭐</td>
        </tr>
        <tr>
          <td>Adobe Photoshop</td>
          <td>⭐⭐⭐</td>
        </tr>
        <tr>
          <td>Adobe Acrobat DC</td>
          <td>⭐⭐⭐⭐⭐</td>
        </tr>
      </table>
    </div>
  )
}

export default Skills
