import giftCertificate from "../images/icons/gift-certificate.svg";
import { Btn } from "./Btn";

export const GiftCertificate = () => {
    return (
        <div className="gift-certificate">
            <img src={ giftCertificate } alt="gift certificate" />
            <h1 className="gift-certificate__header header mobile">ПОДАРУНКОВИЙ СЕРТИФІКАТ</h1>
            <p className="gift-certificate__text">Текст про те яким класним подарунком може бути сертифікат на послуги студії)))</p>
            <div className="gift-certificate__btn-container">
                <Btn text={"ЗАМОВИТИ"} arrowDisplayed={false} dark={false} />
                <Btn text={"ДІЗНАТИСЯ БІЛЬШЕ"} arrowDisplayed={true} dark={true} />
            </div>
        </div>
    )
}

export default GiftCertificate;