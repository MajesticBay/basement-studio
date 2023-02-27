import { MapComponent } from "./MapComponent.tsx";
import email from "../images/icons/email.svg";
import phone from "../images/icons/phone.svg";
import address from "../images/icons/address.svg";
import { ReactComponent as IconFB } from "../images/icons/fb.svg";
import { ReactComponent as IconIG } from "../images/icons/ig.svg";
import { ReactComponent as IconTK } from "../images/icons/tk.svg";
import { Btn } from "./Btn";

export const ContactUs = () => {
    return (
        <div className="contact-us">
            {/* <div className="contact-us__left">
                <h1 className="contact-us__header header">КОНТАКТИ</h1>
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
                    <IconFB className="pointer" />
                    <IconIG className="pointer" />
                    <IconTK className="pointer" />
                </div>
                <h1 className="contact-us__sub-header">ЗАЛИШИЛИСЯ ЗАПИТАННЯ?</h1>
                <Btn text={"ЗВ’ЯЖІТЬСЯ З НАМИ"} arrowDisplayed={true} dark={false} />
            </div>
            <div className="contact-us__right">
                <MapComponent />
            </div> */}
                <h1 className="contact-us__header header">КОНТАКТИ</h1>
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
                    <IconFB className="pointer" />
                    <IconIG className="pointer" />
                    <IconTK className="pointer" />
                </div>
                <div className="contact-us__map">
                    <MapComponent />
                </div>
                <h1 className="contact-us__sub-header">ЗАЛИШИЛИСЯ ЗАПИТАННЯ?</h1>
                <Btn className={"contact-us__sub-header"} text={"ЗВ’ЯЖІТЬСЯ З НАМИ"} arrowDisplayed={true} dark={false} />
        </div>
    )
}