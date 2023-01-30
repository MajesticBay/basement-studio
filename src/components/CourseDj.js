import keyboard from "../images/course-dj-keyboard.png";
import { Btn } from "./Btn";

export const CourseDj = () => {
    return (
        <div className="course-dj">
            <h1 className="header">КУРС DJ</h1>
            <img src={keyboard} alt="keyboard" />
            <div className="course-dj__text-container">
                <p className="course-dj__text">Ми допоможемо вам зробити перші кроки у світ створення музики. Якщо ви давно хотіли навчитися працювати на професійному обладнанні, створювати треки – це чудовий шанс спробувати свої сили.</p>
                <p className="course-dj__text">Пориньте у світ сучасного діджеїнгу з професійними педагогами, які поділяться з вами передовими знаннями. Освойте всі тонкощі улюбленого хобі та виведіть його на якісно новий рівень.</p>
            </div>
            <Btn text={"ДЕТАЛЬНІШЕ"} arrowDisplayed={true} dark={true}/>
        </div>
    )
}

export default CourseDj;