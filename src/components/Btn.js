import arrow from "../images/arrow.svg";

export const Btn = ({ text, arrowDisplayed }) => {
    return (
        <div className="btn pointer">
            <span>{ text }</span>
            { arrowDisplayed ? <img src={arrow} alt="arrow" /> : <></> }
        </div>
    )
}

export default Btn;