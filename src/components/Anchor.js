import React from 'react'
import PropTypes, { any } from 'prop-types'
import { Link } from 'gatsby'

export const Anchor = ({ href, children, title, color, className, style }) => {
  return href.startsWith('/') ? (
    <Link to={href} color={color} className={className} style={style}>
      {children}
    </Link>
  ) : (
    <a
      href={href}
      color={color}
      className={className}
      style={style}
      target="_blank"
      rel="noopener noreferrer"
      title={title}>
      {children}
    </a>
  )
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: any,
  title: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
}
