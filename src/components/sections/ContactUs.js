// import { MapComponent } from "../MapComponent.tsx";
import { Btn } from "../Btn";
import { ReactComponent as IconFB } from "../../images/icons/fb.svg";
import { ReactComponent as IconIG } from "../../images/icons/ig.svg";
import { ReactComponent as IconTK } from "../../images/icons/tk.svg";
import email from "../../images/icons/email.svg";
import phone from "../../images/icons/phone.svg";
import address from "../../images/icons/address.svg";

export const ContactUs = () => {
    return (
        <div id="contact-us" className="contact-us">
                <h1 className="contact-us__header header">КОНТАКТИ</h1>
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
                    <a
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/basement.studio.kyiv/"
                        target="_blank"
                    >
                        <IconFB className="pointer" />
                    </a>
                    <IconIG className="pointer" />
                    <IconTK className="pointer" />
                </div>
                <div className="contact-us__map">
                    {/* <MapComponent /> */}
                    <h1>In Development</h1>
                </div>
                <h1 className="contact-us__sub-header">ЗАЛИШИЛИСЯ ЗАПИТАННЯ?</h1>
                <Btn className={"contact-us__btn"} text={"ЗВ’ЯЖІТЬСЯ З НАМИ"} arrowDisplayed={true} dark={false} />
        </div>
    )
}