import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import bookingImg from '../../src/assets/black-pasta-with-copy-space.jpg'

const BookingTable = () => {
    const [startDate, setStartDate] = useState(new Date());

    const [containerHeight, setContainerHeight] = useState("50rem");

    useEffect(() => {
        const updateHeight = () => {
            if (window.innerWidth >= 640) { 
                setContainerHeight("40rem");
            }
            else {
                setContainerHeight("50rem");
            }
        };
        updateHeight();
        window.addEventListener("resize", updateHeight);
  
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    useEffect(() => {
        AOS.init(
          {
            duration: 2000,
          }
        );
      },[])

    return (
        <div className='mb-24'>
            <div
            className="flex justify-start items-start bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bookingImg})`, height: containerHeight
             }}
        >
            <section className="p-4 md:p-6 mx-4 my-8 rounded-md w-full max-w-lg" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <div className="space-y-3">
                    <h5 className="text-base font-semibold text-red-600 capitalize">
                        <ul>
                            <li>Book Now</li>
                        </ul>
                    </h5>
                    <h1 className="text-3xl lg:text-5xl font-bold text-gray-200 capitalize">
                        Book Your Table
                    </h1>
                    <p className="text-base font-semibold text-white capitalize">
                        Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                    </p>
                </div>

                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white" htmlFor="name">
                                Name:
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                className="block w-full px-4 py-2 mt-2 text-white bg-black bg-opacity-80 border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-white" htmlFor="emailAddress">
                                Email Address:
                            </label>
                            <input
                                id="emailAddress"
                                type="email"
                                name="email"
                                placeholder="Your email"
                                className="block w-full px-4 py-2 mt-2 text-white bg-black bg-opacity-80 border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-white">Reservation Date:</label>
                            <DatePicker
                                className="border p-2 text-white bg-black"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white" htmlFor="totalPeople">
                                Total People:
                            </label>
                            <input
                                id="totalPeople"
                                name="totalPeople"
                                type="number"
                                placeholder='Total people'
                                className="block w-full px-4 py-2 mt-2 text-white bg-black bg-opacity-80 border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <label className="text-white" htmlFor="description">
                            Message:
                        </label>
                        <textarea
                            placeholder="Say something..."
                            className="block w-full px-4 py-2 mt-2 text-white bg-black bg-opacity-80 border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none"
                            name="message"
                            id="description"
                        ></textarea>
                    </div>
                    <div className="flex justify-start mt-6">
                        <button className="px-8 py-2.5 leading-5 text-black transition-colors duration-300 bg-yellow-400 rounded-md hover:bg-gray-600 hover:text-white focus:outline-none focus:bg-gray-600">
                            Book Now
                        </button>
                    </div>
                </form>
            </section>
        </div>
        </div>
    );
};

export default BookingTable;
