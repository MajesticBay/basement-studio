import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { MobileMenu } from "../MobileMenu";
import { MobileLogo } from "../icons/MobileLogo.js";
import { LanguageSwitcher } from "../LanguageSwitcher";
import Hamburger from "../icons/Hamburger";
import logo from "../../images/icons/logo.svg";

export const Header = () => {
    const { t, i18n } = useTranslation();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    function handleLangChange(e) {
        i18n.changeLanguage(e.target.value);
    }

    const navLinksData = [
        {
            route: "about-us",
            translation: "header.aboutUs"
        },
        {
            route: "record-studio",
            translation: "header.recordStudio"
        },
        {
            route: "course-dj",
            translation: "header.courseDj"
        },
        {
            route: "course-production",
            translation: "header.courseProduction"
        },
        {
            route: "rent",
            translation: "header.rent"
        },
        {
            route: "contact-us",
            translation: "header.contactUs"
        }
    ]

    const navLinks = navLinksData.map((navLink, index) => (
        <li key={index} className="nav__menu-item">
            <a className="nav__menu-item-link" href={`/${navLink.route}`}>{t(`${navLink.translation}`)}</a>
        </li>
    ))

    return (
        <header className="main-header">
            <nav className="navigation-mobile">
                {/* <img className="navigation-mobile__logo" src={logo} alt="logo" /> */}
                <MobileLogo openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
                <Hamburger openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu}/>
                <MobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
            </nav>
            <nav className="navigation">
                <NavLink to="/">
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