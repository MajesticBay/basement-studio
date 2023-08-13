import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ContactUs } from '../components/sections/ContactUs'
import { Btn } from '../components/Btn'
import courseDjKeyboardSmall from '../images/png/course-dj-page-colored-small.png'
import courseDjKeyboardLargeColored from '../images/png/course-dj-page-colored-larde.png'

export const CourseProduction = () => {
  const { t } = useTranslation()

  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <section id="course-dj-page" className="course-dj-page">
        <div className="course-dj-page__top-container">
          <h1 className="header course-dj-page__header">
            {t('courseProductionPage.header')}
          </h1>
          <p className="course-dj-page__sign-up">{t('courseProductionPage.signup')}</p>
          <Btn
            className={'course-dj-page__btn'}
            text={t('courseProductionPage.btn')}
            arrowDisplayed={true}
            dark={false}
          />
        </div>
        <img
          className="course-dj-page__img-mobile"
          src={courseDjKeyboardSmall}
          loading="lazy"
          alt="keyboard"
        />
        <img
          className="course-dj-page__img"
          src={courseDjKeyboardLargeColored}
          loading="lazy"
          alt="keyboard"
        />
        <div className="course-dj-page__content">
          <h2 className="course-dj-page__sub-header">
            {t('courseDjPage.subheader')}
          </h2>
          <ul className="course-dj-page__list">
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem1')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem2')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem3')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem4')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem5')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem6')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem7')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem8')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem9')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem10')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem11')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem12')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem13')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem14')}
            </li>
            <li className="course-dj-page__list-item">
              {t('courseDjPage.listItem15')}
            </li>
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
                <p className="course-page-card__price">300$</p>
              </div>
              <div className="course-page-card__row">
                <p className="course-page-card__quantity">
                  20 {t('courseDjPage.lessons')}
                </p>
                <p className="course-page-card__price">300$</p>
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
                <p className="course-page-card__price">450$</p>
              </div>
              <div className="course-page-card__row">
                <p className="course-page-card__quantity">
                  20 {t('courseDjPage.lessons')}
                </p>
                <p className="course-page-card__price">750$</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs snapless={true}/>
    </>
  )
}

export default CourseProduction
