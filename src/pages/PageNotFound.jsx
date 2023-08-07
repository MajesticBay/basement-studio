import React from 'react'
import { useTranslation } from 'react-i18next'
import keyboard from '../images/course-dj-keyboard-colored.png'
import { Btn } from '../components/Btn'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  const { t } = useTranslation()
  return (
    <div id="page-not-found" className="page-not-found">
      <div className="page-not-found__inner">
        <div className="page-not-found__wrapper">
          <h1 className="header page-not-found__header page-not-found__header--mobile">{t('404.h1')}</h1>
          <img className="page-not-found__img" src={keyboard} alt="Audio keyboard" />
          <div className="page-not-found__outer-text-container">
            <h1 className="header page-not-found__header page-not-found__header--desktop">{t('404.h1')}</h1>
            <div className="page-not-found__text-container">
              <p className="page-not-found__text">{t('404.p1')}</p>
            </div>
            <Link to="/">
              <Btn className={'page-not-found__btn'} style={{ margin: '0 3.2rem' }} text={t('404.btn')} arrowDisplayed={true} dark={false} />
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default PageNotFound
