import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { arrow } from '../../images/icons/index.ts'
import MobileCarousel, { CarouselItem } from '../MobileCarousel2'
import '../../scss/NewCarousel.css'

import carousel1 from '../../images/png/carousel1.png'
import carousel2 from '../../images/png/carousel2.png'
import carousel3 from '../../images/png/carousel3.png'
import carousel4 from '../../images/png/carousel4.png'
import carousel5 from '../../images/png/carousel5.png'
import carousel6 from '../../images/png/carousel6.png'
import carousel7 from '../../images/png/carousel7.png'
import carousel8 from '../../images/png/carousel8.png'
import carousel9 from '../../images/png/carousel9.png'
import carousel10 from '../../images/png/carousel10.png'
import carousel1Webp from '../../images/webp/carousel1.webp'
import carousel2Webp from '../../images/webp/carousel2.webp'
import carousel3Webp from '../../images/webp/carousel3.webp'
import carousel4Webp from '../../images/webp/carousel4.webp'
import carousel5Webp from '../../images/webp/carousel5.webp'
import carousel6Webp from '../../images/webp/carousel6.webp'
import carousel7Webp from '../../images/webp/carousel7.webp'
import carousel8Webp from '../../images/webp/carousel8.webp'
import carousel9Webp from '../../images/webp/carousel9.webp'
import carousel10Webp from '../../images/webp/carousel10.webp'

