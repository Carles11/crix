import React from 'react'
import { Link } from 'react-router-dom'

import '../css/footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="bottom-line" />
      <div className="footer-content">
        <div className="footer-left">
          <ul className="footer-ul-left">
            <h5>Contacta con Carles</h5>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="footer-ul-right">
            <h5>Lo legal</h5>
            <Link to="/datenschutzerklaerung">
              <li>Datenschutzerklärung</li>
            </Link>
            <Link to="/impressum">
              <li>Impressum</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
