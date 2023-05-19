import React from 'react'
import PropTypes from 'prop-types'

const PdfIframe = ({ file }) => {
  console.log({ file })
  return (
    <iframe
      title="pdf"
      src={`/pdfjs-2.5.207-es5-dist/web/viewer.html?file=${file}`}
      width="100%"
      height="700px"
    ></iframe>
  )
}

PdfIframe.propTypes = {
  file: PropTypes.string,
}

export default PdfIframe
