import { Btn } from "./Btn";
import bg from "../images/bg-record-studio-desktop.png";
import giftCertificate from "../images/icons/gift-certificate.svg";

export const GiftCertificate = () => {
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
                    <h1 className="gift-certificate__header header mobile">ПОДАРУНКОВИЙ СЕРТИФІКАТ</h1>
                    <p className="gift-certificate__text">Текст про те яким класним подарунком може бути сертифікат на послуги студії)))</p>
                    <div className="gift-certificate__btn-container">
                        <Btn text={"ЗАМОВИТИ"} arrowDisplayed={false} dark={false} />
                        <Btn text={"ДІЗНАТИСЯ БІЛЬШЕ"} arrowDisplayed={true} dark={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiftCertificate;