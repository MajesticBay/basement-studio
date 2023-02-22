import styled from "styled-components";

const ArrowSVG = styled.svg`
    path {
        fill: ${(({ dark }) => (dark ? "white" : "black"))};
    }
`;

export const Arrow = ({ dark }) => {
    return (
        <ArrowSVG
            dark={dark}
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.4603 5.39962C15.1674 5.10672 14.6925 5.10672 14.3996 5.39962C14.1067 5.69251 14.1067 6.16738 14.3996 6.46028L19.1893 11.25L4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75L19.1892 12.75L14.3996 17.5396C14.1067 17.8325 14.1067 18.3074 14.3996 18.6003C14.6925 18.8932 15.1674 18.8932 15.4603 18.6003L21.5303 12.5303C21.6709 12.3896 21.7499 12.1989 21.7499 11.9999C21.7499 11.801 21.6709 11.6103 21.5303 11.4696L15.4603 5.39962Z"
                // fill="white"
            />
        </ArrowSVG>
    )
}

export default Arrow;