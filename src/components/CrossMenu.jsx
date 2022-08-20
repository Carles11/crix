import React from 'react'

import '../css/burgerMenu.css'

export default class CrossMenu extends React.Component {
  render() {
    return <span className="span-cross" onClick={this.props.handleClose} />
  }
}
