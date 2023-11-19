import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { arrow } from '../../images/icons/index.ts'
import MobileCarousel, { CarouselItem } from '../MobileCarousel2'
import '../../scss/NewCarousel.css'
import useWindowDimensions from '../hooks/useWindowDimensions'

// To do:
//        - move from jpg to high-compressed png

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
  const { width } = useWindowDimensions()

  const imagesData = [
    {
      path: frame1,
      webpPath: frame1webp,
      bgImage: 'img/preview/carousel/1.png'
    },
    {
      path: frame2,
      webpPath: frame2webp,
      bgImage: 'img/preview/carousel/2.png'
    },
    {
      path: frame3,
      webpPath: frame3webp,
      bgImage: 'img/preview/carousel/3.png'
    },
    {
      path: frame4,
      webpPath: frame4webp,
      bgImage: 'img/preview/carousel/4.png'
    },
    {
      path: frame5,
      webpPath: frame5webp,
      bgImage: 'img/preview/carousel/5.png'
    },
    {
      path: frame6,
      webpPath: frame6webp,
      bgImage: 'img/preview/carousel/6.png'
    },
    {
      path: frame7,
      webpPath: frame7webp,
      bgImage: 'img/preview/carousel/7.png'
    },
    {
      path: frame8,
      webpPath: frame8webp,
      bgImage: 'img/preview/carousel/8.png'
    },
    {
      path: frame9,
      webpPath: frame9webp,
      bgImage: 'img/preview/carousel/9.png'
    },
    {
      path: frame10,
      webpPath: frame10webp,
      bgImage: 'img/preview/carousel/10.png'
    }
  ]

  const handleNext = () => {
    if (r === 54 || r === 81) {
      setR(0)
    } else {
      setR(width <= 900 ? r + 9 : r + 6)
    }
  }

  const checkWidth = (a, b) => {
    if (width <= 900) {
      setR(b)
    } else {
      setR(a)
    }
  }

  const handlePrev = () => {
    if (r <= 0) {
      setR(width <= 900 ? 81 : 54)
    } else {
      setR(width <= 900 ? r - 9 : r - 6)
    }
  }

  const isDotActive = (dotIndex) => {
    const increment = width > 900 ? 6 : 9
    const activeRValue = increment * (dotIndex - 1)
    return r === activeRValue ? 'white' : ''
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
      default:
        setR(0)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (width >= 900) {
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
