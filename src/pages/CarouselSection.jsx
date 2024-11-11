import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


  

const CarouselSection = () => {

  const sliderRef = useRef(null);
  const [items, setItems] = useState([])

  useEffect(() => {
    AOS.init(
      {
        duration: 2000,
      }
    );
  },[])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
    };

    useEffect(() => {
      fetch('carousel.json')
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
    },[])

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <section className="container mx-auto my-16 px-4 mb-32">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8">
                <div>
                    <h2 className="text-xl font-semibold text-red-500">Crispy, Every Bite Taste</h2>
                    <h1 className="text-4xl font-bold mt-2">Popular Food Items</h1>
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
                    <div key={item.id} className="p-4" data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-32 h-32 mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default CarouselSection;
