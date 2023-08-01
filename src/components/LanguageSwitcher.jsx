import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const Button = styled.button`
    font-weight: ${({ resolvedLanguage, value }) => (resolvedLanguage === value ? 'bold' : 'normal')};
    color: ${({ resolvedLanguage, value }) => (resolvedLanguage === value ? 'var(--color-white)' : 'rgba(255, 255, 255, 0.4)')};
    background: transparent;
    border: none;
    cursor: pointer;
`

export const LanguageSwitcher = ({ text, value, handleLangChange }) => {
  const { i18n } = useTranslation()

  return (
        <Button resolvedLanguage={i18n.resolvedLanguage} value={value} onClick={(event) => handleLangChange(event)}>{ text }</Button>
  )
}

LanguageSwitcher.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleLangChange: PropTypes.func.isRequired
}
