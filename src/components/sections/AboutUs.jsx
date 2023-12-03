import React, { useRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { arrow } from '../../images/icons/index.ts'
import MobileCarousel, { CarouselItem } from '../MobileCarousel2'
import '../../scss/NewCarousel.css'
import useWindowDimensions from '../hooks/useWindowDimensions'
import useElementVisibility from '../hooks/useElementVisibility'
import { imagesData } from '../constraints/carouselPics'

export const AboutUs = () => {
  const { t } = useTranslation()
  const [r, setR] = useState(0)
  const { width } = useWindowDimensions()

  const aboutUsRef = useRef(null)
  const isVisible = useElementVisibility(aboutUsRef)

  const isDotActive = (dotIndex) => {
    const increment = width > 900 ? 6 : 9
    const activeRValue = increment * (dotIndex - 1)
    return r === activeRValue ? 'white' : ''
  }

  const increment = width <= 900 ? 9 : 6
  const maxR = increment * (imagesData.length - 1)

  const updateR = (direction) => {
    setR((currentR) => {
      if (direction === 'next') {
        return currentR === maxR ? 0 : currentR + increment
      } else if (direction === 'prev') {
        return currentR === 0 ? maxR : currentR - increment
      }
      return currentR
    })
  }

  const handleNext = () => updateR('next')
  const handlePrev = () => updateR('prev')
  const handleDot = (index) => {
    setR((index - 1) * increment)
  }

  useEffect(() => {
    let interval
    if (isVisible) {
      interval = setInterval(() => {
        updateR('next')
      }, 5000)
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isVisible, width])

  const wrappers = document.querySelectorAll('.carousell-wrapper')
  wrappers.forEach(div => {
    const img = div.querySelector('img')

    const loaded = () => {
      div.classList.add('loaded')
    }

    if (img.complete) loaded()
    else img.addEventListener('load', loaded)
  })

  const images = imagesData.map((image, imageIndex) => (
    <CarouselItem key={imageIndex}>
      <picture>
        <source srcSet={image.webpPath} type="image/webp" />
        <img style={{ width: '93vw' }} className='about-us__photo' src={image.path} loading="lazy" alt="Gallery image" />
      </picture>
    </CarouselItem>
  ))

  return (
    <div ref={aboutUsRef} id="about-us" className="about-us" style={{ position: 'relative' }}>
      <p className="about-us__text">
        <span className="bold">BASEMENT</span>
        {t('aboutUs.p1')}
      </p>
      <p className="about-us__text">
        {t('aboutUs.p2')}</p>
      <div className=""></div>

      {width <= 900
        ? <>
          <MobileCarousel>
            {images}
          </MobileCarousel>
        </>
        : <>
          <div className="carousell-main">
            <div className="carousell" style={{ translate: `-${r}0vw 0` }}>
              {imagesData.map((item, index) => (
                <div key={index}
                  className="carousell-wrapper"
                  style={{ backgroundImage: `url(${item.bgImage})` }}>
                  <picture>
                    <source srcSet={item.webpPath} type="image/webp" />
                    <img src={item.path} loading="lazy" alt={`Carousel image ${index + 1}`} />
                  </picture>
                </div>
              ))}
            </div>
            <button onClick={handleNext} className='nextt'>
              <img src={arrow} alt="Next arrow icon" />
            </button>
            <button onClick={handlePrev} className='prevv'>
              <img src={arrow} alt="Previous arrow icon" />
            </button>
            <div className="afterr" style={{ background: `${r === 0 ? 'transparent' : ''}` }}></div>
            <div className="afterr2" style={{ background: `${r === 54 || r === 81 ? 'transparent' : ''}` }}></div>
          </div>
          <div className="dots-wrapper">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i}
                onClick={() => handleDot(i + 1)}
                style={{ background: isDotActive(i + 1) }}
                className="dot"
              ></div>
            ))}
          </div>
        </>
      }
    </div>
  )
}

export default AboutUs
