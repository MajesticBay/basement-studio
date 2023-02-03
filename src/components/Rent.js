import { Btn } from "./Btn";

export const Rent = () => {
    return (
        <div className="rent">
            <h1 className="header">ОРЕНДА</h1>
            <div className="rent__card-container">
                <div className="cards">
                    <div className="card">
                        <p className="card__title">DJ PLACE</p>
                        <p className="card__price">13$ / год</p>
                        <ul className="card__list">
                            <li className="card__list-item">Практикуй та записуй свій dj мікс на топовому обладнанні, що є клубним сандартом. Включає якісний запис твого мікса.</li>
                            <li className="card__list-item">2x CDJ-300 | Xone:96 | 2x Technics SL-1210MK2 | 2x Ortofon Nightclub E.</li>
                            <li className="card__list-item">Universal Audio Apollo Twin для якісного запису твого dj міксу або лайву.</li>
                        </ul>
                        <Btn
                            className={"record-studio__btn"}
                            text={"ЗАМОВИТИ"}
                            arrowDisplayed={false}
                            dark={false}
                        />
                    </div>
                    <div className="card">
                        <p className="card__title">PRODUCTION PLACE</p>
                        <p className="card__price">13$ / год</p>
                        <ul className="card__list">
                            <li className="card__list-item">Експерементуй з аналоговим обладнанням та DAW;</li>
                            <li className="card__list-item">Міксуй та роби мастерінг своїх треків;</li>
                            <li className="card__list-item">Записуй вокал, шуми та звукові ефекти в рекордрумі.</li>
                        </ul>
                        <Btn
                            className={"record-studio__btn"}
                            text={"ЗАМОВИТИ"}
                            arrowDisplayed={false}
                            dark={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rent;