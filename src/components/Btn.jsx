import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Arrow } from './icons/index.ts'

const Button = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 3.2rem;
padding: 1.8rem 0;
cursor: pointer;
background-color: ${({ $dark }) => ($dark ? 'transparent' : 'rgba(255, 255, 255, 0.92)')};
border: 2px solid rgba(255, 255, 255, 0.4);
color: ${({ $dark }) => ($dark ? 'white' : 'black')};
font-weight: 800;
font-size: 1.6rem;

&:hover {
    border: 2px solid var(--color-white);
    background-color: ${({ $dark }) => ($dark ? 'transparent' : 'var(--color-white)')};
}

@media only screen and (min-width: 1080px) {
    width: fit-content;
    width: -moz-fit-content;
    font-size: 2rem;
    padding: 2.6rem 4rem;
}
`

export const Btn = ({ text, arrowDisplayed, dark, className }) => {
  return (
        <Button $dark={dark} className={className}>
            <span>{ text }</span>
            { arrowDisplayed ? <Arrow dark={dark} /> : <></> }
        </Button>
  )
}

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  arrowDisplayed: PropTypes.bool,
  dark: PropTypes.bool,
  className: PropTypes.string
}

export default Btn
