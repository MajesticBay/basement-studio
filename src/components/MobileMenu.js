import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const lngs = {
    en: { nativeName: 'English' },
    ua: { nativeName: 'Ukranian' }
};

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
  max-width: 50rem;
  padding-top: 15.5rem;
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

  return (
    <Ul openMobileMenu={openMobileMenu}>
      <Link style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}} onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
        <li>{t('header.aboutUs')}</li>
      </Link>
      <Link style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}} onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
        <li>{t('header.recordStudio')}</li>
      </Link>
      <Link style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}} onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
        <li>{t('header.courseDj')}</li>
      </Link>
      <Link style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}} onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
        <li>{t('header.courseProduction')}</li>
      </Link>
      <Link style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}} onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
        <li>{t('header.rent')}</li>
      </Link>
      <Link style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}} onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
        <li>{t('header.podcast')}</li>
      </Link>
      <Link style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}} onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
        <li>{t('header.contactUs')}</li>
      </Link>
      <div className="mobile-locale-switcher">
        {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
            </button>
        ))}
        <p className="mobile-locale-switcher__locale mobile-locale-switcher__locale--active">UA</p>
        <p className="mobile-locale-switcher__pipe">|</p>
        <p className="mobile-locale-switcher__locale">EN</p>
      </div>
    </Ul>
  );
};