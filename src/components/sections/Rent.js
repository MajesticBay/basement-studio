import MobileCarousel, { CarouselItem } from "../MobileCarousel.js";
import { Btn } from "../Btn";
import djPlace from "../../images/dj_place.png";
import productionPlace from "../../images/production_place.png";
import bg from "../../images/bg-record-studio.png";
// import MobileCarousel from "../MobileCarousel";

export const Rent = () => {
    const bgStyle = {
        backgroundImage: `url(${bg})`
    }

    const bgOverlayStyle = {
        background: "rgba(7, 7, 7, 0.6)",
        backdropFilter: "blur(10px)"
    }

    const cardsData = [
        {
            image: djPlace,
            title: "DJ PLACE",
            price: "13",
            list: [
                "Практикуй та записуй свій dj мікс на топовому обладнанні, що є клубним сандартом. Включає якісний запис твого мікса.",
                "2x CDJ-300 | Xone:96 | 2x Technics SL-1210MK2 | 2x Ortofon Nightclub E.",
                "Universal Audio Apollo Twin для якісного запису твого dj міксу або лайву."
            ]
        },
        {
            image: productionPlace,
            title: "PRODUCTION PLACE",
            price: "13",
            list: [
                "Експерементуй з аналоговим обладнанням та DAW;",
                "Міксуй та роби мастерінг своїх треків;",
                "Записуй вокал, шуми та звукові ефекти в рекордрумі."
            ]
        }
    ]

    const cards = cardsData.map((card, indexCard) => (
        <CarouselItem>
        <div className="card" key={indexCard}>
            <div className="card__img-container">
                <img className="card__img" src={ card.image } alt={ card.image } />
            </div>
            <p className="card__title">{ card.title }</p>
            <p className="card__price">{ card.price }$ / год</p>
            <ul className="card__list">
                {card.list.map((item, index) => (
                    <li className="card__list-item" key={index}>{item}</li>
                ))}
            </ul>
            <Btn
                className={"card__btn"}
                text={"ЗАМОВИТИ"}
                arrowDisplayed={false}
                dark={false}
            />
        </div>
        </CarouselItem>
    ))
    return (
        <div id="rent" className="rent" style={bgStyle}>
            <div className="rent__inner" style={bgOverlayStyle}>
                {/* <div className="rent__content"> */}
                    <h1 className="header">ОРЕНДА</h1>
                    <div className="rent__card-container--mobile">
                        <div className="cards">
                            <MobileCarousel>
                                {cards}
                            </MobileCarousel>
                        </div>
                    </div>
                    <div className="rent__card-container--desktop">
                        <div className="cards">
                            {cards}
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Rent;