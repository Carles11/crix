import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import CrossMenu from './CrossMenu'

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: right;
  padding-right: 20px;
  color: silver;
  text-decoration: none;
  cursor: pointer;
  line-height: 0.1;
`

const StyledLink = styled(Link)`
  color: #0a6284;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
`

const CrossPosition = styled.div`
  margin-left: 120px;
  margin-top: 40px;
`

class NavigationMobile extends React.Component {
  render() {
    return (
      <StyledMenu>
        <CrossPosition>
          <CrossMenu handleClose={this.props.handleClose} />
        </CrossPosition>
        <StyledLink to="/whatandwithwho">
          <h4>Qué hago y con quién trabajo</h4>
        </StyledLink>
        <StyledLink to="/about-us">
          <h4>Sobre Carles</h4>
        </StyledLink>
        <StyledLink to="/contact">
          <h4>Contacta</h4>
        </StyledLink>
      </StyledMenu>
    )
  }
}

export default NavigationMobile
