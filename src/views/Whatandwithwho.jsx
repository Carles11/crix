import React from 'react'
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import DividerDiagonal from '../components/DividerDiagonal'
import '../css/dividerDiagonal.css'
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
              {DIC.WHATIDO_SECTION_ONE_DESC_TWO}
              <a href="/hovear-con-list-de-países" className="dont-underline">
                &nbsp;{DIC.WHATIDO_SECTION_ONE_DESC_TWO_bis}
              </a>
            </p>
          </div>
        </section>
      </div>
      <div className="what-content_fire-bottom">
        <DividerDiagonal />

        <section className="what-content_bottom section-two">
          <div className="what-content_section">
            <h1 className="subtitle-bottom">{DIC.WHATIDO_SECTION_TWO_TITLE}</h1>
            <div className="what-content_article">
              <h3 className="what-subtitle subtitle-bottom section-two__title">
                {DIC.WHATIDO_SECTION_TWO_SUB_ONE}
              </h3>
              <ul>
                <li>Instituto Cervantes</li>
                <li>
                  <Link to="/PdfViewer">Hessenwaldschule</Link>
                </li>
                <li>Kultusministerium Hessen</li>
              </ul>

              <h3 className="what-subtitle subtitle-bottom">
                {DIC.WHATIDO_SECTION_TWO_SUB_TWO}
              </h3>
              <ul>
                <li>
                  <a
                    href="https://thecirculart.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dont-underline"
                  >
                    TheCirculArt
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.leo-leo-hessen.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dont-underline"
                  >
                    Leo, leo... ¿qué lees?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

// Services.propTypes = {
//   DIC: PropTypes.shape({
//     SERVICES_TITLE: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Whatandwithwho
