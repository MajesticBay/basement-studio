import { useTranslation } from 'react-i18next';
import { Btn } from "../Btn";
import courseProduction from "../../images/bg-record-studio.png";

export const CourseProduction = () => {
    const { t } = useTranslation();
    return (
        <div id="course-production" className="course-production">
            <img className="course-production__img course-production__img--mobile" src={courseProduction} alt="keyboard" />
            <h1 className="header course-production__header course-production__header--mobile">{t('productionCourse.p1')}</h1>
            <div className="course-production__inner">

                <div className="course-production__wrapper">

                <img className="course-production__img course-production__img--desktop" src={courseProduction} alt="keyboard" />
                <div className="course-production__outer-text-container">
                    {/* <h1 className="header course-production__header course-production__header--desktop">КУРС PRODUCTION</h1> */}
                    {/* <img className="course-production__img course-production__img--desktop" src={courseProduction} alt="keyboard" /> */}
                    <div className="course-production__text-container">
                        <p className="course-production__text">{t('productionCourse.p2')}</p>
                        <p className="course-production__text">{t('productionCourse.p3')}</p>
                    </div>
                    <Btn className="course-production__btn course-production__btn--mobile" text={t('productionCourse.btn')} arrowDisplayed={true} dark={true}/>
                    <Btn className="course-production__btn course-production__btn--desktop" text={t('productionCourse.btn')} arrowDisplayed={true} dark={false}/>
                </div>

                </div>

            </div>
        </div>
    )
}

export default CourseProduction;