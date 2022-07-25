import React from 'react'

import avatarC from '../assets/images/avatar_carles.png'
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
        <SocialMediaBar />
      </div>
      <div className="portrait-flex_right boxed">
        <img
          className="portrait-below_text"
          src={avatarX}
          alt="Portrait of Xavi Vilà Albiol"
          height="70%"
        />
        <p className="portrait-below_text">Xavi Vilà Albiol</p>
        <SocialMediaBar />
      </div>
    </div>
  )
}

export default Portraits
