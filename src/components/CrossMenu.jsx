import React from 'react';
import styled from 'styled-components';

const CrossRight = styled.div`
    float: right;
`;

export default class CrossMenu extends React.Component {
    render() {
        return (
          <CrossRight>
            <span onClick={this.props.handleClose} />
          </CrossRight>
        );
    }
}
