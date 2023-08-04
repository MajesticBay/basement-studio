import React from 'react'
import { Hero } from '../components/sections/Hero'
import { AboutUs } from '../components/sections/AboutUs'
import { RecordStudio } from '../components/sections/RecordStudio'
import { CourseDj } from '../components/sections/CourseDj'
import { CourseProduction } from '../components/sections/CourseProduction'
import { Rent } from '../components/sections/Rent'
import { ContactUs } from '../components/sections/ContactUs'

export const Home = () => {
  return (
        <>
            <Hero />
            <AboutUs />
            <RecordStudio />
            <CourseDj />
            <CourseProduction />
            <Rent />
            <ContactUs />
        </>
  )
}

export default Home
