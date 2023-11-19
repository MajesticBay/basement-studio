import React, { useState, useEffect } from 'react'
import { ScrollDownMobile, ScrollDownDesktop } from '../icons/index.ts'
import useWindowDimensions from '../hooks/useWindowDimensions'

export const Hero = () => {
  const { width } = useWindowDimensions()
  const [loadVideo, setLoadVideo] = useState(width > 1080)

  useEffect(() => {
    setLoadVideo(width > 1080)
  }, [width])

  return (
    <div className="hero">
      {loadVideo && (
        <iframe
          id="video-background"
          src="https://www.youtube.com/embed/LYWFL5pGeME?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=LYWFL5pGeME&mute=1"
          frameBorder="0"
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
