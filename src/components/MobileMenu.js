import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  position: fixed;
  z-index: 10;
  transform: ${({ openMobileMenu }) => (openMobileMenu ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  max-width: 50rem;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  border-left: 1px solid var(--color-light-gray);

  li {
    width: fit-content;
    padding-bottom: 4px;
    text-align: center;
    color: var(--color-white);
    font-size: 1.6rem;
    font-weight: 300;
    border-bottom: 0;
  }

  li:hover {
    font-weight: 800;
    border-bottom: 1px solid #fff;
    transition: font-weight .25s ease-in-out, border-bottom .25s ease-in-out;
  }

  .mobile-menu__mobile-menu-login-signup-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 2rem 3.5rem;
  }

  .mobile-menu-login-signup-container__login-btn {
    border: 1px solid var(--color-black);
    border-radius: 6px;
    padding: 1rem;
    text-align: center;
    color: var(--color-black);
  }

  .mobile-menu-login-signup-container__login-btn--color-white {
    color: var(--color-primary);
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
    </Ul>
  );
};