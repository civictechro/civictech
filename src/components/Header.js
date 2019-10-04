import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../../static/images/civictech_logo.svg'
import logoWhite from '../../static/images/civictech_logo_alb.png'
import { Menu } from './Menu'
import { Top } from './Top'
import Sticky from 'react-stickynode'
const Header = ({ siteTitle }) => (
  <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
    {status => {
      if (status.status === Sticky.STATUS_FIXED) {
        return (
          <header style={{ paddingTop: 20 }}>
            <div className={'container'}>
              <div className={'top-menu'}>
                <div className={'logo'}>
                  <Link to="/" title={'Civictech Romania'}>
                    <img alt={'Logo'} src={logo} />
                  </Link>
                </div>
                <Menu />
              </div>
            </div>
          </header>
        )
      }
      if (status.status === Sticky.STATUS_ORIGINAL) {
        return (
          <header>
            <div className={'container'}>
              <div className={'top-menu'}>
                <div className={'logo'}>
                  <Link to="/" title={'Civictech Romania'}>
                    <img alt={'Logo'} src={logoWhite} />
                  </Link>
                </div>
                <Top color="#fff" />
                <Menu />
              </div>
            </div>
          </header>
        )
      }
      return ''
    }}
  </Sticky>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
