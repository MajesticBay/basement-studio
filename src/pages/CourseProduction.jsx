import React from 'react'
import { useTranslation } from 'react-i18next'
import { ContactUs } from '../components/sections/ContactUs'
import { Btn } from '../components/Btn'
import { links } from '../components/constraints/constrData'
import useScrollToTop from '../components/hooks/useScrollToTop'

import courseProductionKeyboardSmall from '../images/png/course-production-page-colored-small.png'
import courseProductionKeyboardLargeColored from '../images/png/course-production-page-colored-large.png'
import courseProductionKeyboardSmallWebp from '../images/webp/course-production-page-colored-small.webp'
import courseProductionKeyboardLargeColoredWebp from '../images/webp/course-production-page-colored-large.webp'

export const CourseProduction = () => {
  const { t } = useTranslation()
  useScrollToTop()

  const listItems = Array.from({ length: 24 }, (_, i) => `courseProductionPage.listItem${i + 1}`)

  return (
    <>
      <section id="course-dj-page" className="course-dj-page">
        <div className="course-dj-page__top-container">
          <h1 className="header course-dj-page__header">
            {t('courseProductionPage.header')}
          </h1>
          <p className="course-dj-page__sign-up">{t('courseProductionPage.signup')}</p>
          <a href={links.TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <Btn
              className={'course-dj-page__btn'}
              text={t('courseProductionPage.btn')}
              arrowDisplayed={true}
              dark={false}
            />
          </a>
        </div>
        <picture>
          <source srcSet={courseProductionKeyboardSmallWebp} type="image/webp" />
          <img className="course-dj-page__img-mobile" src={courseProductionKeyboardSmall} loading="lazy" alt="Audio keyboard" />
        </picture>
        <picture>
          <source srcSet={courseProductionKeyboardLargeColoredWebp} type="image/webp" />
          <img className="course-dj-page__img" src={courseProductionKeyboardLargeColored} loading="lazy" alt="Audio keyboard" />
        </picture>
        <div className="course-dj-page__content">
          <h2 className="course-dj-page__sub-header">
            {t('courseProductionPage.subheader')}
          </h2>
          <ul className="course-dj-page__list">
            {listItems.map(itemKey => (
              <li key={itemKey} className="course-dj-page__list-item">
                {t(itemKey)}
              </li>
            ))}
          </ul>
          <div className="course-dj-page__cards">
            <div className="course-dj-page__card course-page-card">
              <p className="course-page-card__header">
                {t('courseDjPage.cardHeaderOne')}
              </p>
              <p className="course-page-card__description">
                {t('courseDjPage.cardDescription')}
              </p>
              <div className="course-page-card__row">
                <p className="course-page-card__quantity">
                  10 {t('courseDjPage.lessons')}
                </p>
                <p className="course-page-card__price">350$</p>
              </div>
              <div className="course-page-card__row">
                <p className="course-page-card__quantity">
                  20 {t('courseDjPage.lessons')}
                </p>
                <p className="course-page-card__price">600$</p>
              </div>
            </div>
            <div className="course-dj-page__card course-page-card">
              <p className="course-page-card__header">
                {t('courseDjPage.cardHeaderTwo')}
              </p>
              <p className="course-page-card__description">
                {t('courseDjPage.cardDescription')}
              </p>
              <div className="course-page-card__row">
                <p className="course-page-card__quantity">
                  10 {t('courseDjPage.lessons')}
                </p>
                <p className="course-page-card__price">550$</p>
              </div>
              <div className="course-page-card__row">
                <p className="course-page-card__quantity">
                  20 {t('courseDjPage.lessons')}
                </p>
                <p className="course-page-card__price">900$</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs snapless={true} />
    </>
  )
}

export default CourseProduction
