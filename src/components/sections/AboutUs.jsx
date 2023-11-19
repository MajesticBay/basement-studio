import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { arrow } from '../../images/icons/index.ts'
import MobileCarousel, { CarouselItem } from '../MobileCarousel2'
import '../../scss/NewCarousel.css'

// import photo from '../../images/png/HighRes.png'
// import bg from '../../images/png/bg.png'
// import bg1 from '../../images/png/bg-record-studio.png'
// import photoWebp from '../../images/webp/HighRes.webp'
// import bgWebp from '../../images/webp/bg.webp'
// import bg1Webp from '../../images/webp/bg-record-studio.webp'

// To do: - fix white dots
//        - move from jpg to high-compressed png
//        - DRY 'carousell-main' div
//        - DRY images data
//        - share resize window listener to other components

import frame1 from '../../images/jpg/carousel/1.jpg'
import frame1webp from '../../images/webp/carousel/1.webp'
import frame2 from '../../images/jpg/carousel/2.jpg'
import frame2webp from '../../images/webp/carousel/2.webp'
import frame3 from '../../images/jpg/carousel/3.jpg'
import frame3webp from '../../images/webp/carousel/3.webp'
import frame4 from '../../images/jpg/carousel/4.jpg'
import frame4webp from '../../images/webp/carousel/4.webp'
import frame5 from '../../images/jpg/carousel/5.jpg'
import frame5webp from '../../images/webp/carousel/5.webp'
import frame6 from '../../images/jpg/carousel/6.jpg'
import frame6webp from '../../images/webp/carousel/6.webp'
import frame7 from '../../images/jpg/carousel/7.jpg'
import frame7webp from '../../images/webp/carousel/7.webp'
import frame8 from '../../images/jpg/carousel/8.jpg'
import frame8webp from '../../images/webp/carousel/8.webp'
import frame9 from '../../images/jpg/carousel/9.jpg'
import frame9webp from '../../images/webp/carousel/9.webp'
import frame10 from '../../images/jpg/carousel/10.jpg'
import frame10webp from '../../images/webp/carousel/10.webp'

export const AboutUs = () => {
  const { t } = useTranslation()
  const [r, setR] = useState(0)
  const [brightnessError, setBrightnessError] = useState('')
  const [brightnessError2, setBrightnessError2] = useState('')
  const imagesData = [
    {
      path: frame1,
      webpPath: frame1webp
    },
    {
      path: frame2,
      webpPath: frame2webp
    },
    {
      path: frame3,
      webpPath: frame3webp
    },
    {
      path: frame4,
      webpPath: frame4webp
    },
    {
      path: frame5,
      webpPath: frame5webp
    },
    {
      path: frame6,
      webpPath: frame6webp
    },
    {
      path: frame7,
      webpPath: frame7webp
    },
    {
      path: frame8,
      webpPath: frame8webp
    },
    {
      path: frame9,
      webpPath: frame9webp
    },
    {
      path: frame10,
      webpPath: frame10webp
    }
  ]
  const handleNext = () => {
    if (r === 54 || r === 81) {
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
      setR(window.screen.width <= 900 ? 81 : 54)
    } else {
      setR(window.screen.width <= 900 ? r - 9 : r - 6)
    }
  }
  useEffect(() => {
    console.log(`==[${r}]==`)
  }, [r])

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
      default:
        setR(0)
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
        if (r !== 54) {
          setR(r + 6)
        } else if (r === 54) {
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
                style={{ backgroundImage: 'url(img/preview/carousel/1.png)' }}>
                <picture>
                  <source srcSet={frame1webp} type="image/webp" />
                  <img src={frame1} loading="lazy" alt="Carousel image" />
                </picture>
              </div>
              <div
                className="carousell-wrapper"
                style={{ backgroundImage: 'url(img/preview/carousel/2.png)' }}>
                <picture>
                  <source srcSet={frame2webp} type="image/webp" />
                  <img src={frame2} loading="lazy" alt="Carousel image" />
                </picture>
              </div>
              <div
                className="carousell-wrapper"
                style={{ backgroundImage: 'url(img/preview/carousel/3.png)' }}>
                <picture>
                  <source srcSet={frame3webp} type="image/webp" />
                  <img src={frame3} loading="lazy" alt="Carousel image" />
                </picture>
              </div>
              <div
                className="carousell-wrapper"
                style={{ backgroundImage: 'url(img/preview/carousel/4.png)' }}>
                <picture>
                  <source srcSet={frame4webp} type="image/webp" />
                  <img src={frame4} loading="lazy" alt="Carousel image" />
                </picture>
              </div>
              <div
                className="carousell-wrapper"
                style={{ backgroundImage: 'url(img/preview/carousel/5.png)' }}>
                <picture>
                  <source srcSet={frame5webp} type="image/webp" />
                  <img src={frame5} loading="lazy" alt="Carousel image" />
                </picture>
              </div>
              <div
                className="carousell-wrapper"
                style={{ backgroundImage: 'url(img/preview/carousel/6.png)' }}>
                <picture>
                  <source srcSet={frame6webp} type="image/webp" />
                  <img src={frame6} loading="lazy" alt="Carousel image" />
                </picture>
              </div>
              <div
                className="carousell-wrapper"
                style={{ backgroundImage: 'url(img/preview/carousel/7.png)' }}>
                <picture>
                  <source srcSet={frame7webp} type="image/webp" />
                  <img src={frame7} loading="lazy" alt="Carousel image" />
                </picture>
              </div>
              <div
                className="carousell-wrapper"
                style={{ backgroundImage: 'url(img/preview/carousel/8.png)' }}>
                <picture>
                  <source srcSet={frame8webp} type="image/webp" />
                  <img src={frame8} loading="lazy" alt="Carousel image" />
                </picture>
              </div>
              <div
                className="carousell-wrapper"
                style={{ backgroundImage: 'url(img/preview/carousel/9.png)' }}>
                <picture>
                  <source srcSet={frame9webp} type="image/webp" />
                  <img src={frame9} loading="lazy" alt="Carousel image" />
                </picture>
              </div>
              <div
                className="carousell-wrapper"
                style={{ backgroundImage: 'url(img/preview/carousel/10.png)' }}>
                <picture>
                  <source srcSet={frame10webp} type="image/webp" />
                  <img src={frame10} loading="lazy" alt="Carousel image" />
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
            <div className="afterr2" style={{ background: `${r === 54 || r === 81 ? 'transparent' : ''}` }}></div>
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
            <div onClick={() => handleDot(5)}
              style={{ background: `${r === 24 || r === 36 ? 'white' : ''}` }} className="dot"></div>
            <div onClick={() => handleDot(6)}
              style={{ background: `${r === 30 || r === 45 ? 'white' : ''}` }} className="dot"></div>
            <div onClick={() => handleDot(7)}
              style={{ background: `${r === 36 || r === 54 ? 'white' : ''}` }} className="dot"></div>
            <div onClick={() => handleDot(8)}
              style={{ background: `${r === 42 || r === 63 ? 'white' : ''}` }} className="dot"></div>
            <div onClick={() => handleDot(9)}
              style={{ background: `${r === 48 || r === 72 ? 'white' : ''}` }} className="dot"></div>
            <div onClick={() => handleDot(10)}
              style={{ background: `${r === 54 || r === 81 ? 'white' : ''}` }} className="dot"></div>
          </div>
        </>
      }
    </div>
  )
}

export default AboutUs
