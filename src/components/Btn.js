import arrow from "../images/arrow.svg";

export const Btn = () => {
    return (
        <div className="btn pointer">
            <span>ДЕТАЛЬНІШЕ</span>
            <img src={arrow} alt="arrow" />
        </div>
    )
}

export default Btn;