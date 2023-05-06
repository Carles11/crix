import { Link } from 'react-router-dom'
import React from 'react'
import '../css/notFound.css'

const NotFound = (props) => {
  const { DIC } = props
  return (
    <div className="not-found-container">
      <h4>{DIC.NOT_FOUND_TITLE}</h4>
      <p>{DIC.NOT_FOUND_SUBTITLE}</p>
      <Link to="/">Home</Link>
      <Link to="/">{DIC.NAV_CONTACT}</Link>
    </div>
  )
}

export default NotFound
