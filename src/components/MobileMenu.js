import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-primary);
  position: fixed;
  z-index: 10;
  transform: ${({ openMobileMenu }) => (openMobileMenu ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  // max-width: 50rem;
  padding-top: 15.5rem;
  padding-bottom: env(safe-area-inset-top);
  margin-bottom: env(safe-area-inset-top);
  transition: transform 0.3s ease-in-out;
  border-left: 1px solid var(--color-light-gray);

  li {
    width: fit-content;
    padding-bottom: 4px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 300;
    border-bottom: 0;
    color: var(--color-white);
  }

  li:hover {
    font-weight: 800;
    border-bottom: 1px solid #fff;
    transition: font-weight .25s ease-in-out, border-bottom .25s ease-in-out;
  }
`;

export const MobileMenu = ({ openMobileMenu, setOpenMobileMenu }) => {
  const { t, i18n } = useTranslation();

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
  }

  const clickMobileLink = (target) => {
    setOpenMobileMenu(!openMobileMenu)
    scrollIntoElement(target)
  }

  const scrollIntoElement = (target) => {
    let element = document.getElementById(target);
    element.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"});
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
    <Link
      key={index}
      style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}}
      onClick={() => clickMobileLink(navLink.route)}
      to="/"
    >
      <li>{t(`${navLink.translation}`)}</li>
    </Link>
  ))

  return (
    <Ul openMobileMenu={openMobileMenu}>
      {navLinks}
      <div className="mobile-locale-switcher">
        <LanguageSwitcher value={"ua"} text={"UA"} handleLangChange={ handleLangChange } />
        <p className="mobile-locale-switcher__pipe">|</p>
        <LanguageSwitcher value={"en"} text={"EN"} handleLangChange={ handleLangChange } />
      </div>
    </Ul>
  );
};