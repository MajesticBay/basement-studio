import { useTranslation } from 'react-i18next';
import keyboard from "../../images/course-dj-keyboard-colored.png";
import { Btn } from "../Btn";

export const CourseDj = () => {
    const { t } = useTranslation();
    return (
        <div id="course-dj" className="course-dj">
            <div className="course-dj__inner">

                <div className="course-dj__wrapper">
                <h1 className="header course-dj__header course-dj__header--mobile">{t('courseDJ.p1')}</h1>
                <img className="course-dj__img" src={keyboard} alt="keyboard" />
                <div className="course-dj__outer-text-container">
                    <h1 className="header course-dj__header course-dj__header--desktop">{t('courseDJ.p1')}</h1>
                    <div className="course-dj__text-container">
                        <p className="course-dj__text">{t('courseDJ.p2')}</p>
                        <p className="course-dj__text">{t('courseDJ.p3')}</p>
                    </div>
                    <Btn className={"course-dj__btn"} style={{ margin: "0 3.2rem" }} text={t('courseDjPage.btn')} arrowDisplayed={true} dark={false}/>
                </div>

                </div>

            </div>
        </div>
    )
}

export default CourseDj;