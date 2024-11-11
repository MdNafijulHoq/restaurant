import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import frame from '../../../src/assets/Frame1.png'
import vector from '../../../src/assets/Vector.png'
import medal from '../../src/../assets/medal.png'
import bag from '../../src/../assets/bag.png'
import Contact from '../../components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ExperienceTab from './ExperienceTab';
import AboutTab from './AboutTab';

const About = () => {

    useEffect(() => {
        AOS.init(
          {
            duration: 2000,
          }
        );
      },[])

    return (
        <div>
        <div className='flex flex-col lg:flex-row mx-auto justify-center items-center lg:items-start gap-20 mb-6'>
            <div className='flex justify-start items-start' data-aos="fade-down-right">
            <img className='w-[300px] sm:w-[400px] md:w-[450px] rounded-xl lg:w-[500px]' src={frame} alt="" />
            </div>
        <div className='flex justify-start' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <Tabs>
        <TabList>
          <Tab>About</Tab>
          <Tab>Experience</Tab>
          <Tab>Contact</Tab>
        </TabList>
    
        <TabPanel>
            <AboutTab></AboutTab>
        </TabPanel>
        <TabPanel>
                <ExperienceTab></ExperienceTab>
        </TabPanel>
        <TabPanel>
                <Contact></Contact>
        </TabPanel>
      </Tabs>
        </div>
        </div>

        <section className='container mb-28'>
        <div className='space-y-4 lg:flex  lg:justify-evenly lg:items-center'>
            <div className='flex justify-center items-center gap-3'>
                <img className='border p-4 shadow-2xl rounded-full' src={vector} alt="" />
                <div>
                        <h3>FAST DELIVERY</h3>
                        <p>Within 30 min</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-3'>
                <img className='border p-4 shadow-2xl rounded-full' src={medal} alt="" />
                <div>
                        <h3>ABSOLUTE DINING</h3>
                        <p>Grab your food order</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-3'>
                <img className='border p-4 shadow-2xl rounded-full' src={bag} alt="" />
                <div>
                        <h3>PICKUP DELIVERY</h3>
                        <p>Grab your food order</p>
                </div>
            </div>
        </div>

        </section>

        </div>

        

    );
};

export default About;