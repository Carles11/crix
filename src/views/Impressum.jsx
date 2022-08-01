import React from 'react'

import '../css/impressum.css'

const Impressum = () => {
  return (
    <div>
      <h1 className="impressum-title">IMPRESSUM</h1>
      <div className="impressum-white-block">
        <h2 className="impressum-subtitle">Anbieter</h2>
        <div className="impressum-article">
          Carles del Río Francés
          <br />
          Elbestrasse 15
          <br />
          60329 Frankfurt am Main
          <br />
          Steuernummer: 013 861 02632
          <br />
          Ust-Id.Nr.: DE275710941
        </div>
      </div>
      <div className="impressum-grey-block">
        <h2 className="impressum-subtitle">Bei redaktionellen Inhalten</h2>
        <div className="impressum-article">
          Verantwortlich nach § 55 Abs.2 RStV
          <br /> Carles del Río Francés
          <br /> Elbestrasse 15
          <br /> 60329 Frankfurt am Main
        </div>
      </div>
    </div>
  )
}

export default Impressum
