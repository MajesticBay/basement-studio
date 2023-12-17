import React, { useRef, useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import PropTypes from 'prop-types'
import useElementVisibility from './hooks/useElementVisibility'

export const CarouselItem = ({ children }) => {
  return (
    <div className="carousel-item" style={{ width: '100%' }}>
      {children}
    </div>
  )
}

CarouselItem.propTypes = {
  children: PropTypes.node.isRequired
}

const MobileCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const rentRef = useRef(null)
  const isVisible = useElementVisibility(rentRef)

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

    if (isVisible) {
      interval = setInterval(() => {
        if (!paused) {
          updateIndex(activeIndex + 1)
        }
      }, 5000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  return (
    <div
      {...handlers}
      className="carousel"
      ref={rentRef}
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

MobileCarousel.propTypes = {
  children: PropTypes.node.isRequired
}

export default MobileCarousel
