import React from 'react'
import { logo } from '../../images/icons/index.ts'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const dynamicStyle = props => props.$openMobileMenu && css`
    position: fixed;
    z-index: 999;
    left: 24px;
`

const Image = styled.img`
    display: inline;
    ${dynamicStyle}
    width: 4.5rem;
    height: 3.2rem;
`

export const MobileLogo = ({ openMobileMenu }) => {
  return (
    <Image
        $openMobileMenu={openMobileMenu}
        src={logo}
    />
  )
}

MobileLogo.propTypes = {
  openMobileMenu: PropTypes.bool
}

export default MobileLogo
