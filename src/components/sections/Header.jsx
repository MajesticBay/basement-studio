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
  const { pathname: currentPath } = useLocation()
  const { t, i18n } = useTranslation()
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [navLinksState, setNavLinksState] = useState(navLinksData)
  const [currentScreenNum, setCurrentScreenNum] = useState(0)

  useEffect(() => {
    document.body.style.overflow = openMobileMenu ? 'hidden' : 'unset'
  }, [openMobileMenu])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
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

  const handleLangChange = (e) => i18n.changeLanguage(e.target.value)
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

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
            <a href="/" className="pointer navigation__arrow-link">
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
              <a href="/" className="pointer navigation__arrow-link">
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
