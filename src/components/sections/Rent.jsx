import React from 'react'
import { useTranslation } from 'react-i18next'
import MobileCarousel, { CarouselItem } from '../MobileCarousel.jsx'
import { Btn } from '../Btn.jsx'
import djPlace from '../../images/dj_place.png'
import studioColored from '../../images/studio-colored.png'
import bg from '../../images/bg-record-studio.png'

export const Rent = () => {
  const { t } = useTranslation()
  const bgStyle = {
    backgroundImage: `url(${bg})`
  }

  const bgOverlayStyle = {
    background: 'rgba(7, 7, 7, 0.6)',
    backdropFilter: 'blur(10px)'
  }

  const cardsData = [
    {
      image: djPlace,
      title: 'DJ PLACE',
      price: '13',
      list: [
                `${t('rentCardOne.p1')}`,
                `${t('rentCardOne.p2')}`,
                `${t('rentCardOne.p3')}`
      ]
    },
    {
      image: studioColored,
      title: 'PRODUCTION PLACE',
      price: '13',
      list: [
                `${t('rentCardTwo.p1')}`,
                `${t('rentCardTwo.p2')}`,
                `${t('rentCardTwo.p3')}`
      ]
    }
  ]

  const cardsCarousel = cardsData.map((card, indexCard) => (
        <CarouselItem key={indexCard}>
            <div className="card rent__card" >
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
                    className={'card__btn'}
                    text={t('rent.btn')}
                    arrowDisplayed={false}
                    dark={false}
                />
            </div>
        </CarouselItem>
  ))

  const cards = cardsData.map((card, indexCard) => (
        <div className="card rent__card" key={indexCard}>
            <div className="card__img-container">
                <img className="card__img" src={ card.image } alt={ card.image } />
            </div>
            <p className="card__title">{ card.title }</p>
            <p className="card__price">{t('rent.price')}</p>
            <ul className="card__list rent__card-list">
                {card.list.map((item, index) => (
                    <li className="card__list-item" key={index}>{item}</li>
                ))}
            </ul>
            <Btn
                className={'card__btn'}
                text={t('rent.btn')}
                arrowDisplayed={false}
                dark={false}
            />
        </div>
  ))

  return (
        <div id="rent" className="rent" style={bgStyle}>
            <div className="rent__inner" style={bgOverlayStyle}>
                <h1 className="header">{t('rent.p1')}</h1>
                <div className="rent__card-container rent__card-container--mobile">
                    <div className="cards mobile">
                        <MobileCarousel>
                            {cardsCarousel}
                        </MobileCarousel>
                    </div>
                    <div className="rent__cards cards desktop">
                        {cards}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Rent
