import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from '../components/Modal.jsx'

import DividerDiagonal from '../components/DividerDiagonal'
import PdfViewer from '../components/PdfViewer'

import CervantesPdf from '../assets/pdfs/Kulturprogramm_APRIL-AUG_2023_digital.pdf'

import '../css/dividerDiagonal.css'
import '../css/whatandwithwho.css'

const Whatandwithwho = (props) => {
  const { DIC } = props
  const [showPdf, setShowPdf] = useState(false)
  const [pdfFile, setPdfFile] = useState(null)

  const loadPdf = (file) => {
    setPdfFile(file)
    setShowPdf(true)
  }

  const hideModal = () => {
    setShowPdf(false)
  }
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
                <li onClick={() => loadPdf(CervantesPdf)}>
                  Instituto Cervantes
                </li>
                <li>Hessenwaldschule</li>
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

        <Modal show={showPdf} handleClose={hideModal}>
          <p>Modal Viewer</p>
          <PdfViewer file={pdfFile} />
        </Modal>
      </div>
    </main>
  )
}

Whatandwithwho.propTypes = {
  DIC: PropTypes.shape({
    WHATIDO_SECTION_ONE_TITLE: PropTypes.string,
    WHATIDO_SECTION_ONE_SUB_ONE: PropTypes.string,
    WHATIDO_SECTION_ONE_DESC_ONE: PropTypes.string,
    WHATIDO_SECTION_ONE_DESC_ONE_bis: PropTypes.string,
    WHATIDO_SECTION_ONE_SUB_TWO: PropTypes.string,
    WHATIDO_SECTION_ONE_DESC_TWO: PropTypes.string,
    WHATIDO_SECTION_ONE_DESC_TWO_bis: PropTypes.string,
    WHATIDO_SECTION_TWO_TITLE: PropTypes.string,
    WHATIDO_SECTION_TWO_SUB_ONE: PropTypes.string,
    WHATIDO_SECTION_TWO_SUB_TWO: PropTypes.string,
  }),
}
export default Whatandwithwho
