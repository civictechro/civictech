/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Anchor } from './Anchor'
import { GitHub, Mail, Facebook } from 'react-feather'
import Header from './Header'
import '../../static/styles/main.scss'
import logo from '../../static/images/civictech_logo.svg'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer id="contact">
          <div className={'container'}>
            <div className={'row'}>
              <div className={'col-5'}>
                <div className={'widget__item'}>
                  <div className={'logo'}>
                    <Link to="/" title={'Civictech România'}>
                      <img alt={'Logo'} src={logo} />
                    </Link>
                  </div>

                  <div className={'about'}>
                    <p>
                      Civictech România urmărește viziunea unei societăți românești deschise, transparente și conectate
                      prin servicii publice digitale.
                    </p>
                  </div>
                </div>
              </div>

              <div className={'col-2'}></div>

              <div className={'col-2'}>
                <div className={'widget__item'}>
                  <div className={'links'}>
                    <ul>
                      <h4>Meniu</h4>
                      <li>
                        <Anchor href="/#who" title={'Cine suntem'}>
                          Cine suntem
                        </Anchor>
                      </li>
                      <li>
                        <Anchor href="/#members" title={'Membri'}>
                          Membri
                        </Anchor>
                      </li>
                      <li>
                        <Anchor href="/#projects" title={'Proiecte'}>
                          Proiecte
                        </Anchor>
                      </li>
                      <li>
                        <Anchor href="/#partners" title={'Parteneri'}>
                          Parteneri
                        </Anchor>
                      </li>
                      <li>
                        <Anchor href="/#contact" title={'Contact'}>
                          Contact
                        </Anchor>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={'col-3'}>
                <div className={'widget__item'}>
                  <div className={'social'}>
                    <Anchor href="https://facebook.com/CivicTechRomania" title={'Facebook Civictech România'}>
                      <Facebook strokeWidth={2} />
                    </Anchor>

                    <Anchor href="https://github.com/civictechro" title={'GitHub Civictech România'}>
                      <GitHub strokeWidth={2} />
                    </Anchor>
                    <Anchor href="mailto:office@civictech.ro" title={'Email Civictech România'}>
                      <Mail strokeWidth={2} />
                    </Anchor>
                  </div>
                </div>
              </div>
            </div>

            <div className={'copyright'}>
              <p>
                Copyright {new Date().getFullYear()}, {` `}{' '}
                <a href="https://civictech.ro" title={'Civictech România'}>
                  <strong>Civictech România</strong>
                </a>
                <br />
                <br />
                București, Alba Iulia, Cluj, Viena
              </p>
            </div>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
