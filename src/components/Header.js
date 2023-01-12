import Hamburger from "./Hamburger";
import logo from "../images/logo.svg";
import down from "../images/down.svg";

export const Header = () => {
    return (
        <header className="header">
            <nav className="navigation-mobile">
                <img src={logo} alt="hamburger menu" />
                <Hamburger />
            </nav>
            <nav className="navigation">
                <img src={logo} alt="hamburger menu" />
                <ul className="nav">
                    <li className="nav__menu-item">ПРО НАС</li>
                    <li className="nav__menu-item">СТУДІЯ ЗВУКОЗАПИСУ</li>
                    <li className="nav__menu-item">КУРС DJ</li>
                    <li className="nav__menu-item">КУРС PRODUCTION</li>
                    <li className="nav__menu-item">ОРЕНДА</li>
                    <li className="nav__menu-item">ПОДКАСТ</li>
                    <li className="nav__menu-item">КОНТАКТИ</li>
                </ul>
                <div className="locale">
                    <p className="locale__current-language">UA</p>
                    <img src={down} className="locale__down" alt="locale"/>
                </div>
            </nav>
        </header>
    )
}