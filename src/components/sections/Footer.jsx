import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className="footer">
      <Link className="footer__link" to="/privacy">{t('footer.privacy')}</Link>
      <Link className="footer__link" to="/terms">{t('footer.terms')}</Link>
    </div>
  )
}
