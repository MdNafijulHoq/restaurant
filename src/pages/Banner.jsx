import React, { useEffect } from 'react';
import bannerImg from '../../src/assets/image1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 2000,
      }
    );
  },[])
    return (
        
        <div className="card lg:card-side shadow-xl mb-20 bg-red-600">
        <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-10">  
         
          <div className="card-body space-y-4 order-1 lg:order-1" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h2 className="card-title text-3xl md:text-5xl lg:text-6xl text-white">
              TASTE THE AUTHENTIC SAUDI CUISINE
            </h2>
            <p className="text-gray-300">
              Among the best Saudi chefs in the world, serving you something beyond flavor.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-warning">Explore Menu</button>
            </div>
          </div>
          
          <div className="w-full lg:w-auto order-2 lg:order-2" data-aos="zoom-in-up">
            <img className="rounded-xl w-full" src={bannerImg} alt="Album" />
          </div>
        </div>
      </div>
    );
};

export default Banner;