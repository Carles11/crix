import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
import 'react-pdf/dist/esm/Page/TextLayer.css'

import '../css/pdfViewer.css'

const PdfViewer = ({ file, totalPages }) => {
  const [numPages, setNumPages] = useState(totalPages)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset) {
    console.log({ totalPages })

    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  return (
    <div className="pdf-container">
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="pdf-navigators">
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <div className="pdf-buttons">
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="button-style"
          >
            <a href="#" className="previous round dont-underline">
              &#8249;
            </a>
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            className="button-style"
          >
            <a href="#" className="next round dont-underline">
              &#8250;
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

PdfViewer.propTypes = {
  file: PropTypes.string,
  totalPages: PropTypes.number,
}

export default PdfViewer
