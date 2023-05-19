import React from 'react'
import PropTypes from 'prop-types'

import '../css/modal.css'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show()
    ? 'modal display-block'
    : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="iframe-header">
          <h5>Crix design's</h5>
          <button type="button" onClick={handleClose} className="close">
            Close
          </button>
        </div>
        <hr />
        {children}
      </section>
    </div>
  )
}

Modal.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.func,
  children: PropTypes.node,
}

export default Modal
