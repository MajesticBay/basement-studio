import React from 'react'
import logo from '../../images/icons/logo.svg'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Image = styled.img`
    display: inline;
    position: ${({ openMobileMenu }) => (openMobileMenu ? 'fixed' : 'relative')};;
    z-index: ${({ openMobileMenu }) => (openMobileMenu ? '999' : '')};
    top: ${({ openMobileMenu }) => (openMobileMenu ? '16px' : '')};
    left: ${({ openMobileMenu }) => (openMobileMenu ? '24px' : '')};
    width: 4.5rem;
    height: 3.2rem;
`

export const MobileLogo = ({ openMobileMenu }) => {
  return (
        <Image
            openMobileMenu={openMobileMenu}
            src={logo}
        >
        </Image>
  )
}

MobileLogo.propTypes = {
  openMobileMenu: PropTypes.bool
}

export default MobileLogo
