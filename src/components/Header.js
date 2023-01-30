import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import Hamburger from "./Hamburger";
import logo from "../images/logo.svg";
import down from "../images/down.svg";

export const Header = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    return (
        <header className="main-header">
            <nav className="navigation-mobile">
                <img src={logo} alt="logo" />
                <Hamburger openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu}/>
                <MobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
            </nav>
            <nav className="navigation">
                <img src={logo} alt="hamburger menu" />
                <ul className="nav">
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/about-us">ПРО НАС</a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/record-studio">СТУДІЯ ЗВУКОЗАПИСУ</a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/course-dj">КУРС DJ</a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/course-production">КУРС PRODUCTION</a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/rent">ОРЕНДА</a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/podcast">ПОДКАСТ</a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-item-link" href="/contact-us">КОНТАКТИ</a>
                    </li>
                </ul>
                <div className="locale">
                    <p className="locale__current-language">UA</p>
                    <img src={down} className="locale__down" alt="locale"/>
                </div>
            </nav>
        </header>
    )
}