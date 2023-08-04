import React from 'react'
import { useTranslation } from 'react-i18next'
import { MapComponent } from '../MapComponent.tsx'
import { ReactComponent as IconIG } from '../../images/icons/ig.svg'
import { ReactComponent as IconTG } from '../../images/icons/tg.svg'
import email from '../../images/icons/email.svg'
import phone from '../../images/icons/phone.svg'
import address from '../../images/icons/address.svg'

import { GiftCertificate } from './GiftCertificate'
import { Footer } from './Footer'

export const ContactUs = () => {
  const { t } = useTranslation()
  return (
        <div id="contact-us">
            <GiftCertificate />
            <div className="contact-us">
                <div className="contact-us-container">
                    <h1 className="contact-us__header header">{t('contacts.p1')}</h1>
                    <div className="contact-us__links-container">
                        <a className="contact-us__link" href="mailto:basementstudio@gmail.com">
                            <img src={email} alt="email" />
                            <span className="contact-us__text">basementstudio@gmail.com</span>
                        </a>
                        <a className="contact-us__link" href="tel:+380XXXXXXXXX">
                            <img src={phone} alt="phone" />
                            <span className="contact-us__text">+380XXXXXXXXX</span>
                        </a>
                        <a
                            className="contact-us__link"
                            rel="noopener noreferrer"
                            href="https://goo.gl/maps/zGTo29rnvhj5ed299"
                            target="_blank"
                        >
                            <img src={address} alt="address" />
                            <span className="contact-us__text">вул. Сахарова 2, м. Львів, 79026</span>
                        </a>
                    </div>
                    <div className="contact-us__social-media-container">
                        <IconIG className="pointer" />
                        <IconTG className="pointer" />
                    </div>
                </div>
                <div className="contact-us__map">
                    <MapComponent />
                </div>
            </div>
            <Footer />
        </div>
  )
}
