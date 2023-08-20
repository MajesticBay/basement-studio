import React from 'react'
import { ScrollDownMobile, ScrollDownDesktop } from '../icons/index.ts'

export const Hero = () => {
  return (
        <div className="hero">
            <div className="hero__scroll-container">
                {/* we have svg as components as it makes it easier to deal with css animations */}
                <ScrollDownMobile />
                <ScrollDownDesktop />
            </div>
        </div>
  )
}

export default Hero
