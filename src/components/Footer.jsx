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
            <li>
              <a
                href="https://www.rio-frances.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dont-underline footer-link-to-rio"
              >
                {DIC.FOOTER_WEBDEV}
              </a>
            </li>
            <li>
              <a
                href="https://www.mosaic.photography"
                target="_blank"
                rel="noopener noreferrer"
                className="dont-underline footer-link-to-rio"
              >
                {DIC.FOOTER_MOSAIC}
              </a>
            </li>
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
    FOOTER_CONTACT: PropTypes.string,
    CONTACT_TITLE: PropTypes.string,
    LEGAL: PropTypes.string,
    FOOTER_PRIVACY_POLICY: PropTypes.string,
    FOOTER_IMPRINT: PropTypes.string,
    FOOTER_WEBDEV: PropTypes.string,
    FOOTER_MOSAIC: PropTypes.string,
  }).isRequired,
}

export default Footer
