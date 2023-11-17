import React, { useState, useEffect } from 'react'
import { ScrollDownMobile, ScrollDownDesktop } from '../icons/index.ts'

export const Hero = () => {
  const [loadVideo, setLoadVideo] = useState(false)

  useEffect(() => {
    const handleResize = () => setLoadVideo(window.innerWidth > 1080)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="hero">
      {loadVideo && (
        <iframe
          id="video-background"
          src="https://www.youtube.com/embed/LYWFL5pGeME?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=LYWFL5pGeME&mute=1"
          frameBorder="0" // Trick to hide a logo https://jsfiddle.net/s6tp2xfm
          allowFullScreen
        />
      )}
      <div className="hero__scroll-container">
        <ScrollDownMobile />
        <ScrollDownDesktop />
      </div>
    </div>
  )
}

export default Hero
