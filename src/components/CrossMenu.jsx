import React from 'react'
import PropTypes from 'prop-types'

import '../css/burgerMenu.css'

export default class CrossMenu extends React.Component {
  render() {
    return <span className="span-cross" onClick={this.props.handleClose} />
  }
}

CrossMenu.propTypes = {
  handleClose: PropTypes.func.isRequired,
}
