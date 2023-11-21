import React from 'react'
import { useTranslation } from 'react-i18next'
import { Btn } from '../Btn'
import { giftCertificate } from '../../images/icons/index.ts'
import { links } from '../constraints/constrData'

export const GiftCertificate = () => {
  const { t } = useTranslation()

  return (
        <div className="gift-certificate">
            <div className="gift-certificate__bgOverlay">
                <div className="gift-certificate__inner">
                    <div className="gift-certificate__content-outer">
                        <img className="gift-certificate__img" src={ giftCertificate } loading="lazy" alt="Gift certificate" />
                        <div className="gift-certificate__content">
                            <h1 className="gift-certificate__header header">{t('giftCertificate.p1')}</h1>
                            <p className="gift-certificate__text">{t('giftCertificate.p2')}</p>
                        </div>
                    </div>
                    <a href={links.TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                        <div className="gift-certificate__btn-container mobile">
                            <Btn text={t('giftCertificate.b1')} arrowDisplayed={false} dark={false} />
                        </div>
                        <div className="gift-certificate__btn-container desktop">
                            <Btn text={t('giftCertificate.b1')} arrowDisplayed={true} dark={false} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
  )
}

export default GiftCertificate
