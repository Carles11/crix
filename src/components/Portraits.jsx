import React from 'react'

import avatarC from '../assets/images/avatar_carles.png'
import avatarX from '../assets/images/avatar_xavi.png'

import '../css/portraits.css'

const Portraits = () => {
  return (
    <div className="portrait-flex">
      <div className="portrait-flex_left">
        <img
          src={avatarC}
          alt="Portrait of Carles del Río Francés"
          height="70%"
        />
        <p className="portrait-below_text">Carles del Río Francés</p>
      </div>
      <div className="portrait-flex_right">
        <img
          className="portrait-below_text"
          src={avatarX}
          alt="Portrait of Xavi Vilà Albiol"
          height="70%"
        />
        <p className="portrait-below_text">Xavi Vilà Albiol</p>
      </div>
    </div>
  )
}

export default Portraits
