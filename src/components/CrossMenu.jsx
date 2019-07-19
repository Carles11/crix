import React from 'react';

export default class CrossMenu extends React.Component {
    render() {
        return (
            <span onClick={this.props.handleClose} />
        );
    }
}
