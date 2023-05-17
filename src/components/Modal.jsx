import React from 'react'
import PropTypes from 'prop-types'

import '../css/modal.css'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button type="button" onClick={handleClose} className="close">
          X
        </button>
        {children}
      </section>
    </div>
  )
}

Modal.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.boolean,
  children: PropTypes.node,
}

export default Modal
