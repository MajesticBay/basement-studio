import arrow from "../images/icons/arrow.svg";
import styled from "styled-components";

const Button = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.8rem 0;
    cursor: pointer;
    background-color: ${(({ dark }) => (dark ? "transparent" : "white"))};
    border: 2px solid rgba(255, 255, 255, 0.4);
    // color: var(--color-white);
    color: ${(({ dark }) => (dark ? "white" : "black"))};
    font-weight: 800;
    font-size: 1.6rem;

    @media only screen and (min-width: 768px) {
        font-size: 2rem;
        padding: 2.6rem 4rem;
    }
`

export const Btn = ({ text, arrowDisplayed, dark, className }) => {
    return (
        <Button dark={dark} className={className}>
            <span>{ text }</span>
            { arrowDisplayed ? <img src={arrow} alt="arrow" /> : <></> }
        </Button>
    )
}

export default Btn;