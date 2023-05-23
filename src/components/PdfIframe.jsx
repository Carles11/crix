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
      <object className="i-object" data={currentFile} type="application/pdf">
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
