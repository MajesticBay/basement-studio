import scrollMobile from "../images/icons/scroll-mobile.svg";
import scrollDesktop from "../images/icons/scroll-desktop.svg";

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__scroll-container">
                <img className="hero__scroll hero__scroll--mobile jump" src={scrollMobile} alt="scroll mobile" />
                <img className="hero__scroll hero__scroll--desktop jump" src={scrollDesktop} alt="scroll desktop" />
            </div>
        </div>
    )
}

export default Hero;