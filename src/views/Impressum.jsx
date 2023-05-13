import React from 'react'
import PropTypes from 'prop-types'

import '../css/impressum.css'

const Impressum = (props) => {
  const { DIC } = props
  return (
    <div>
      <h1 className="impressum-title">{DIC.IMPRINT_TITLE}</h1>
      <div className="impressum-white-block">
        <h2 className="impressum-subtitle">{DIC.IMPRINT_PROVIDER}</h2>
        <div className="impressum-article">
          Carles del Río Francés
          <br />
          Elbestrasse 15
          <br />
          60329 Frankfurt am Main
          <br />
          Steuernummer: 013 861 02632
          <br />
          Ust-Id. Nr.: DE275710941
        </div>
      </div>
      <div className="impressum-grey-block">
        <h2 className="impressum-subtitle">{DIC.IMPRINT_CONTENTS}</h2>
        <div className="impressum-article">
          {DIC.IMPRINT_RESPONSIBLE}
          <br /> Carles del Río Francés
          <br /> Elbestrasse 15
          <br /> 60329 Frankfurt am Main
        </div>
      </div>
    </div>
  )
}

Impressum.propTypes = {
  DIC: PropTypes.shape({
    IMPRINT_TITLE: PropTypes.string,
    IMPRINT_PROVIDER: PropTypes.string,
    IMPRINT_CONTENTS: PropTypes.string,
    IMPRINT_RESPONSIBLE: PropTypes.string,
    // Add more PropTypes declarations as needed
  }),
}

export default Impressum
