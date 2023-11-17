import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { MapComponent } from '../MapComponent.tsx'
import { IconIG, IconTG, email, phone, address } from '../../images/icons/index.ts'

import { GiftCertificate } from './GiftCertificate'
import { Footer } from './Footer'

export const ContactUs = ({ snapless }) => {
  const { t } = useTranslation()
  return (
        <div id={snapless ? 'contact-us-snapless' : 'contact-us'}>
            <GiftCertificate />
            <div className="contact-us">
                <div className="contact-us-container">
                    <h1 className="contact-us__header header">{t('contacts.p1')}</h1>
                    <div className="contact-us__links-container">
                        <a className="contact-us__link" href="mailto:basementstudio@gmail.com">
                            <img src={email} loading="lazy" alt="Email icon" />
                            <span className="contact-us__text">basementstudio@gmail.com</span>
                        </a>
                        <a className="contact-us__link" href="tel:+380638817112">
                            <img src={phone} loading="lazy" alt="Phone icon" />
                            <span className="contact-us__text">+380638817112</span>
                        </a>
                        <a
                            className="contact-us__link"
                            rel="noopener noreferrer"
                            href="https://maps.app.goo.gl/SAmcCQNUBSYRbPop9"
                            target="_blank"
                        >
                            <img src={address} alt="Address icon" />
                            <div>
                                <span className="contact-us__text">{t('contacts.address.span1')}</span>
                                <span className="contact-us__text">{t('contacts.address.span2')}</span>
                            </div>
                        </a>
                    </div>
                    <div className="contact-us__social-media-container">
                        <a href="https://www.instagram.com/basement.studio.lviv/" target="_blank" rel="noopener noreferrer">
                            <IconIG className="pointer" />
                        </a>
                        <a href="https://t.me/ostapoleksyn" target="_blank" rel="noopener noreferrer">
                            <IconTG className="pointer" />
                        </a>
                    </div>
                </div>
                <div className="contact-us__map" id="contact-us-map">
                    <MapComponent />
                </div>
            </div>
            <Footer />
        </div>
  )
}

ContactUs.propTypes = {
  snapless: PropTypes.bool
}
