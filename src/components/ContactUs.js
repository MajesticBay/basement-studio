import email from "../images/email.svg";
import phone from "../images/phone.svg";
import address from "../images/address.svg";
import fb from "../images/fb.svg";
import ig from "../images/ig.svg";
import tk from "../images/tk.svg";
import { Btn } from "./Btn";

export const ContactUs = () => {
    return (
        <div className="contact-us">
            <h1 className="contact-us__header">КОНТАКТИ</h1>
            <div className="contact-us__links-container">
                <a href="#email">
                    <img src={email} alt="email" />
                    <span className="contact-us__text">basementstudio@gmail.com</span>
                </a>
                <a href="#phonemail">
                    <img src={phone} alt="phone" />
                    <span className="contact-us__text">+380XXXXXXXXX</span>
                </a>
                <a href="#address">
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