export const AboutUs = () => {
  const { t } = useTranslation()
  const [r, setR] = useState(0)
  const [brightnessError, setBrightnessError] = useState('')
  const [brightnessError2, setBrightnessError2] = useState('')
  const imagesData = [
    {
      path: carousel1,
      webpPath: carousel1Webp
    },
    {
      path: carousel2,
      webpPath: carousel2Webp
    },
    {
      path: carousel3,
      webpPath: carousel3Webp
    },
    {
      path: carousel4,
      webpPath: carousel4Webp
    },
    {
      path: carousel5,
      webpPath: carousel5Webp
    },
    {
      path: carousel6,
      webpPath: carousel6Webp
    },
    {
      path: carousel7,
      webpPath: carousel7Webp
    },
    {
      path: carousel8,
      webpPath: carousel8Webp
    },
    {
      path: carousel9,
      webpPath: carousel9Webp
    },
    {
      path: carousel10,
      webpPath: carousel10Webp
    }
  ]

  const handleNext = () => {
    if (r === 30 || r === 45) {
      setR(0)
    } else {
      setR(window.screen.width <= 900 ? r + 9 : r + 6)
    }
  }

  const checkWidth = (a, b) => {
    if (window.screen.width <= 900) {
      setR(b)
    } else {
      setR(a)
    }
  }

  const handlePrev = () => {
    if (r <= 0) {
      setR(window.screen.width <= 900 ? 45 : 30)
    } else {
      setR(window.screen.width <= 900 ? r - 9 : r - 6)
    }
  }

  /* eslint-disable default-case */
  const handleDot = (e) => {
    switch (e) {
      case 1:
        setR(0)
        break

      case 2:
        checkWidth(6, 9)
        break

      case 3:
        checkWidth(12, 18)
        break

      case 4:
        checkWidth(18, 27)
        break

      case 5:
        checkWidth(24, 36)
        break

      case 6:
        checkWidth(30, 45)
        break

      case 7:
        checkWidth(36, 54)
        break

      case 8:
        checkWidth(42, 63)
        break

      case 9:
        checkWidth(48, 72)
        break

      case 10:
        checkWidth(54, 81)
        break
    }
  }
  /* eslint-disable default-case */

  useEffect(() => {
    if (r === 12 && window.screen.width >= 900) {
      setBrightnessError('white')
    } else if (r === 18 && window.screen.width <= 900) {
      setBrightnessError('white')
    } else {
      setBrightnessError('')
    }

    if (r === 18 && window.screen.width >= 900) {
      setBrightnessError2('white')
    } else if (r === 27 && window.screen.width <= 900) {
      setBrightnessError2('white')
    } else {
      setBrightnessError2('')
    }
  }, [r])
    const [windowWidth, setWindowWidth] = useState(window.innerWidth) // eslint-disable-line
    const [windowHeight, setWindowHeight] = useState(window.innerHeight) // eslint-disable-line
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }
  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions)
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.screen.width >= 900) {
        if (r !== 30) {
          setR(r + 6)
        } else if (r === 30) {
          setR(0)
        }
      }
    }, 5000)
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  const wrappers = document.querySelectorAll('.carousell-wrapper')
  wrappers.forEach(div => {
    const img = div.querySelector('img')

    const loaded = () => {
      // show image
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
    <div id="about-us" className="about-us" style={{ position: 'relative' }}>
      <p className="about-us__text">
          <span className="bold">BASEMENT</span>
            {t('aboutUs.p1')}
      </p>
      <p className="about-us__text">
      {t('aboutUs.p2')}</p>
      <div className=""></div>

      {windowWidth <= 900
        ? <>
      <MobileCarousel>
        {images}
      </MobileCarousel>
      </>
        : <>
      <div className="carousell-main">
        <div className="carousell"
        style={{ translate: `-${r}0vw 0` }}>
          <div
              className="carousell-wrapper"
              style={{ backgroundImage: 'url(img/preview/HighRes-small.png)' }}>
            <picture>
                <source srcSet={carousel1Webp} type="image/webp" />
                <img src={carousel1} loading="lazy" alt="Carousel image" />
            </picture>
          </div>
          <div
              className="carousell-wrapper"
              style={{ backgroundImage: 'url(img/preview/HighRes-small.png)' }}>
            <picture>
                <source srcSet={carousel2Webp} type="image/webp" />
                <img src={carousel2} loading="lazy" alt="Carousel image" />
            </picture>
          </div>
          <div
              className="carousell-wrapper"
              style={{ backgroundImage: 'url(img/preview/HighRes-small.png)' }}>
            <picture>
                <source srcSet={carousel3Webp} type="image/webp" />
                <img src={carousel3} loading="lazy" alt="Carousel image" />
            </picture>
          </div>
          <div
              className="carousell-wrapper"
              style={{ backgroundImage: 'url(img/preview/HighRes-small.png)' }}>
            <picture>
                <source srcSet={carousel4Webp} type="image/webp" />
                <img src={carousel4} loading="lazy" alt="Carousel image" />
            </picture>
          </div>
          <div
              className="carousell-wrapper"
              style={{ backgroundImage: 'url(img/preview/HighRes-small.png)' }}>
            <picture>
                <source srcSet={carousel5Webp} type="image/webp" />
                <img src={carousel5} loading="lazy" alt="Carousel image" />
            </picture>
          </div>
          <div
              className="carousell-wrapper"
              style={{ backgroundImage: 'url(img/preview/HighRes-small.png)' }}>
            <picture>
                <source srcSet={carousel6Webp} type="image/webp" />
                <img src={carousel6} loading="lazy" alt="Carousel image" />
            </picture>
          </div>
          <div
              className="carousell-wrapper"
              style={{ backgroundImage: 'url(img/preview/HighRes-small.png)' }}>
            <picture>
                <source srcSet={carousel6Webp} type="image/webp" />
                <img src={carousel6} loading="lazy" alt="Carousel image" />
            </picture>
          </div>
          <div
              className="carousell-wrapper"
              style={{ backgroundImage: 'url(img/preview/HighRes-small.png)' }}>
            <picture>
                <source srcSet={carousel7Webp} type="image/webp" />
                <img src={carousel7} loading="lazy" alt="Carousel image" />
            </picture>
          </div>
          <div
              className="carousell-wrapper"
              style={{ backgroundImage: 'url(img/preview/HighRes-small.png)' }}>
            <picture>
                <source srcSet={carousel8Webp} type="image/webp" />
                <img src={carousel8} loading="lazy" alt="Carousel image" />
            </picture>
          </div>
          <div
              className="carousell-wrapper"
              style={{ backgroundImage: 'url(img/preview/HighRes-small.png)' }}>
            <picture>
                <source srcSet={carousel6Webp} type="image/webp" />
                <img src={carousel6} loading="lazy" alt="Carousel image" />
            </picture>
          </div>
          <div
              className="carousell-wrapper"
              style={{ backgroundImage: 'url(img/preview/HighRes-small.png)' }}>
            <picture>
                <source srcSet={carousel10Webp} type="image/webp" />
                <img src={carousel10} loading="lazy" alt="Carousel image" />
            </picture>
          </div>
        </div>
        <button onClick={handleNext} className='nextt'>
          <img src={arrow} alt="Next arrow icon" />
        </button>
        <button onClick={handlePrev} className='prevv'>
        <img src={arrow} alt="Previous arrow icon" />
        </button>
        <div className="afterr" style={{ background: `${r === 0 ? 'transparent' : ''}` }}></div>
        <div className="afterr2" style={{ background: `${r === 30 || r === 45 ? 'transparent' : ''}` }}></div>
      </div>
      <div className="dots-wrapper">
          <div onClick={() => handleDot(1)}
          style={{ background: `${r === 0 ? 'white' : ''}` }} className="dot"></div>
          <div onClick={() => handleDot(2)}
          style={{ background: `${r === 6 || r === 9 ? 'white' : ''}` }} className="dot"></div>
          <div onClick={() => handleDot(3)}
          style={{ background: `${brightnessError}` }} className="dot"></div>
          <div onClick={() => handleDot(4)}
          style={{ background: `${brightnessError2}` }} className="dot"></div>
          <div onClick={() => handleDot(5)} className="dot"></div>
          <div onClick={() => handleDot(6)} className="dot"></div>
          <div onClick={() => handleDot(7)} className="dot"></div>
          <div onClick={() => handleDot(8)} className="dot"></div>
          <div onClick={() => handleDot(9)} className="dot"></div>
          <div onClick={() => handleDot(10)} className="dot"></div>
      </div>
      </>
      }
    </div>
  )
}

export default AboutUs
