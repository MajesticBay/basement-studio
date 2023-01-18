import email from "../images/email.svg";
import phone from "../images/phone.svg";
import address from "../images/address.svg";

export const ContactUs = () => {
    return (
        <div className="contact-us">
            <h1>КОНТАКТИ</h1>
            <a>
                <img src={email} alt="email" />
                <span>basementstudio@gmail.com</span>
            </a>
            <a>
                <img src={phone} alt="phone" />
                <span>+380XXXXXXXXX</span>
            </a>
            <a>
                <img src={address} alt="address" />
                <span>вул. Сахарова 2, м. Львів, 79026</span>
            </a>
        </div>
    )
}

