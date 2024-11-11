import React, { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestimonialSection = () => {
  const sliderRef = useRef(null);
  const [items, setItems] = useState([])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    fetch('testimonial.json')
    .then(res => res.json())
    .then(data => {
      setItems(data)
    })
  },[])

  useEffect(() => {
    AOS.init(
      {
        duration: 2000,
      }
    );
  },[])

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="bg-white dark:bg-gray-900 mb-12">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8">
        <div>
          <h2 className="text-xl font-semibold text-red-500">Crispy, Every Bite Taste</h2>
          <h1 className="text-4xl font-bold mt-2">What Some of my Customers Say</h1>
        </div>
        <div className="flex items-center justify-between mt-12 lg:justify-start">
          <button
            title="left arrow"
            onClick={goToPrev}
            className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            title="right arrow"
            onClick={goToNext} 
            className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {items.map(item => (
          <div key={item.id} className="container px-6 py-10 mx-auto">
            <div className="lg:-mx-6 lg:flex lg:items-center">
              <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white lg:text-2xl lg:w-96" data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  <span className="text-5xl font-semibold text-blue-500 ">“</span> {item.description}
                </h1>
                <div className="flex justify-around items-center mt-8 -mx-2" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">{item.userName}</h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.userBio}</span>
                  </div>
                  <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={item.userImage} alt=""/>
                </div>
                <hr className="mt-4 border-t-2 border-gray-400 opacity-50"/>
              </div>
              <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[30rem]" src={item.image} alt=""/>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSection;
