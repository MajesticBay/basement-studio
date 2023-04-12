import { useState, useEffect } from "react";
// import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { MobileMenu } from "../MobileMenu";
import { MobileLogo } from "../icons/MobileLogo.js";
import { LanguageSwitcher } from "../LanguageSwitcher";
import Hamburger from "../icons/Hamburger";
import logo from "../../images/icons/logo.svg";

const navLinksData = [
    {
        route: "about-us",
        translation: "header.aboutUs",
        isCurrent: false,
        screens: [1]
    },
    {
        route: "record-studio",
        translation: "header.recordStudio",
        isCurrent: false,
        screens: [2]
    },
    {
        route: "course-dj",
        translation: "header.courseDj",
        isCurrent: false,
        screens: [3]
    },
    {
        route: "course-production",
        translation: "header.courseProduction",
        isCurrent: false,
        screens: [4]
    },
    {
        route: "rent",
        translation: "header.rent",
        isCurrent: false,
        screens: [5]
    },
    {
        route: "contact-us",
        translation: "header.contactUs",
        isCurrent: false,
        screens: [6]
    }
]

const getLinkByScreenNum = (screenNum) => {
    let link = {}
    for(let i=0; i< navLinksData.length; i++) {
        const nl = navLinksData[i]
        if (nl.screens.indexOf(screenNum) !== -1){
            link = nl
            break;
        }
    }

    return link
}

export function Header(){
    const { t, i18n } = useTranslation();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [navLinksState, setNavLinksState] = useState(navLinksData)
    const [currentScreenNum] = useState(0)

    // const myStateRef = useRef(currentScreenNum);

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = openMobileMenu ? 'hidden' : 'unset';
    }, [openMobileMenu])

    function handleScroll() {
        // const position = window.pageYOffset;
        // const size = window.innerHeight
        // const screenNum = Math.floor(Number((position + 40) / size))
        // setCurrentScreenNum(screenNum)
    }

    useEffect(() => {
        setNavLinksState(
            navLinksState.map( nl => {
                const newNl = getLinkByScreenNum(currentScreenNum)
                if (nl.route === newNl.route) {
                    return {...nl, isCurrent:true}
                }
                return {...nl, isCurrent: false}
            })
        )
    }, [currentScreenNum, navLinksState])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    function handleLangChange(e) {
        i18n.changeLanguage(e.target.value);
    }

    /* eslint-disable jsx-a11y/anchor-is-valid */
    const scrollIntoElement = (firstScreen) => {
        const px = window.innerHeight*firstScreen
        window.scrollTo({
            top: px,
            behavior: "smooth"
        })
    }
    /* eslint-disable jsx-a11y/anchor-is-valid */

    const navLinks = navLinksState.map((navLink, index) => (
        <li key={index} className={`nav__menu-item`}>
            <a
                className={`nav__menu-item-link ${navLink.isCurrent ? "_current" : ''}`}
                onClick={() => scrollIntoElement(navLink.screens[0])}
            >
                {t(`${navLink.translation}`)}
            </a>
        </li>
    ))

    return (
        <header className="main-header">
            <nav className="navigation-mobile">
                <MobileLogo openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
                <Hamburger openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu}/>
                <MobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
            </nav>
            <nav className="navigation">
                <NavLink style={{height: "40px"}} to="/">
                    <img src={logo} alt="hamburger menu" />
                </NavLink>
                <ul className="nav">
                    {navLinks}
                </ul>
                <div className="mobile-locale-switcher">
                    <LanguageSwitcher value={"ua"} text={"UA"} handleLangChange={ handleLangChange } />
                    <p className="mobile-locale-switcher__pipe">|</p>
                    <LanguageSwitcher value={"en"} text={"EN"} handleLangChange={ handleLangChange } />
                </div>
            </nav>
        </header>
    )
}