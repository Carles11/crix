import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../css/modal.css'

const PdfIframe = ({ file, DIC }) => {
  const [currentFile, setCurrentFile] = useState(file)

  useEffect(() => {
    setCurrentFile(file)
  }, [file])

  return (
    <div className="i-frame">
      <iframe
        className="i-object"
        src={currentFile}
        title="PDF Viewer"
        width="100%"
        height="600px"
      >
        <div className="alt-info">
          {DIC.MODAL_PDF_LOAD_ERROR}{' '}
          <a
            href={`${file}#view=FitV`}
            target="_blank"
            rel="noopener noreferrer"
            className="dont-underline"
          >
            {DIC.MODAL_PDF_OPEN_FILE}
          </a>
        </div>
      </iframe>
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
