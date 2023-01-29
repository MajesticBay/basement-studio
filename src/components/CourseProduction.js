import { Btn } from "../components/Btn";

export const CourseProduction = () => {
    return (
        <div className="course-production">
            <h1 className="course-production__header">КУРС production</h1>
            {/* <img src={keyboard} alt="keyboard" /> */}
            <div className="course-production__text-container">
                <p className="course-production__text">Ми допоможемо вам зробити перші кроки у світ створення музики. Якщо ви давно хотіли навчитися працювати на професійному обладнанні, створювати треки – це чудовий шанс спробувати свої сили.</p>
                <p className="course-production__text">Пориньте у світ сучасного діджеїнгу з професійними педагогами, які поділяться з вами передовими знаннями. Освойте всі тонкощі улюбленого хобі та виведіть його на якісно новий рівень.</p>
            </div>
            <Btn text={"ДЕТАЛЬНІШЕ"} arrowDisplayed={true} dark={true}/>
        </div>
    )
}

export default CourseProduction;