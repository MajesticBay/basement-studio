import arrow from "../images/arrow.svg";

export const Btn = () => {
    return (
        <button>
            <span>ДЕТАЛЬНІШЕ</span>
            <img src={arrow} alt="arrow" />
        </button>
    )
}

export default Btn;