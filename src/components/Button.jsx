import React from 'react'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import '../css/button.css'

const generateLinkClass = (size, variant) =>
  `btn${size ? ` btn-${size}` : ''}${variant ? ` btn-${variant}` : ''}`

const Button = ({
  className,
  children,
  size,
  variant,
  onClick,
  elementType,
  pathLink,
  ifHrefOpenSelf,
  disabled,
  ...other
}) => {
  switch (elementType) {
    case 'Link':
      return (
        <Link
          {...other}
          to={pathLink}
          onClick={onClick}
          className={
            (typeof className !== 'undefined' ? `${className} ` : '') +
            generateLinkClass(size, variant)
          }
        >
          {children}
        </Link>
      )
    case 'href':
      return (
        <a
          href={pathLink}
          {...other}
          className={
            (typeof className !== 'undefined' ? `${className} ` : '') +
            generateLinkClass(size, variant)
          }
          target={ifHrefOpenSelf ? '_self' : '_blank'}
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      )
    default:
      return (
        <button
          {...other}
          className={className}
          type={elementType}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      )
  }
}

Button.propTypes = {
  elementType: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  bsPrefix: PropTypes.string,
  block: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
