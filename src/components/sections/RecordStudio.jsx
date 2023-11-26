import React from 'react'
import { useTranslation } from 'react-i18next'
import Carousel, { CarouselItem } from '../Carousel'
import { Btn } from '../Btn'
import { links } from '../constraints/constrData'

export const RecordStudio = () => {
  const { t } = useTranslation()

  const data = ['p1', 'p2', 'p3'].map(p => t(`recordStudio.${p}`))
  const [title, pFirst, pSecond] = data

  const bgOverlayStyle = {
    background: 'rgba(7, 7, 7, 0.6)',
    backdropFilter: 'blur(3px)'
  }

  const cardKeys = ['p1', 'price', 'p2', 'p3', 'p4']
  const cardsData = ['One', 'Two', 'Three'].map(number => {
    const cardData = cardKeys.map(key => t(`recordStudioCard${number}.${key}`))
    const [title, price, ...list] = cardData

    return { title, price, list: list.filter(Boolean) } // filter out empty translations
  })

  const cards = cardsData.map((card, indexCard) => (
        <CarouselItem key={indexCard}>
            <div className="card record-studio__card">
                <p className="card__title">{ card.title }</p>
                <p className="card__price">{ card.price }</p>
                <ul className="card__list">
                    {card.list.map(item => <li className="card__list-item" key={item}>{item}</li>)}
                </ul>
                <a href={links.TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                    <Btn
                        className={'card__btn'}
                        text={t('recordStudio.btn')}
                        arrowDisplayed={false}
                        dark={false}
                    />
                </a>
            </div>
        </CarouselItem>
  ))

  return (
        <div id="record-studio" className="record-studio">
            <div className="record-studio__inner" style={bgOverlayStyle}>
                <div className="record-studio__header-wrapper">
                    <h1 className="header">{title}</h1>
                    <p className="record-studio__text">{pFirst}</p>
                    <p className="record-studio__text">{pSecond}</p>
                </div>
                <div className="cards mobile">
                    <Carousel>{cards}</Carousel>
                </div>
                <div className="cards desktop">{cards}</div>
            </div>
        </div>
  )
}

export default RecordStudio
