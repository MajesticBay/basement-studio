import arrow from "../images/arrow.svg";
import styled from "styled-components";

const Button = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.8rem 0;
    background-color: ${(({ dark }) => (dark ? "transparent" : "white"))};
    border: 2px solid rgba(255, 255, 255, 0.4);
    // color: var(--color-white);
    color: ${(({ dark }) => (dark ? "white" : "black"))};
    font-weight: 800;
}`

export const Btn = ({ text, arrowDisplayed, dark }) => {
    // dark = dark;
    JSON.stringify(dark);
    console.log("dark ", dark);
    return (
        <Button dark={dark} className="pointer">
            <span>{ text }</span>
            { arrowDisplayed ? <img src={arrow} alt="arrow" /> : <></> }
        </Button>
    )
}

export default Btn;