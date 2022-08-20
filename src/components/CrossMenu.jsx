import React from 'react'

export default class CrossMenu extends React.Component {
  render() {
    return <span className="span-cross" onClick={this.props.handleClose} />
  }
}
