import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "../scss/main.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Hero from "../components/sections/Hero";
import { AboutUs } from "../components/sections/AboutUs";
import { RecordStudio } from "../components/sections/RecordStudio";
import { CourseDj } from "../components/sections/CourseDj";
import { CourseProduction } from "../components/sections/CourseProduction";
import { Rent } from "../components/sections/Rent";
import { GiftCertificate } from "../components/sections/GiftCertificate";
import { ContactUs } from "../components/sections/ContactUs";
import { Footer } from "../components/sections/Footer";


export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>

        <SwiperSlide>
          <AboutUs />
        </SwiperSlide>

        <SwiperSlide>
          <RecordStudio />
        </SwiperSlide>

        <SwiperSlide>
          <CourseDj />
        </SwiperSlide>

        <SwiperSlide>
          <CourseProduction />
        </SwiperSlide>
        
        <SwiperSlide>
          <Rent />
        </SwiperSlide>

        <SwiperSlide>
          <GiftCertificate />
          <ContactUs />
          <Footer />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
