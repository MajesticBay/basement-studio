import mouse from "../images/scroll.svg";

export const Hero = () => {
    return (
        <div className="hero-screen">
            <div className="hero-screen__mouse-container">
                <img src={mouse} alt="mouse" />
            </div>
        </div>
    )
}

export default Hero;