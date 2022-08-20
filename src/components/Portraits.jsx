import React from 'react'

import avatarC from '../assets/images/Carles_400x400.jpg'
import avatarX from '../assets/images/avatar_xavi.png'
import SocialMediaBar from './SocialMediaBar'
import '../css/portraits.css'

const Portraits = () => {
  return (
    <div className="portrait-flex">
      <div className="portrait-flex_left boxed">
        <img
          src={avatarC}
          alt="Portrait of Carles del Río Francés"
          height="70%"
        />
        <p className="portrait-below_text">Carles del Río Francés</p>
        <SocialMediaBar
          twitterLink="https://twitter.com/TheCriXDesigner"
          linkedinLink="https://www.linkedin.com/in/carlos-del-rio-frances/"
        />
      </div>
      <div className="portrait-flex_right boxed">
        <img
          className="portrait-below_text"
          src={avatarX}
          alt="Portrait of Xavi Vilà Albiol"
          height="70%"
        />
        <p className="portrait-below_text">Xavi Vilà Albiol</p>
        <SocialMediaBar
          twitterLink="https://twitter.com/txiverke"
          linkedinLink="https://www.linkedin.com/in/xavi-vil%C3%A0-albiol-59387029/"
        />
      </div>
    </div>
  )
}

export default Portraits
