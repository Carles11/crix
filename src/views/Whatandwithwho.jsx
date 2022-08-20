import React from 'react'
// import PropTypes from 'prop-types';

import Divider from '../components/Divider'
import '../css/whatandwithwho.css'

const Whatandwithwho = (props) => {
  const { DIC } = props

  return (
    <main>
      <div className="what-content">
        <section className="what-content_section">
          <h1>{DIC.WHATIDO_SECTION_ONE_TITLE}</h1>
          <div className="what-content_article">
            <h3 className="what-subtitle">{DIC.WHATIDO_SECTION_ONE_SUB_ONE}</h3>
            <p>{DIC.WHATIDO_SECTION_ONE_DESC_ONE}</p>
            <p>{DIC.WHATIDO_SECTION_ONE_DESC_ONE_bis}</p>

            <h3 className="what-subtitle">{DIC.WHATIDO_SECTION_ONE_SUB_TWO}</h3>
            <p>
              {DIC.WHATIDO_SECTION_ONE_DESC_TWO}{' '}
              <a href="/hovear-con-list-de-países">
                {DIC.WHATIDO_SECTION_ONE_DESC_TWO_bis}
              </a>
              .
            </p>
          </div>
        </section>
      </div>
      <Divider />

      <section className="what-content_bottom">
        <div className="what-content_section">
          <h1 className="subtitle-bottom">{DIC.WHATIDO_SECTION_TWO_TITLE}</h1>
          <div className="what-content_article">
            <h3 className="what-subtitle subtitle-bottom">
              {DIC.WHATIDO_SECTION_TWO_SUB_ONE}{' '}
            </h3>
            <ul>
              <li>Instituto Cervantes</li>
              <li>Hessenwaldschule</li>
              <li>Kultusministerium Hessen</li>
            </ul>

            <h3 className="what-subtitle subtitle-bottom">
              {DIC.WHATIDO_SECTION_TWO_SUB_TWO}
            </h3>
            <ul>
              <li>TheCirculArt</li>
              <li>Jordi Arjó, psicólogo</li>
              <li>Abluelemon</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

// Services.propTypes = {
//   DIC: PropTypes.shape({
//     SERVICES_TITLE: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Whatandwithwho
