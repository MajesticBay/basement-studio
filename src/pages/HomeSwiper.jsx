import React, { Suspense } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import '../scss/main.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Hero from '../components/sections/Hero'

const componentsList = [
  'AboutUs',
  'RecordStudio',
  'CourseDj',
  'CourseProduction',
  'Rent',
  'GiftCertificate',
  'ContactUs',
  'Footer'
]

const componentMap = componentsList.map((componentName) => {
  return React.lazy(() => import(`../components/sections/${componentName}`))
})

export default function App () {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>

        {componentMap.map((Component, index) => (
          <SwiperSlide key={index}>
            <Suspense fallback={<div>Loading...</div>}>
              <Component />
            </Suspense>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
