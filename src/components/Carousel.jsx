import React, { useRef, useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import useElementVisibility from '../components/hooks/useElementVisibility'
import PropTypes from 'prop-types'

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width || 'auto' }}>
      {children}
    </div>
  )
}

CarouselItem.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string
}

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const carouselRef = useRef(null)
  const isVisible = useElementVisibility(carouselRef)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  useEffect(() => {
    let interval
    if (isVisible && !paused) {
      interval = setInterval(() => {
        updateIndex(activeIndex + 1)
      }, 3000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [activeIndex, isVisible, paused])

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  return (
    <div
      {...handlers}
      ref={carouselRef}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' })
        })}
      </div>
      <div className="indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={`${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                updateIndex(index)
              }}
            >
            </div>
          )
        })}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired
}

export default Carousel
