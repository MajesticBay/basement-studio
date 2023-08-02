import React from 'react'
import { Hero } from '../components/sections/Hero'
import { AboutUs } from '../components/sections/AboutUs'
import { RecordStudio } from '../components/sections/RecordStudio'
import { CourseDj } from '../components/sections/CourseDj'
import { CourseProduction } from '../components/sections/CourseProduction'
import { Rent } from '../components/sections/Rent'
import { GiftCertificate } from '../components/sections/GiftCertificate'
import { ContactUs } from '../components/sections/ContactUs'
import { Footer } from '../components/sections/Footer'

export const Home = () => {
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
