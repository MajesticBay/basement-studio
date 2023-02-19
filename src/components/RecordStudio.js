import Carousel, { CarouselItem } from "../components/Carousel";
import { Btn } from "./Btn";
// import bg from "../images/bg_record_studio.png";

export const RecordStudio = () => {
    const bgStyle = {
        // backgroundImage: `url(${bg})`
        background: "purple"
    };

    const cardsData = [
        {
            title: "ЗВУКОЗАПИС",
            price: "14",
            list: [
                "Запис вокалу, інструментів та аудіоподкастів за допомогою професійного обладнання.",
                "Дикторське озвучення для реклами та різного роду відеоконтенту.",
                "Виготовлення аудіокниг та дубляж кіно."
            ]
        },
        {
            title: "ЗВЕДЕННЯ ТА МАСТЕРІНГ",
            price: "70",
            list: [
                "Зведення та мастерінг твоєї музики професійним та досвідченим звукорежисером.",
                "Послуги зведення та мастерингу онлайн.",
                "Термін виконання 1-3 робочі дні."
            ]
        },
        {
            title: "МУЗИЧНИЙ ПРОДАКШН",
            price: "80",
            list: [
                "Ексклюзивний продакшн твого треку в будь-якому стилі. Приходь на студійну сесію та приймай безпосередню участь у творчому процесі.",
                "Саунд дизайн та музика для реклами, кіно та різного роду відеоконтенту."
            ]
        }
    ]

    const cards = cardsData.map((card, indexCard) => (
        // <CarouselItem>
            <div className="card" key={indexCard}>
                {/* ------------------------------- */}
                {/* TO DO */}
                {/* Give each element inside the card a key */}
                {/* ------------------------------- */}
                <p className="card__title">{ card.title }</p>
                <p className="card__price">{ card.price }$ / год</p>
                <ul className="card__list">
                    {card.list.map((item, index) => (
                        <li className="card__list-item" key={index}>{item}</li>
                    ))}
                </ul>
                <Btn
                    className={"record-studio__btn"}
                    text={"ЗАМОВИТИ"}
                    arrowDisplayed={false}
                    dark={false}
                />
            </div>
        // </CarouselItem>
    ))

    return (
        <div className="record-studio" style={{bgStyle}}>
            <h1 className="header">СТУДІЯ  ЗВУКОЗАПИСУ</h1>
            <p className="record-studio__text">Атмосфера в студії дозволить насолоджуватись процесом звукозапису або музичного продакшену.</p>
            <p className="record-studio__text">Звукорежисер - твій друг, професіонал, який завжди підтримає, порадить і допоможе зробити процес запису максимально комфортним і приємним.</p>
            <div className="cards">
            <Carousel>
                <CarouselItem><div className="card">
                    <p className="card__title">ЗВУКОЗАПИС</p>
                    <p className="card__price">14$ / год</p>
                    <ul>
                        <li className="card__list-item">Запис вокалу, інструментів та аудіоподкастів за допомогою професійного обладнання.</li>
                        <li className="card__list-item">Дикторське озвучення для реклами та різного роду відеоконтенту.</li>
                        <li className="card__list-item">Виготовлення аудіокниг та дубляж кіно.</li>
                    </ul>
                    <Btn
                        className={"record-studio__btn"}
                        text={"ЗАМОВИТИ"}
                        arrowDisplayed={false}
                        dark={false}
                    />
                </div></CarouselItem>
                <CarouselItem><div className="card">
                    <p className="card__title">ЗВЕДЕННЯ ТА МАСТЕРІНГ</p>
                    <p className="card__price">70$ / год</p>
                    <ul className="card__list">
                        <li className="card__list-item">Зведення та мастерінг твоєї музики професійним та досвідченим звукорежисером.</li>
                        <li className="card__list-item">Послуги зведення та мастерингу онлайн.</li>
                        <li className="card__list-item">Термін виконання 1-3 робочі дні.</li>
                    </ul>
                    <Btn
                        className={"record-studio__btn"}
                        text={"ЗАМОВИТИ"}
                        arrowDisplayed={false}
                        dark={false}
                    />
                </div></CarouselItem>
                <CarouselItem><div className="card">
                    <p className="card__title">МУЗИЧНИЙ ПРОДАКШН</p>
                    <p className="card__price">80$ / год</p>
                    <ul className="card__list">
                        <li className="card__list-item">Ексклюзивний продакшн твого треку в будь-якому стилі. Приходь на студійну сесію та приймай безпосередню участь у творчому процесі.</li>
                        <li className="card__list-item">Саунд дизайн та музика для реклами, кіно та різного роду відеоконтенту.</li>
                    </ul>
                    <Btn
                        className={"record-studio__btn"}
                        text={"ЗАМОВИТИ"}
                        arrowDisplayed={false}
                        dark={false}
                    />
                </div></CarouselItem>
            </Carousel>
                {/* <Carousel> */}
                    {/* {cards} */}
                {/* </Carousel> */}
            </div>
        </div>
    )
}

export default RecordStudio;