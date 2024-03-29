import React from 'react'
import { useTranslation } from 'react-i18next'
import keyboard from '../../images/png/course-dj-keyboard-colored.png'
import keyboardWebp from '../../images/webp/course-dj-keyboard-colored.webp'
import { Btn } from '../Btn'
import { Link } from 'react-router-dom'

export const CourseDj = () => {
  const { t } = useTranslation()
  return (
        <div id="course-dj" className="course-dj">
            <div className="course-dj__inner">

                <div className="course-dj__wrapper">
                <h1 className="header course-dj__header course-dj__header--mobile">{t('courseDJ.p1')}</h1>
                <picture>
                    <source srcSet={keyboardWebp} type="image/webp" />
                    <img className="course-dj__img" src={keyboard} loading="lazy" alt="Audio keyboard" />
                </picture>
                <div className="course-dj__outer-text-container">
                    <h1 className="header course-dj__header course-dj__header--desktop">{t('courseDJ.p1')}</h1>
                    <div className="course-dj__text-container">
                        <p className="course-dj__text">{t('courseDJ.p2')}</p>
                        <p className="course-dj__text">{t('courseDJ.p3')}</p>
                    </div>
                    <Link to="/course-dj">
                        <Btn className='course-dj__btn course-dj__btn--mobile' style={{ margin: '0 3.2rem' }} text={t('courseDjPage.main.btn')} arrowDisplayed={true} dark={true}/>
                        <Btn className='course-dj__btn course-dj__btn--desktop' style={{ margin: '0 3.2rem' }} text={t('courseDjPage.main.btn')} arrowDisplayed={true} dark={false}/>
                    </Link>
                </div>

                </div>

            </div>
        </div>
  )
}

export default CourseDj
