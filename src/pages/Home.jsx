import React, { useEffect, useState } from 'react'
import { Hero } from '../components/sections/Hero'
import { AboutUs } from '../components/sections/AboutUs'
import { RecordStudio } from '../components/sections/RecordStudio'
import { CourseDj } from '../components/sections/CourseDj'
import { CourseProduction } from '../components/sections/CourseProduction'
import { Rent } from '../components/sections/Rent'
import { GiftCertificate } from '../components/sections/GiftCertificate'
import { ContactUs } from '../components/sections/ContactUs'
import { Footer } from '../components/sections/Footer'
import useWindowDimensions from '../hooks/useWindowDimentions'

export const Home = () => {
//   const sectionStyle = {
//     height: '100vh',
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     paddingTop: '72px'
//   }

  const { width } = useWindowDimensions()

  const [isMobile, setIsMobile] = useState(width < 992)

  useEffect(() => {
    setIsMobile(width < 992)
  }, [width])

  if (isMobile) {
    return (
            <>
                <Hero />
                <AboutUs />
                <RecordStudio />
                <CourseDj />
                <CourseProduction />
                <Rent />
                {/* <CarouselOuter /> */}
                <GiftCertificate />
                <ContactUs />
                <Footer />
            </>
    )
  }

  return (
        <>
            <Hero />
            <AboutUs />
            <RecordStudio />
            <CourseDj />
            <CourseProduction />
            <Rent />
            <GiftCertificate />
            <ContactUs />
            <Footer />
        </>
  )
}

export default Home
