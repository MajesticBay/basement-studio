import mouse from "../images/scroll.svg";

export const TopScreen = () => {
    return (
        <div className="top-screen">
            <div className="top-screen__mouse-container">
                <img src={mouse} alt="mouse" />
            </div>
        </div>
    )
}

export default TopScreen;