import { useTranslation } from 'react-i18next';
import { Btn } from "../Btn";
import bg from "../../images/bg-record-studio.png";
import giftCertificate from "../../images/icons/gift-certificate.svg";

export const GiftCertificate = () => {
    const { t } = useTranslation();
    const bgStyle = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: "50% 25%"
    }

    const bgOverlayStyle = {
        background: "rgba(7, 7, 7, 0.5)",
        backdropFilter: "blur(8px)",
    }

    return (
        <div className="gift-certificate" style={bgStyle}>
            <div className="gift-certificate__bgOverlay" style={bgOverlayStyle}>
                <div className="gift-certificate__inner">
                    <img src={ giftCertificate } alt="gift certificate" />
                    <h1 className="gift-certificate__header header mobile">{t('giftCertificate.p1')}</h1>
                    <p className="gift-certificate__text">{t('giftCertificate.p2')}</p>
                    <div className="gift-certificate__btn-container mobile">
                        <Btn text={"ЗАМОВИТИ"} arrowDisplayed={false} dark={false} />
                        <Btn text={"ДІЗНАТИСЯ БІЛЬШЕ"} arrowDisplayed={true} dark={true} />
                    </div>
                    <div className="gift-certificate__btn-container desktop">
                        <Btn text={"ЗАМОВИТИ"} arrowDisplayed={true} dark={false} />
                        <Btn text={"ДІЗНАТИСЯ БІЛЬШЕ"} arrowDisplayed={false} dark={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiftCertificate;