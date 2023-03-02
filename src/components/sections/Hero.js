// import scrollMobile from "../images/icons/scroll-mobile.svg";
// import scrollDesktop from "../images/icons/scroll-desktop.svg";
import { ScrollDownMobile } from "../icons/ScrollDownMobile";
import { ScrollDownDesktop } from "../icons/ScrollDownDesktop";

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__scroll-container">
                {/* <img className="hero__scroll hero__scroll--mobile jump" src={scrollMobile} alt="scroll mobile" /> */}
                {/* <img className="hero__scroll hero__scroll--desktop animateRoll" src={scrollDesktop} alt="scroll desktop" /> */}
                <ScrollDownMobile />
                <ScrollDownDesktop />
            </div>
        </div>
    )
}

export default Hero;