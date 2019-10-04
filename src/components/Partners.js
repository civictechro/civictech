import React from 'react'
import { partners, supporters } from '../data/partners'
import { Carousel } from './Carousel'
import { Anchor } from './Anchor'

export const Partners = () => (
  <>
    <h3>LUCRĂM ALĂTURI DE:</h3>
    <Carousel>
      <>
        {partners.map(({ url, logo, title }, index) => (
          <div className="slide" key={index}>
            <Anchor href={url}>
              <img src={logo} alt={title} />
            </Anchor>
          </div>
        ))}
      </>
    </Carousel>
    <h3>NE SPRIJINĂ ȘI RECOMANDĂM:</h3>
    <div className="supporters">
      {supporters.map(({ url, logo, title }, index) => (
        <div className="supporter" key={index}>
          <Anchor href={url}>
            <img src={logo} alt={title} />
          </Anchor>
        </div>
      ))}
    </div>
  </>
)
