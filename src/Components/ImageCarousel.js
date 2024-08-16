import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide1 from "../Assets/slide1.jpeg";
import Slide2 from "../Assets/slide2.jpg";
import Slide3 from "../Assets/slide32.jpg";
import Slide4 from "../Assets/slide41.jpg";
import "../App.css";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(null);
  
  const sliderRef = useRef(null);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(oldIndex);
    setNextSlide(newIndex);
  };

  const handleAfterChange = (index) => {
    setNextSlide(null);
  };

  const getAnimationClass = (slideIndex) => {
    switch (slideIndex) {
      case 0:
        return 'carousel-content-up';
      case 1:
        return 'carousel-content-down';
      case 2:
        return 'carousel-content-left';
      case 3:
        return 'carousel-content-right';
      default:
        return '';
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    fade: true, // Enable fade transition
  };

  return (
    <div className="relative w-[100%] h-screen overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        <div className={`relative w-full h-full carousel-slide`}>
          <img 
            src={Slide1} 
            alt="Slide 1" 
            className="w-full h-[600px] object-cover transition-transform duration-1000 ease-in-out" 
          />
          <div className={`absolute top-0 left-20 bottom-0 w-1/2 h-full flex flex-col justify-center items-start text-white p-4 ${getAnimationClass(0)}`}>
            <h1 className="text-white text-5xl">Control Your Home From</h1>
            <h1 className="text-white text-5xl">Your Smart Phone</h1>
          </div>
        </div>
        
        <div className={`relative w-full h-full carousel-slide`}>
          <img 
            src={Slide2} 
            alt="Slide 2" 
            className="w-full h-[600px] object-cover transition-transform duration-1000 ease-in-out" 
          />
          <div className={`absolute top-0 left-20 bottom-0 w-1/2 h-full flex flex-col justify-center items-start text-white p-4 ${getAnimationClass(1)}`}>
            <h1 className="text-white text-5xl">Change Your Mood</h1>
            <h1 className="text-white text-5xl">Change Your Lighting</h1>
          </div>
        </div>
        
        <div className={`relative w-full h-full carousel-slide`}>
          <img 
            src={Slide3}
            alt="Slide 3" 
            className="w-full h-[600px] object-cover transition-transform duration-1000 ease-in-out" 
          />
          <div className={`absolute top-0 left-20 bottom-0 w-1/2 h-full flex flex-col justify-center items-start text-white p-4 ${getAnimationClass(2)}`}>
            <h1 className="text-white text-5xl">Protect Your Loved Ones During Emergencies</h1>
          </div>
        </div>

        <div className={`relative w-full h-full carousel-slide`}>
          <img 
            src={Slide4}
            alt="Slide 4" 
            className="w-full h-[600px] object-cover transition-transform duration-1000 ease-in-out" 
          />
          <div className={`absolute top-0 right-0 bottom-0 w-1/2 h-full flex flex-col justify-center items-start text-white p-4 ${getAnimationClass(3)}`}>
            <h1 className="text-white text-5xl">Instantly Know If</h1>
            <h1 className="text-white text-5xl">Something's Up</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
