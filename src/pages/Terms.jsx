import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ContactUs } from '../components/sections/ContactUs'
import PropTypes from 'prop-types'

import courseDjKeyboardSmall from '../images/png/course-dj-page-colored-small.png'
import courseDjKeyboardLargeColored from '../images/png/course-dj-page-colored-larde.png'
import courseDjKeyboardSmallWebp from '../images/webp/course-dj-page-colored-small.webp'
import courseDjKeyboardLargeColoredWebp from '../images/webp/course-dj-page-colored-larde.webp'

export const Terms = () => {
  const { t } = useTranslation()

  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const listItems = [
    { topicKey: 'terms.itemTopic1', contentKey: 'terms.item1' },
    { topicKey: 'terms.itemTopic2', contentKey: 'terms.item2' },
    { topicKey: 'terms.itemTopic3', contentKey: 'terms.item3' },
    { topicKey: 'terms.itemTopic4', contentKey: 'terms.item4' },
    { topicKey: 'terms.itemTopic5', contentKey: 'terms.item5' },
    { topicKey: 'terms.itemTopic6', contentKey: 'terms.item6' },
    { topicKey: 'terms.itemTopic7', contentKey: 'terms.item7' },
    { topicKey: 'terms.itemTopic8', contentKey: 'terms.item8' }
  ]

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
            <source srcSet={courseDjKeyboardSmallWebp} type="image/webp" />
            <img className="terms-page__img-mobile" src={courseDjKeyboardSmall} loading="lazy" alt="Audio keyboard" />
        </picture>
        <picture>
            <source srcSet={courseDjKeyboardLargeColoredWebp} type="image/webp" />
            <img className="terms-page__img" src={courseDjKeyboardLargeColored} loading="lazy" alt="Audio keyboard" />
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
