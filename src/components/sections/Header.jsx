import React, { useState, useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MobileMenu } from '../MobileMenu'
import { MobileLogo } from '../icons/MobileLogo'
import { LanguageSwitcher } from '../LanguageSwitcher'
import Hamburger from '../icons/Hamburger'
import logo from '../../images/icons/logo.svg'
import arrowToTheLeft from '../../images/icons/arrow-to-the-left.svg'
import navLinksData from '../constraints/navLinks.json'

const getLinkByScreenNum = (screenNum) => {
  let link = {}
  for (let i = 0; i < navLinksData.length; i++) {
    const nl = navLinksData[i]
    if (nl.screens.indexOf(screenNum) !== -1) {
      link = nl
      break
    }
  }

  return link
}

export function Header () {
  const currentPath = useLocation().pathname
  const { t, i18n } = useTranslation()
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [navLinksState, setNavLinksState] = useState(navLinksData)
  const [currentScreenNum, setCurrentScreenNum] = useState(0)

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = openMobileMenu ? 'hidden' : 'unset'
  }, [openMobileMenu])

  function handleScroll () {
    const position = window.pageYOffset
    const size = window.innerHeight
    const screenNum = Math.floor(Number((position + 150) / size)) // Pay attention to this adjustment!
    setCurrentScreenNum(screenNum)
  }

  useEffect(() => {
    setNavLinksState(
      navLinksState.map((nl) => {
        const newNl = getLinkByScreenNum(currentScreenNum)
        if (nl.route === newNl.route) {
          return { ...nl, isCurrent: true }
        }
        return { ...nl, isCurrent: false }
      })
    )
  }, [currentScreenNum])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleLangChange (e) {
    i18n.changeLanguage(e.target.value)
  }

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = navLinksState.map((navLink, index) => (
    <li key={index} className={'nav__menu-item'}>
      <a
        href={`#${navLink.route}`}
        className={`nav__menu-item-link ${navLink.isCurrent ? '_current' : ''}`}
        onClick={(event) => {
          event.preventDefault()
          scrollTo(navLink.route)
        }}
      >
        {t(`${navLink.translation}`)}
      </a>
    </li>
  ))

  return (
    <>
      {currentPath === '/'
        ? (
        <>
          <header className="main-header">
            <nav className="navigation-mobile">
              <MobileLogo
                openMobileMenu={openMobileMenu}
                setOpenMobileMenu={setOpenMobileMenu}
              />
              <Hamburger
                openMobileMenu={openMobileMenu}
                setOpenMobileMenu={setOpenMobileMenu}
              />
              <MobileMenu
                openMobileMenu={openMobileMenu}
                setOpenMobileMenu={setOpenMobileMenu}
              />
            </nav>
            <nav className="navigation">
              <NavLink style={{ height: '40px' }} to="/">
                <img src={logo} alt="Hamburger menu icon" />
              </NavLink>
              <ul className="nav">{navLinks}</ul>
              <div className="mobile-locale-switcher">
                <div className="mobile-locale-switcher">
                  <LanguageSwitcher
                    value={'ua'}
                    text={'UA'}
                    handleLangChange={handleLangChange}
                  />
                  <p className="mobile-locale-switcher__pipe">|</p>
                  <LanguageSwitcher
                    value={'en'}
                    text={'EN'}
                    handleLangChange={handleLangChange}
                  />
                </div>
              </div>
            </nav>
          </header>
        </>
          )
        : (
        <>
          <header className="main-header">
            <nav className="navigation-mobile">
              <a href="/" className="pointer navigation__arrow-link">
                <img src={arrowToTheLeft} alt="Left arrow icon" />
              </a>
            </nav>
            <nav className="navigation">
              <a href="/" className="pointer navigation__arrow-link">
                <img src={arrowToTheLeft} alt="Left arrow icon" />
              </a>
              <div className="mobile-locale-switcher">
                <LanguageSwitcher
                  value={'ua'}
                  text={'UA'}
                  handleLangChange={handleLangChange}
                />
                <p className="mobile-locale-switcher__pipe">|</p>
                <LanguageSwitcher
                  value={'en'}
                  text={'EN'}
                  handleLangChange={handleLangChange}
                />
              </div>
            </nav>
          </header>
        </>
          )}
    </>
  )
}
