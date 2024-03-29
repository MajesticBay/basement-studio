import React, { useState, useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MobileMenu } from '../MobileMenu'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { MobileLogo, Hamburger } from '../icons/index.ts'
import { logo, arrowToLeft } from '../../images/icons/index.ts'
import navLinksData from '../constraints/navLinks.json'

const getLinkByScreenNum = (screenNum) => {
  return navLinksData.find(nl => nl.screens.includes(screenNum)) || {}
}

export function Header () {
  const { pathname: currentPath, hash } = useLocation()
  const { t, i18n } = useTranslation()
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [navLinksState, setNavLinksState] = useState(navLinksData)
  const [currentScreenNum, setCurrentScreenNum] = useState(0)

  useEffect(() => {
    document.body.style.overflow = openMobileMenu ? 'hidden' : 'unset'
  }, [openMobileMenu])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    if (hash) {
      // 990px
      // const scrolledY = window.scrollY
      if (hash === '#terms' || hash === '#privacy') {
        document.getElementById('contact-us').scrollIntoView()
        // if (scrolledY) {
        //   window.scroll(0, scrolledY + 300)
        // }
      } else {
        document.getElementById(hash.replace('#', ''))?.scrollIntoView()
        // if (window.innerWidth <= 990) {
        //   window.scroll(0, 50)
        // }
        // if (window.innerWidth <= 990 & scrolledY) {
        //   window.scroll(0, scrolledY + 50)
        // }
      }
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    const position = window.pageYOffset
    const size = window.innerHeight
    setCurrentScreenNum(Math.floor((position + 150) / size))
  }

  useEffect(() => {
    setNavLinksState(
      navLinksState.map(nl => {
        const isCurrent = getLinkByScreenNum(currentScreenNum).route === nl.route
        return { ...nl, isCurrent }
      })
    )
  }, [currentScreenNum])

  // const scrollTo = (id) => {
  //   // Find the element
  //   const element = document.getElementById(id)
  //   if (element) {
  //     // Scroll to the element
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' })

  //     // Calculate the height of the navbar
  //     const navbarHeight = document.querySelector('.main-header').offsetHeight

  //     // Adjust the scroll position by the navbar height
  //     const scrolledY = window.scrollY
  //     if (scrolledY) {
  //       window.scroll(0, scrolledY - navbarHeight) // Subtract the navbar height
  //     }
  //   }
  // }

  const handleLangChange = (e) => i18n.changeLanguage(e.target.value)
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="main-header">
      <nav className="navigation-mobile">
        {currentPath === '/'
          ? (
            <>
              <MobileLogo openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
              <Hamburger openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
              <MobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
            </>
            )
          : (
            <a href={'/' + `${currentPath.replace('/', '#')}`} className="pointer navigation__arrow-link">
              <img src={arrowToLeft} loading="lazy" alt="Left arrow icon" />
            </a>
            )}
      </nav>
      <nav className="navigation">
        {currentPath === '/'
          ? (
            <>
              <NavLink style={{ height: '40px' }} to="/">
                <img src={logo} loading="lazy" alt="Hamburger menu icon" />
              </NavLink>
              <ul className="nav">
                {navLinksState.map((navLink, index) => (
                  <li key={index} className={'nav__menu-item'}>
                    <a
                      href={`#${navLink.route}`}
                      className={`nav__menu-item-link ${navLink.isCurrent ? '_current' : ''}`}
                      onClick={(event) => {
                        event.preventDefault()
                        scrollTo(navLink.route)
                      }}
                    >
                      {t(navLink.translation)}
                    </a>
                  </li>
                ))}
              </ul>
            </>
            )
          : (
              <a href={'/' + `${currentPath.replace('/', '#')}`} className="pointer navigation__arrow-link">
                <img src={arrowToLeft} loading="lazy" alt="Left arrow icon" />
              </a>
            )}
        <div className="mobile-locale-switcher">
          <LanguageSwitcher value={'ua'} text={'UA'} handleLangChange={handleLangChange} />
          <p className="mobile-locale-switcher__pipe">|</p>
          <LanguageSwitcher value={'en'} text={'EN'} handleLangChange={handleLangChange} />
        </div>
      </nav>
    </header>
  )
}
