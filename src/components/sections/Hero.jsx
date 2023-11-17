import React from 'react'
import { ScrollDownMobile, ScrollDownDesktop } from '../icons/index.ts'

export const Hero = () => {
  return (
        <div className="hero">
          <iframe id="video-background" // https://developers.google.com/youtube/player_parameters
            src="https://www.youtube.com/embed/LYWFL5pGeME?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=LYWFL5pGeME&mute=1"
            frameBorder="0"
            allowfullscreen>
          </iframe>
            <div className="hero__scroll-container">
                <ScrollDownMobile />
                <ScrollDownDesktop />
            </div>
        </div>
  )
}

export default Hero
