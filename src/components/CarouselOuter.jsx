import React from 'react'
import Carousel, { CarouselItem } from './Carousel'

export const CarouselOuter = () => {
  return (
        <Carousel>
            <CarouselItem>Item 1</CarouselItem>
            <CarouselItem>Item 2</CarouselItem>
            <CarouselItem>Item 3</CarouselItem>
        </Carousel>
  )
}

export default CarouselOuter
