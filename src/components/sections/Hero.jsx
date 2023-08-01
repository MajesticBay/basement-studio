import React from 'react'
import { ScrollDownMobile } from '../icons/ScrollDownMobile'
import { ScrollDownDesktop } from '../icons/ScrollDownDesktop'

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
