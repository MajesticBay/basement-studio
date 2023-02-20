import keyboard from "../images/course-dj-keyboard.png";
import { Btn } from "./Btn";

export const CourseDj = () => {
    return (
        <div className="course-dj">
            <h1 className="header course-dj__header header course-dj__header--mobile">КУРС DJ</h1>
            <img className="course-dj__img" src={keyboard} alt="keyboard" />
            <div className="course-dj__outer-text-container">
                <div className="course-dj__text-container">
                <h1 className="header course-dj__header header course-dj__header--desktop">КУРС DJ</h1>
                    <p className="course-dj__text">Ми допоможемо вам зробити перші кроки у світ створення музики. Якщо ви давно хотіли навчитися працювати на професійному обладнанні, створювати треки – це чудовий шанс спробувати свої сили.</p>
                    <p className="course-dj__text">Пориньте у світ сучасного діджеїнгу з професійними педагогами, які поділяться з вами передовими знаннями. Освойте всі тонкощі улюбленого хобі та виведіть його на якісно новий рівень.</p>
                </div>
                <Btn style={{ margin: "0 3.2rem" }} text={"ДЕТАЛЬНІШЕ"} arrowDisplayed={true} dark={true}/>
            </div>
        </div>
    )
}

export default CourseDj;