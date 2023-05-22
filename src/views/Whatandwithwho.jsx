import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from '../components/Modal.jsx'

import DividerDiagonal from '../components/DividerDiagonal'
// import PdfViewer from '../components/PdfViewer'

import CervantesProgrammPdf from '../assets/pdfs/Kulturprogramm_APRIL-AUG_2023_4web_lowRes.pdf'
import CervantesTripticoPdf from '../assets/pdfs/INSTITUTO-CERVANTES-ARTUR-HERAS-EXPOSICION_triptico_2023_4web.pdf'
import CervantesBannerPdf from '../assets/pdfs/kurse_banner.pdf'
import LeoFlyerPdf from '../assets/pdfs/Leo-2022-flyer_lowRes.pdf'
import PdfIframe from '../components/PdfIframe.jsx'

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

  const returnBoolean = () => {
    return showPdf
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
                <h5>Instituto Cervantes</h5>
                <li onClick={() => loadPdf(CervantesProgrammPdf)}>
                  {DIC.WHATIDO_PDF_1}
                </li>
                <li onClick={() => loadPdf(CervantesTripticoPdf)}>
                  {DIC.WHATIDO_PDF_2}
                </li>
                <li onClick={() => loadPdf(CervantesBannerPdf)}>
                  {DIC.WHATIDO_PDF_4}
                </li>
                <h5>Hessenwaldschule & Kultusministerium Hessen</h5>
                <li onClick={() => loadPdf(LeoFlyerPdf)}>
                  {DIC.WHATIDO_PDF_3}
                </li>
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
        <div className="max-width-modal">
          <Modal show={returnBoolean} handleClose={hideModal}>
            <PdfIframe file={pdfFile} DIC={DIC} />
            {/* <PdfViewer file={pdfFile} totalPages={totalPages} /> */}
          </Modal>
        </div>
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
    WHATIDO_PDF_1: PropTypes.string,
    WHATIDO_PDF_2: PropTypes.string,
    WHATIDO_PDF_3: PropTypes.string,
    WHATIDO_PDF_4: PropTypes.string,
  }),
}
export default Whatandwithwho
