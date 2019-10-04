import React from 'react'
import PropTypes, { any } from 'prop-types'
import { Link } from 'gatsby'

export const Anchor = ({ href, children, color, className, style }) => {
  return href.startsWith('/') ? (
    <Link to={href} color={color} className={className} style={style}>
      {children}
    </Link>
  ) : (
    <a href={href} color={color} className={className} style={style} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: any,
  color: PropTypes.string,
  className: PropTypes.string,
}
