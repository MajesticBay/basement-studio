import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import PropTypes from 'prop-types'

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width }}>
      {children}
    </div>
  )
}

CarouselItem.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired
}

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, 3000)

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
        {/* <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button> */}
        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={`${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                updateIndex(index)
              }}
            >
              {/* {index + 1} */}
            </div>
          )
        })}
        {/* <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button> */}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired
}

export default Carousel
