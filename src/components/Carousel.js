import React, { useState } from "react";
import "./Carousel.css";
import strr from './Union.png'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    'https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg',
    'https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/c0e9c490-b7e7-47a6-9c43-3e10e8ddc9cb-4445-dubai-img-worlds-of-adventure-tickets-08.jpeg',
    'https://citrontours.ae/wp-content/uploads/2022/09/gallery-img-worlds-of-adventure-1.jpg',
    'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg'      
  ]

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleDragStart = (event) => {
    setDragStart(event.touches[0].clientX);
  };

  const handleDragMove = (event) => {
    if (dragStart === null) {
      return;
    }

    const distance = event.touches[0].clientX - dragStart;
    setDragDistance(distance);
  };

  const handleDragEnd = () => {
    if (dragDistance > 50) {
      handlePrev();
    } else if (dragDistance < -50) {
      handleNext();
    }
    setDragStart(null);
    setDragDistance(0);
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
        <div className="carouselafter"></div>
        <div className="carouselbefore"></div>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className={`carousel-item `} key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-prev" onClick={handlePrev}>
      <img src={strr} className='arrow' style={{rotate: '180deg'}} alt="" />

      </button>
      <button className="carousel-next" onClick={handleNext}>
        <img src={strr} className='arrow' alt="" />
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${
              index === currentSlide ? 'active' : ''
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;