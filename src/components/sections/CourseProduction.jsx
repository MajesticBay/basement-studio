import React from 'react'
import { useTranslation } from 'react-i18next'
import { Btn } from '../Btn'
import courseProduction from '../../images/png/course-production-keyboard-colored.png'
import courseProductionWebp from '../../images/webp/course-production-keyboard-colored.webp'
import { Link } from 'react-router-dom'

export const CourseProduction = () => {
  const { t } = useTranslation()
  return (
        <div id="course-production" className="course-production">
            <img className="course-production__img course-production__img--mobile" src={courseProduction} loading="lazy" alt="Audio keyboard" />
            <h1 className="header course-production__header course-production__header--mobile">{t('productionCourse.p1')}</h1>
            <div className="course-production__inner">
                <div className="course-production__wrapper">
                <picture>
                    <source srcSet={courseProductionWebp} type="image/webp" />
                    <img className="course-production__img course-production__img--desktop" src={courseProduction} loading="lazy" alt="Audio keyboard" />
                </picture>
                <div className="course-production__outer-text-container">
                    <div className="course-production__text-container">
                        <p className="course-production__text">{t('productionCourse.p2')}</p>
                        <p className="course-production__text">{t('productionCourse.p3')}</p>
                    </div>
                    <Link to="/course-production">
                        <Btn className="course-production__btn course-production__btn--mobile" text={t('productionCourse.btn')} arrowDisplayed={true} dark={true}/>
                        <Btn className="course-production__btn course-production__btn--desktop" text={t('productionCourse.btn')} arrowDisplayed={true} dark={false}/>
                    </Link>
                </div>

                </div>

            </div>
        </div>
  )
}

export default CourseProduction
