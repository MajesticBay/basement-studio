import { useTranslation } from 'react-i18next';
import Carousel, { CarouselItem } from "../../components/Carousel";
import { Btn } from "../Btn";
import bg from "../../images/bg-record-studio.png";

export const RecordStudio = () => {
    const { t } = useTranslation();
    const data = {
        title: `${t('recordStudio.p1')}`,
        pFirst: `${t('recordStudio.p2')}`,
        pSecond: `${t('recordStudio.p3')}`
    }

    const bgStyle = {
        backgroundImage: `url(${bg})`
    };

    const bgOverlayStyle = {
        background: "rgba(7, 7, 7, 0.6)",
        backdropFilter: "blur(3px)"
    }

    const cardsData = [
        {
            title: `${t('recordStudioCardOne.p1')}`,
            price: `${t('recordStudioCardOne.price')}`,
            list: [
                `${t('recordStudioCardOne.p2')}`,
                `${t('recordStudioCardOne.p3')}`,
                `${t('recordStudioCardOne.p4')}`
            ]
        },
        {
            title: `${t('recordStudioCardTwo.p1')}`,
            price: `${t('recordStudioCardTwo.price')}`,
            list: [
                `${t('recordStudioCardTwo.p2')}`,
                `${t('recordStudioCardTwo.p3')}`,
                `${t('recordStudioCardTwo.p4')}`
            ]
        },
        {
            title: `${t('recordStudioCardThree.p1')}`,
            price: `${t('recordStudioCardThree.price')}`,
            list: [
                `${t('recordStudioCardThree.p2')}`,
                `${t('recordStudioCardThree.p3')}`,
            ]
        }
    ]

    const cards = cardsData.map((card, indexCard) => (
        // Carousel is here
        <CarouselItem key={indexCard}>
            <div className="card record-studio__card" >
                {/* ------------------------------- */}
                {/* TO DO */}
                {/* Give each element inside the card a key */}
                {/* ------------------------------- */}
                <p className="card__title">{ card.title }</p>
                <p className="card__price">{ card.price }</p>
                <ul className="card__list">
                    {card.list.map((item, index) => (
                        <li className="card__list-item" key={index}>{item}</li>
                        // {item === "" ? () : ()}
                        // {item.length === 0 ? (<li className="card__list-item" key={index}>{item}</li>) : ()}
                        // {item.length === 0 ? () : ()}
                        // {item === "" && <li className="card__list-item" key={index}>{item}</li>}
                        // if (item) {
                        //     <li className="card__list-item" key={index}>{item}</li>
                        // } else {
                        //     <li className="card__list-item" key={index}>{item}</li>
                        // }
                    ))}
                </ul>
                <Btn
                    className={"card__btn"}
                    text={t('recordStudio.btn')}
                    arrowDisplayed={false}
                    dark={false}
                />
            </div>
        </CarouselItem>
    ))

    return (
        <div id="record-studio" className="record-studio" style={bgStyle}>
            <div className="record-studio__inner" style={bgOverlayStyle}>

                <div className="record-studio__header-wrapper">
                    <h1 className="header">
                        {data.title}
                    </h1>

                    <p className="record-studio__text">
                        {data.pFirst}
                    </p>
                    <p className="record-studio__text">
                        {data.pSecond}
                    </p>
                </div>
                
                   
                    <div className="cards mobile">
                        <Carousel>
                            {cards}
                        </Carousel>
                    </div>
                <div className="cards desktop">
                    {cards}
                </div>
            </div>
        </div>
    )
}

export default RecordStudio;