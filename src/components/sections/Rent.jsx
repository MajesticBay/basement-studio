import React from 'react'
import { useTranslation } from 'react-i18next'
import MobileCarousel, { CarouselItem } from '../MobileCarousel.jsx'
import { Btn } from '../Btn.jsx'
import { bgStyle, bgOverlayStyle, cardStructures } from '../constraints/rentCard'

export const Rent = () => {
  const { t } = useTranslation()

  const cardsData = cardStructures.map(card => ({
    ...card,
    title: t(card.titleKey),
    list: card.listKeys.map(key => t(key))
  }))

  const cardsCarousel = cardsData.map((card, indexCard) => (
        <CarouselItem key={indexCard}>
            <div className="card rent__card" >
                <div className="card__img-container">
                    <picture>
                        <source srcSet={ card.imageWebp } type="image/webp" />
                        <img className="card__img" src={ card.image } loading="lazy" alt={ card.image } />
                    </picture>
                </div>
                <p className="card__title">{ card.title }</p>
                <p className="card__price">{t('rent.price')}</p>
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
                <picture>
                    <source srcSet={ card.imageWebp } type="image/webp" />
                    <img className="card__img" src={ card.image } loading="lazy" alt={ card.image } />
                </picture>
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
                    <div className="cards desktop">
                        {cards}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Rent
