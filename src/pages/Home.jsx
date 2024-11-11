import React from 'react';
import Banner from './Banner';

import CarouselSection from './CarouselSection';
import BookingTable from './BookingTable';
import TestimonialSection from './TestimonialSection';
import About from './About/About';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <CarouselSection></CarouselSection>
           <BookingTable></BookingTable>
           <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;