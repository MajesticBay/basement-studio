import email from "../images/email.svg";
import phone from "../images/phone.svg";
import address from "../images/address.svg";

export const ContactUs = () => {
    return (
        <div className="contact-us">
            <h1 className="contact-us__header">КОНТАКТИ</h1>
            <div className="contact-us__links-container">
                <a>
                    <img src={email} alt="email" />
                    <span className="contact-us__text">basementstudio@gmail.com</span>
                </a>
                <a>
                    <img src={phone} alt="phone" />
                    <span className="contact-us__text">+380XXXXXXXXX</span>
                </a>
                <a>
                    <img src={address} alt="address" />
                    <span className="contact-us__text">вул. Сахарова 2, м. Львів, 79026</span>
                </a>
            </div>
        </div>
    )
}

