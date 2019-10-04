import React, { useEffect } from 'react'
import Glide, { Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import '@glidejs/glide/dist/css/glide.core.min.css'

export const Carousel = ({ className, children }) => {
  // Add all classs to an array
  const addAllClasses = ['glide']

  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }
  // const perView = Breakpoints.match({
  //   600: { perView: 1 },
  //   1200: { perView: 5 },
  // })
  // Load glide
  useEffect(() => {
    const glide = new Glide('#glide', {
      type: 'carousel',
      autoplay: 5000,
      breakpoints: {
        600: { perView: 2 },
        1600: { perView: 5 },
      },
      animationDuration: 700,
    })
    glide.mount({ Breakpoints })
  })

  return (
    <div className={addAllClasses.join(' ')} id={'glide'}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{children}</ul>
      </div>
    </div>
  )
}
