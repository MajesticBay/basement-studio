import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

  .mobile-locale-switcher {
    display: flex;
    gap: .8rem;
    margin-top: 8rem;
    font-size: 14px;
    line-height: 20px;

    &__locale {
      color: rgba(255, 255, 255, 0.4);

      &--active {
        color: var(--color-white);
      }
    }

    &__pipe {
      color: rgba(255, 255, 255, 0.4);
    }
  }
`;

export const MobileMenu = ({ openMobileMenu, setOpenMobileMenu }) => {
  return (
    <Ul openMobileMenu={openMobileMenu}>
      <Link style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}} onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
        <li>ПРО НАС</li>
      </Link>
      <Link style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}} onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
        <li>СТУДІЯ ЗВУКОЗАПИСУ</li>
      </Link>
      <Link style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}} onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
        <li>КУРС DJ</li>
      </Link>
      <Link style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}} onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
        <li>ОРЕНДА</li>
      </Link>
      <Link style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}} onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
        <li>ПОДКАСТ</li>
      </Link>
      <Link style={{padding: '2.2rem 3.5rem', display: 'flex', justifyContent: 'center'}} onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
        <li>КОНТАКТИ</li>
      </Link>
      <div className="mobile-locale-switcher">
        <p className="mobile-locale-switcher__locale mobile-locale-switcher__locale--active">UA</p>
        <p className="mobile-locale-switcher__pipe">|</p>
        <p className="mobile-locale-switcher__locale">EN</p>
      </div>
    </Ul>
  );
};