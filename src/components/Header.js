import Hamburger from "./Hamburger";
import logo from "../images/logo.svg";

export const Header = () => {
    return (
        <header className="header">
            <nav className="nav__mobile">
                <img src={logo} alt="hamburger menu" />
                <Hamburger />
            </nav>
            <nav className="nav__desktop">
                <img src={logo} alt="hamburger menu" />
                <ul className="nav-desktop__list-menu">
                    <li>ПРО НАС</li>
                    <li>СТУДІЯ ЗВУКОЗАПИСУ</li>
                    <li>КУРС DJ</li>
                    <li>КУРС PRODUCTION</li>
                    <li>ОРЕНДА</li>
                    <li>ПОДКАСТ</li>
                    <li>КОНТАКТИ</li>
                </ul>
                <p></p>
            </nav>
        </header>
    )
}