import React from 'react'
import PropTypes from 'prop-types'
import '../css/modal.css'

const PdfIframe = ({ file }) => {
  //   console.log({ file })
  return (
    <div className="i-frame">
      <iframe
        title="pdf"
        src={`/pdfJs/web/viewer.html?file=${file}`}
        width="100%"
        height="700px"
      ></iframe>
    </div>
  )
}

PdfIframe.propTypes = {
  file: PropTypes.string,
}

export default PdfIframe
