import { Btn } from "../components/Btn";
import courseProduction from "../images/bg-record-studio-desktop.png";

export const CourseProduction = () => {
    return (
        <div className="course-production">
            <div className="course-production__inner">
                <img className="course-production__img course-production__img--mobile" src={courseProduction} alt="keyboard" />
                <h1 className="header course-production__header course-production__header--mobile">КУРС PRODUCTION</h1>
                <div className="course-production__outer-text-container">
                    {/* <h1 className="header course-production__header course-production__header--desktop">КУРС PRODUCTION</h1> */}
                    {/* <img className="course-production__img course-production__img--desktop" src={courseProduction} alt="keyboard" /> */}
                    <div className="course-production__text-container">
                        <p className="course-production__text">Ми допоможемо вам зробити перші кроки у світ створення музики. Якщо ви давно хотіли навчитися працювати на професійному обладнанні, створювати треки – це чудовий шанс спробувати свої сили.</p>
                        <p className="course-production__text">Пориньте у світ сучасного діджеїнгу з професійними педагогами, які поділяться з вами передовими знаннями. Освойте всі тонкощі улюбленого хобі та виведіть його на якісно новий рівень.</p>
                    </div>
                    <Btn text={"ДЕТАЛЬНІШЕ"} arrowDisplayed={true} dark={true}/>
                </div>
            </div>
        </div>
    )
}

export default CourseProduction;