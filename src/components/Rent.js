import { Btn } from "./Btn";

export const Rent = () => {
    return (
        <div className="rent">
            <h1 className="header">ОРЕНДА</h1>
            <div className="card">
                <p className="card__title">DJ PLACE</p>
                <p className="card__price">13$ / год</p>
                <ul className="card__list">
                    <li className="card__text">Практикуй та записуй свій dj мікс на топовому обладнанні, що є клубним сандартом. Включає якісний запис твого мікса.</li>
                    <li className="card__text">2x CDJ-300 | Xone:96 | 2x Technics SL-1210MK2 | 2x Ortofon Nightclub E.</li>
                    <li className="card__text">Universal Audio Apollo Twin для якісного запису твого dj міксу або лайву.</li>
                </ul>
                {/* <p className="card__button pointer">ЗАМОВИТИ</p> */}
                <Btn text={"ЗАМОВИТИ"} arrowDisplayed={false} dark={false}/>
            </div>
        </div>
    )
}

export default Rent;