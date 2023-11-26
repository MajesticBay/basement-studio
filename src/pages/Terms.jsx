import React from 'react'
import { useTranslation } from 'react-i18next'
import { ContactUs } from '../components/sections/ContactUs'
import useScrollToTop from '../components/hooks/useScrollToTop'
import PropTypes from 'prop-types'

import termsSmall from '../images/png/terms-page-colored-small.png'
import termsLarge from '../images/png/terms-page-colored-large.png'
import termsSmallWebp from '../images/webp/terms-page-colored-small.webp'
import termsLargeWebp from '../images/webp/terms-page-colored-large.webp'

export const Terms = () => {
  const { t } = useTranslation()
  useScrollToTop()

  const listItems = Array.from({ length: 8 }, (_, i) => ({
    topicKey: `terms.itemTopic${i + 1}`,
    contentKey: `terms.item${i + 1}`
  }))

  const ListItem = ({ topicKey, contentKey, t }) => (
    <li className="terms-page__list-item">
      {topicKey && <h3>{t(topicKey)}</h3>}
      {t(contentKey)}
    </li>
  )

  ListItem.propTypes = {
    topicKey: PropTypes.string,
    contentKey: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired
  }

  return (
    <>
      <section className="terms-page">
        <div className="terms-page__top-container">
          <h1 className="header terms-page__header">
            {t('terms.header')}
          </h1>
          <p className="terms-page__sign-up">{t('terms.header2')}</p>
        </div>
        <picture>
            <source srcSet={termsSmallWebp} type="image/webp" />
            <img className="terms-page__img-mobile" src={termsSmall} loading="lazy" alt="Audio keyboard" />
        </picture>
        <picture>
            <source srcSet={termsLargeWebp} type="image/webp" />
            <img className="terms-page__img" src={termsLarge} loading="lazy" alt="Audio keyboard" />
        </picture>
        <div className="terms-page__content">
          <ul className="terms-page__list">
            {listItems.map((item, index) => (
              <ListItem key={index} {...item} t={t} />
            ))}
          <li className="terms-page__list-item">
            <h3>{t('terms.conclusion')}</h3>
            </li>
          </ul>
        </div>
      </section>
      <ContactUs snapless={true}/>
    </>
  )
}

export default Terms
