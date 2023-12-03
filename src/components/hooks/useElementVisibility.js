import { useState, useEffect } from 'react'

const useElementVisibility = (ref) => {
  const [isVisible, setIsVisible] = useState(false)

  const checkVisibility = () => {
    if (!ref.current) {
      return
    }

    const rect = ref.current.getBoundingClientRect()
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight
    setIsVisible(isInView)
  }

  useEffect(() => {
    checkVisibility()
    window.addEventListener('scroll', checkVisibility)
    window.addEventListener('resize', checkVisibility)

    return () => {
      window.removeEventListener('scroll', checkVisibility)
      window.removeEventListener('resize', checkVisibility)
    }
  }, [ref])

  return isVisible
}

export default useElementVisibility
