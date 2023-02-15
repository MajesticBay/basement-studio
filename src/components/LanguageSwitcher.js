import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Button = styled.button`
    font-weight: ${({resolvedLanguage, value}) => (resolvedLanguage === value ? 'bold' : 'normal')};
    color: ${({resolvedLanguage, value}) => (resolvedLanguage === value ? 'var(--color-white)' : 'rgba(255, 255, 255, 0.4)')};
    background: transparent;
    border: none;
`

export const LanguageSwitcher = ({text, value, handleLangChange}) => {
    const { t, i18n } = useTranslation();
    return (
        <Button resolvedLanguage={i18n.resolvedLanguage} value={value} onClick={(event) => handleLangChange(event)}>{ text }</Button>
    )
}