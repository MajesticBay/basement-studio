export const ScrollDownMobile = () => {
    const scrollIntoElement = (target) => {
        const px = window.innerHeight*1
        window.scrollTo({
            top: px,
            behavior: "smooth"
        })
    }

    return <svg
        className="hero__scroll hero__scroll--mobile jump"
        alt="scroll mobile"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => scrollIntoElement("about-us")}
    >
    <path fillRule="evenodd" clipRule="evenodd" d="M5.30115 14.2025C4.997 13.9265 4.51134 13.9335 4.21641 14.2182C3.92147 14.5028 3.92894 14.9573 4.23309 15.2334L11.466 21.7975C11.7635 22.0675 12.2365 22.0675 12.534 21.7975L19.7669 15.2334C20.0711 14.9573 20.0785 14.5028 19.7836 14.2182C19.4887 13.9335 19.003 13.9265 18.6988 14.2025L12 20.282L5.30115 14.2025ZM5.30115 3.20253C4.997 2.9265 4.51134 2.9335 4.21641 3.21815C3.92147 3.50281 3.92894 3.95733 4.23309 4.23336L11.466 10.7975C11.7635 11.0675 12.2365 11.0675 12.534 10.7975L19.7669 4.23336C20.0711 3.95733 20.0785 3.50281 19.7836 3.21815C19.4887 2.9335 19.003 2.9265 18.6988 3.20253L12 9.28198L5.30115 3.20253Z" fill="white" fillOpacity="0.72"/>
    </svg>
}