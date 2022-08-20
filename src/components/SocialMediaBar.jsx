import React from 'react'

import linkedInIcon from '../assets/icons/social/linkedin-icon64.png'
import twitterIcon from '../assets/icons/social/twitter-icon64.png'

import '../css/portraits.css'

const SocialMediaBar = ({ twitterLink, linkedinLink }) => {
  return (
    <div className="social-flex">
      <a href={twitterLink} target="_blank" rel="noopener noreferrer">
        <img src={twitterIcon} alt="twitter icon" />
      </a>
      <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
        <img src={linkedInIcon} alt="linkedin icon" />
      </a>
    </div>
  )
}

export default SocialMediaBar
