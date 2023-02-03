import { Btn } from "./Btn";

export const Rent = () => {
    const cardsData = [
        {
            title: "DJ PLACE",
            price: "13",
            list: [
                "Практикуй та записуй свій dj мікс на топовому обладнанні, що є клубним сандартом. Включає якісний запис твого мікса.",
                "2x CDJ-300 | Xone:96 | 2x Technics SL-1210MK2 | 2x Ortofon Nightclub E.",
                "Universal Audio Apollo Twin для якісного запису твого dj міксу або лайву."
            ]
        },
        {
            title: "PRODUCTION PLACE",
            price: "13",
            list: [
                "Експерементуй з аналоговим обладнанням та DAW;",
                "Міксуй та роби мастерінг своїх треків;",
                "Записуй вокал, шуми та звукові ефекти в рекордрумі."
            ]
        }
    ]

    const cards = cardsData.map((card) => (
        <div className="card">
            <p className="card__title">{ card.title }</p>
            <p className="card__price">{ card.price }$ / год</p>
            <ul className="card__list">
                {card.list.map((item) => (
                    <li className="card__list-item">{item}</li>
                ))}
            </ul>
            <Btn
                className={"record-studio__btn"}
                text={"ЗАМОВИТИ"}
                arrowDisplayed={false}
                dark={false}
            />
        </div>
    ))
    return (
        <div className="rent">
            <h1 className="header">ОРЕНДА</h1>
            <div className="rent__card-container">
                <div className="cards">
                    {cards}
                </div>
            </div>
        </div>
    )
}

export default Rent;