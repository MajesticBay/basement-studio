import React from 'react'
import { useTranslation } from 'react-i18next'
import keyboard from '../images/course-dj-keyboard-colored.png'
import { Btn } from '../components/Btn'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  const { t } = useTranslation()
  return (
    <div id="course-dj" className="course-dj">
      <div className="course-dj__inner">
        <div className="course-dj__wrapper">
          <h1 className="header course-dj__header course-dj__header--mobile">{t('404.h1')}</h1>
          <img className="course-dj__img" src={keyboard} alt="keyboard" />
          <div className="course-dj__outer-text-container">
            <h1 className="header course-dj__header course-dj__header--desktop">{t('404.h1')}</h1>
            <div className="course-dj__text-container">
              <p className="course-dj__text">{t('404.p1')}</p>
            </div>
            <Link to="/">
              <Btn className={'course-dj__btn'} style={{ margin: '0 3.2rem' }} text={t('404.btn')} arrowDisplayed={true} dark={false} />
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default PageNotFound
