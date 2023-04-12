import keyboard from "../../images/course-dj-keyboard.png";
import { Btn } from "../Btn";

export const CourseDj = () => {
    return (
        <div id="course-dj" className="course-dj">
            <div className="course-dj__inner">

                <div className="course-dj__wrapper">
                <h1 className="header course-dj__header course-dj__header--mobile">КУРС DJ</h1>
                <img className="course-dj__img" src={keyboard} alt="keyboard" />
                <div className="course-dj__outer-text-container">
                    <h1 className="header course-dj__header course-dj__header--desktop">КУРС DJ</h1>
                    <div className="course-dj__text-container">
                        <p className="course-dj__text">Ми допоможемо вам зробити перші кроки у світ створення музики. Якщо ви давно хотіли навчитися працювати на професійному обладнанні, створювати треки – це чудовий шанс спробувати свої сили.</p>
                        <p className="course-dj__text">Пориньте у світ сучасного діджеїнгу з професійними педагогами, які поділяться з вами передовими знаннями. Освойте всі тонкощі улюбленого хобі та виведіть його на якісно новий рівень.</p>
                    </div>
                    <Btn className={"course-dj__btn"} style={{ margin: "0 3.2rem" }} text={"ДЕТАЛЬНІШЕ"} arrowDisplayed={true} dark={false}/>
                </div>

                </div>

            </div>
        </div>
    )
}

export default CourseDj;