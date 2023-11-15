import React from 'react'
import { ScrollDownMobile, ScrollDownDesktop } from '../icons/index.ts'

export const Hero = () => {
  return (
        <div className="hero">
            <div className="hero__scroll-container">
                <ScrollDownMobile />
                <ScrollDownDesktop />
            </div>
        </div>
  )
}

export default Hero
