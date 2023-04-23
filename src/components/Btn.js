import styled from "styled-components";
import { Arrow } from "./icons/Arrow";

const Button = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
    padding: 1.8rem 0;
    cursor: pointer;
    background-color: ${(({ dark }) => (dark ? "transparent" : "rgba(255, 255, 255, 0.92)"))};
    border: 2px solid rgba(255, 255, 255, 0.4);
    // color: var(--color-white);
    color: ${(({ dark }) => (dark ? "white" : "black"))};
    font-weight: 800;
    font-size: 1.6rem;

    &:hover {
        border: 2px solid var(--color-white);
        background-color: ${(({ dark }) => (dark ? "transparent" : "var(--color-white)"))};
    }

    @media only screen and (min-width: 1080px) {
        width: fit-content;
        width: -moz-fit-content;
        font-size: 2rem;
        padding: 2.6rem 4rem;
    }
`

export const Btn = ({ text, arrowDisplayed, dark, className }) => {
    return (
        <Button dark={dark} className={className}>
            <span>{ text }</span>
            {/* { arrowDisplayed ? <img src={arrow} alt="arrow" /> : <></> } */}
            { arrowDisplayed ? <Arrow dark={dark} /> : <></> }
        </Button>
    )
}

export default Btn;