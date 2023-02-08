import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { MobileMenu } from "./MobileMenu";
import { MobileLogo } from "./MobileLogo.js";
import Hamburger from "./Hamburger";
import logo from "../images/icons/logo.svg";
// import down from "../images/icons/down.svg";

const lngs = {
    en: { nativeName: 'English' },
    ua: { nativeName: 'Ukranian' }
};

export const Header = () => {
    const { t, i18n } = useTranslation();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <header className="main-header">
            <nav className="navigation-mobile">
                {/* <img className="navigation-mobile__logo" src={logo} alt="logo" /> */}
                <MobileLogo openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
                <Hamburger openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu}/>
                <MobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
            </nav>
            <nav className="navigation">
                <img src={logo} alt="hamburger menu" />
                <ul className="nav">
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/about-us">{t('header.aboutUs')}</a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/record-studio">{t('header.recordStudio')}</a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/course-dj">{t('header.courseDj')}</a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/course-production">{t('header.courseProduction')}</a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/rent">{t('header.rent')}</a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/podcast">{t('header.podcast')}</a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/contact-us">{t('header.contactUs')}</a>
                    </li>
                </ul>
                {/* <div className="locale">
                    <p className="locale__current-language">UA</p>
                    <img src={down} className="locale__down" alt="locale"/>
                </div> */}
                <div className="mobile-locale-switcher">
                    {Object.keys(lngs).map((lng) => (
                        <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                        {lngs[lng].nativeName}
                        </button>
                    ))}
                    <p className="mobile-locale-switcher__locale mobile-locale-switcher__locale--active pointer">UA</p>
                    <p className="mobile-locale-switcher__pipe">|</p>
                    <p className="mobile-locale-switcher__locale pointer">EN</p>
                </div>
            </nav>
        </header>
    )
}