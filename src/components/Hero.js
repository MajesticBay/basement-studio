import scrollMobile from "../images/scroll-mobile.svg";
import scrollDesktop from "../images/scroll-desktop.svg";

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__scroll-container">
                <img className="hero__scroll hero__scroll--mobile" src={scrollMobile} alt="scroll mobile" />
                <img className="hero__scroll hero__scroll--desktop" src={scrollDesktop} alt="scroll desktop" />
            </div>
        </div>
    )
}

export default Hero;