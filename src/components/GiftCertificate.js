import giftCertificate from "../images/gift-certificate.svg";
import { Btn } from "./Btn";

export const GiftCertificate = () => {
    return (
        <div className="gift-certificate">
            <img src={ giftCertificate } alt="gift certificate" />
            <h1 className="gift-certificate__header">ПОДАРУНКОВИЙ СЕРТИФІКАТ</h1>
            <p>Текст про те яким класним подарунком може бути сертифікат на послуги студії)))</p>
            <p className="card__button pointer">Дивитись  на youtube</p>
            <Btn text={"ДЕТАЛЬНІШЕ"} arrowDisplayed={true} />
        </div>
    )
}

export default GiftCertificate;