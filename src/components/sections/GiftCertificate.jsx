import React from 'react'
import { useTranslation } from 'react-i18next'
import { Btn } from '../Btn'
import bg from '../../images/bg-gift-certificate.png'
import giftCertificate from '../../images/icons/gift-certificate.svg'

export const GiftCertificate = () => {
  const { t } = useTranslation()
  const bgStyle = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: '50% 25%',
    backgroundRepeat: 'no-repeat'
  }

  const bgOverlayStyle = {
    background: 'rgba(7, 7, 7, 0.5)',
    backdropFilter: 'blur(8px)'
  }

  return (
        <div className="gift-certificate" style={bgStyle}>
            <div className="gift-certificate__bgOverlay" style={bgOverlayStyle}>
                <div className="gift-certificate__inner">
                    <div className="gift-certificate__content-outer">
                        <img className="gift-certificate__img" src={ giftCertificate } alt="gift certificate" />
                        <div className="gift-certificate__content">
                            <h1 className="gift-certificate__header header">{t('giftCertificate.p1')}</h1>
                            <p className="gift-certificate__text">{t('giftCertificate.p2')}</p>
                        </div>
                    </div>
                    <div className="gift-certificate__btn-container mobile">
                        <Btn text={t('giftCertificate.b1')} arrowDisplayed={false} dark={false} />
                    </div>
                    <div className="gift-certificate__btn-container desktop">
                        <Btn text={t('giftCertificate.b1')} arrowDisplayed={true} dark={false} />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default GiftCertificate
