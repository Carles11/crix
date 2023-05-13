import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'
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

NotFound.propTypes = {
  DIC: PropTypes.shape({
    NOT_FOUND_TITLE: PropTypes.string,
    NOT_FOUND_SUBTITLE: PropTypes.string,
    NAV_CONTACT: PropTypes.string,
  }),
}

export default NotFound
