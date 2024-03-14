import React from 'react'
import PropTypes from 'prop-types'

import linkedInIcon from '../assets/icons/social/linkedin-icon64.png'
import twitterIcon from '../assets/icons/social/twitter-icon64.png'

import '../css/portraits.css'

const SocialMediaBar = ({ twitterLink, linkedinLink }) => {
  return (
    <div className="social-flex">
      <a
        href={twitterLink}
        target="_blank"
        rel="noopener noreferrer"
        className="dont-underline"
      >
        <img src={twitterIcon} alt="twitter icon" />
      </a>
      <a
        href={linkedinLink}
        target="_blank"
        rel="noopener noreferrer"
        className="dont-underline"
      >
        <img src={linkedInIcon} alt="linkedin icon" />
      </a>
    </div>
  )
}

SocialMediaBar.propTypes = {
  twitterLink: PropTypes.string.isRequired,
  linkedinLink: PropTypes.string.isRequired,
  // Add PropTypes declarations for other props used in SocialMediaBar.jsx
}

export default SocialMediaBar
