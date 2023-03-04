import { useTranslation } from 'react-i18next';
import MobileCarousel, { CarouselItem } from "../../components/MobileCarousel";
import photo from "../../images/photo1.png";

export const AboutUs = () => {
    const { t } = useTranslation();

    const imagesData = [
        {
            path: photo
        },
        {
            path: photo
        },
        {
            path: photo
        },
        {
            path: photo
        },
        {
            path: photo
        }
    ]

    const images = imagesData.map((image, imageIndex) => (
        <CarouselItem>
            <img key={imageIndex} className='about-us__photo' src={image.path} alt="gallery" />
        </CarouselItem>
    ))

    return (
        <div id="about-us" className="about-us">
            <p className="about-us__text">
                <span className="bold">BASEMENT</span>
                {/* - музична студія, що базується у Львові для тих, кому потрібен креативний андерграунд-простір (з атмосферою андерграунду) для спілкування та створення музики. */}
                {t('aboutUs.p1')}
            </p>
            <p className="about-us__text">
                {/* Комфорт та професійне обладнання зробить ваш творчий процес повним натхнення та свободи експериментів. */}
                {t('aboutUs.p2')}</p>
            <MobileCarousel>
                {images}
            </MobileCarousel>
        </div>
    )
}

export default AboutUs;