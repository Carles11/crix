import React from 'react'
linkedInIcon
import linkedInIcon from '../assets/icons/social/linkedin-icon64.png'
import twitterIcon from '../assets/icons/social/twitter-icon64.png'

import '../css/portraits.css'

const SocialMediaBar = () => {
  return (
    <div className="social-flex">
      <img src={twitterIcon} alt="twitter icon" />
      <img src={linkedInIcon} alt="linkedin icon" />
    </div>
  )
}

export default SocialMediaBar
