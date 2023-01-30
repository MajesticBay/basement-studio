import { Btn } from "./Btn";
// import bg from "../images/bg_record_studio.png";

export const RecordStudio = () => {
    const bgStyle = {
        // backgroundImage: `url(${bg})`
        background: "purple"
    };

    return (
        <div className="record-studio" style={{bgStyle}}>
            <h1 className="header">СТУДІЯ  ЗВУКОЗАПИСУ</h1>
            <p className="record-studio__text">Атмосфера в студії дозволить насолоджуватись процесом звукозапису або музичного продакшену.</p>
            <p className="record-studio__text">Звукорежисер - твій друг, професіонал, який завжди підтримає, порадить і допоможе зробити процес запису максимально комфортним і приємним.</p>
            <div className="cards">
                <div className="card">
                    <p className="card__title">ЗВУКОЗАПИС</p>
                    <p className="card__price">14$ / год</p>
                    <ul className="card__list">
                        <li className="card__text">Запис вокалу, інструментів та аудіоподкастів за допомогою професійного обладнання.</li>
                        <li className="card__text">Дикторське озвучення для реклами та різного роду відеоконтенту.</li>
                        <li className="card__text">Виготовлення аудіокниг та дубляж кіно.</li>
                    </ul>
                    <Btn
                        text={"ЗАМОВИТИ"}
                        arrowDisplayed={false}
                        dark={false}
                    />
                </div>
                <div className="card">
                    <p className="card__title">ЗВУКОЗАПИС</p>
                    <p className="card__price">70$ / год</p>
                    <ul className="card__list">
                        <li className="card__text">Зведення та мастерінг твоєї музики професійним та досвідченим звукорежисером.</li>
                        <li className="card__text">Послуги зведення та мастерингу онлайн.</li>
                        <li className="card__text">Термін виконання 1-3 робочі дні.</li>
                    </ul>
                    <Btn
                        text={"ЗАМОВИТИ"}
                        arrowDisplayed={false}
                        dark={false}
                    />
                </div>
                <div className="card">
                    <p className="card__title">ЗВУКОЗАПИС</p>
                    <p className="card__price">80$ / год</p>
                    <ul className="card__list">
                        <li className="card__text">Ексклюзивний продакшн твого треку в будь-якому стилі. Приходь на студійну сесію та приймай безпосередню участь у творчому процесі.</li>
                        <li className="card__text">Саунд дизайн та музика для реклами, кіно та різного роду відеоконтенту.</li>
                    </ul>
                    <Btn
                        text={"ЗАМОВИТИ"}
                        arrowDisplayed={false}
                        dark={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default RecordStudio;