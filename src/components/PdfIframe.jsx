import React from 'react'
import PropTypes from 'prop-types'
import '../css/modal.css'

const PdfIframe = ({ file, DIC }) => {
  //   console.log({ file })
  return (
    <div className="i-frame">
      {/* <iframe
        title="pdf"
        src={`${file}`}
        // src={file}
        width="100%"
        height="700px"
  ></iframe> */}
      <object className="i-object" data={file} type="application/pdf">
        <div className="alt-info">
          {DIC.MODAL_PDF_LOAD_ERROR}{' '}
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="dont-underline"
          >
            {DIC.MODAL_PDF_OPEN_FILE}
          </a>
        </div>
      </object>
    </div>
  )
}

PdfIframe.propTypes = {
  file: PropTypes.string,
  DIC: PropTypes.shape({
    MODAL_PDF_LOAD_ERROR: PropTypes.string,
    MODAL_PDF_OPEN_FILE: PropTypes.string,
  }),
}

export default PdfIframe
