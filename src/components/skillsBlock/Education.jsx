import React from 'react'
import '../../css/skillsBlock.css'

const Education = (props) => {
  const { DIC } = props
  return (
    <div className="column-2a">
      <h5>{DIC.SKILLS_DESIGN}</h5>
      <table className="table-style">
        <tbody>
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
        </tbody>
      </table>
    </div>
  )
}

export default Education
