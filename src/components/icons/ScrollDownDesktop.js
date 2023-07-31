export const ScrollDownDesktop = () => {
  const scrollIntoElement = (target) => {
    const px = window.innerHeight * 1
    window.scrollTo({
      top: px,
      behavior: 'smooth'
    })
  }

  return <svg
        className="hero__scroll hero__scroll--desktop animateRoll pointer"
        alt="scroll desktop"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => scrollIntoElement('about-us')}
    >
            <rect x="13" y="4" width="30" height="48" rx="15" stroke="white"/>
            <circle id="circle-roll" cx="28" cy="17" r="3" fill="white"/>
        </svg>
}
