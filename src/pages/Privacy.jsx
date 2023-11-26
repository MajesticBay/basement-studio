import React from 'react'
import { useTranslation } from 'react-i18next'
import { ContactUs } from '../components/sections/ContactUs'
import useScrollToTop from '../components/hooks/useScrollToTop'
import PropTypes from 'prop-types'

import privacySmall from '../images/png/privacy-page-colored-small.png'
import privacyLarge from '../images/png/privacy-page-colored-large.png'
import privacySmallWebp from '../images/webp/privacy-page-colored-small.webp'
import privacyLargeWebp from '../images/webp/privacy-page-colored-large.webp'

export const Privacy = () => {
  const { t } = useTranslation()
  useScrollToTop()

  const listItems = Array.from({ length: 9 }, (_, i) => ({
    topicKey: `privacy.itemTopic${i + 1}`,
    contentKey: `privacy.item${i + 1}`
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
            {t('privacy.header')}
          </h1>
          <p className="terms-page__sign-up">{t('privacy.header2')}</p>
        </div>
        <picture>
            <source srcSet={privacySmallWebp} type="image/webp" />
            <img className="terms-page__img-mobile" src={privacySmall} loading="lazy" alt="Audio keyboard" />
        </picture>
        <picture>
            <source srcSet={privacyLargeWebp} type="image/webp" />
            <img className="terms-page__img" src={privacyLarge} loading="lazy" alt="Audio keyboard" />
        </picture>
        <div className="terms-page__content">
          <ul className="terms-page__list">
            {listItems.map((item, index) => (
              <ListItem key={index} {...item} t={t} />
            ))}
          </ul>
        </div>
      </section>
      <ContactUs snapless={true}/>
    </>
  )
}

export default Privacy
