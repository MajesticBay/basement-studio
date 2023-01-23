import photo from "../images/photo1.png";

export const AboutUs = () => {
    return (
        <div className="about-us">
            <p className="about-us__text"><span className="bold">BASEMENT</span> - музична студія, що базується у Львові для тих, кому потрібен креативний андерграунд-простір (з атмосферою андерграунду) для спілкування та створення музики.</p>
            <p className="about-us__text">Комфорт та професійне обладнання зробить ваш творчий процес повним натхнення та свободи експериментів.</p>
            <img src={photo} alt="gallery" />
        </div>
    )
}

export default AboutUs;