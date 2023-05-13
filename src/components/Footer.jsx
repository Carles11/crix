import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import '../css/footer.css'

const Footer = (props) => {
  const { DIC } = props

  return (
    <div className="footer-container">
      <hr className="bottom-line" />
      <div className="footer-content">
        <div className="footer-left">
          <ul className="footer-ul-left">
            <h5>{DIC.FOOTER_CONTACT}</h5>
            <Link to="/contact">
              <li>{DIC.CONTACT_TITLE}</li>
            </Link>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="footer-ul-right">
            <h5>{DIC.LEGAL}</h5>
            <Link to="/datenschutzerklaerung">
              <li>{DIC.FOOTER_PRIVACY_POLICY}</li>
            </Link>
            <Link to="/impressum">
              <li>{DIC.FOOTER_IMPRINT}</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {
  DIC: PropTypes.shape({
    FOOTER_CONTACT: PropTypes.string.isRequired,
    CONTACT_TITLE: PropTypes.string.isRequired,
    LEGAL: PropTypes.string.isRequired,
    FOOTER_PRIVACY_POLICY: PropTypes.string.isRequired,
    FOOTER_IMPRINT: PropTypes.string.isRequired,
  }).isRequired,
}

export default Footer
