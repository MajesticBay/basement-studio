import email from "../images/icons/email.svg";
import phone from "../images/icons/phone.svg";
import address from "../images/icons/address.svg";
import fb from "../images/icons/fb.svg";
import ig from "../images/icons/ig.svg";
import tk from "../images/icons/tk.svg";
import { Btn } from "./Btn";

export const ContactUs = () => {
    return (
        <div className="contact-us">
            <h1 className="header">КОНТАКТИ</h1>
            <div className="contact-us__links-container">
                <a className="contact-us__link" href="#email">
                    <img src={email} alt="email" />
                    <span className="contact-us__text">basementstudio@gmail.com</span>
                </a>
                <a className="contact-us__link" href="#phonemail">
                    <img src={phone} alt="phone" />
                    <span className="contact-us__text">+380XXXXXXXXX</span>
                </a>
                <a className="contact-us__link" href="#address">
                    <img src={address} alt="address" />
                    <span className="contact-us__text">вул. Сахарова 2, м. Львів, 79026</span>
                </a>
            </div>
            <div className="contact-us__social-media-container">
                <img src={fb} alt="fb" />
                <img src={ig} alt="ig" />
                <img src={tk} alt="tk" />
            </div>
            <h1 className="contact-us__sub-header">ЗАЛИШИЛИСЯ ЗАПИТАННЯ?</h1>
            <Btn text={"ЗВ’ЯЖІТЬСЯ З НАМИ"} arrowDisplayed={true} dark={false} />
        </div>
    )
}