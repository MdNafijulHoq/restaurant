import React, { useState } from 'react';
import logo from '../../src/assets/Frame.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="bg-white dark:bg-gray-800 sticky top-0 z-50">
                <div className="container px-6 py-4 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <div className="flex items-center justify-between">
                            <Link to='/' className='flex items-center gap-2'>
                                <img
                                    className="w-auto h-6 sm:h-7"
                                    src={logo}
                                    alt="Logo"
                                />
                                <h4 className='font-semibold text-lg'>Restaurant</h4>
                            </Link>

                            {/* Mobile menu button */}
                            <div className="flex lg:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu"
                                >
                                    {isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 8h16M4 16h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div
                            className={`absolute inset-x-0 top-[72px] lg:top-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${
                                isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                        >
                            <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                                <NavLink
                                    to='/'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-500 dark:hover:text-gray-200 text-rose-700 font-bold"
                                            : "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-500 dark:hover:text-gray-200"
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-500 dark:hover:text-gray-200 text-rose-700 font-bold"
                                            : "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-500 dark:hover:text-gray-200"
                                    }
                                >
                                    About
                                </NavLink>
                                <NavLink to='/portfolio'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-500 dark:hover:text-gray-200 text-rose-700 font-bold"
                                            : "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-500 dark:hover:text-gray-200"
                                    }
                                >
                                    Portfolio
                                </NavLink>
                                <NavLink to='/clients'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-500 dark:hover:text-gray-200 text-rose-700 font-bold"
                                            : "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-500 dark:hover:text-gray-200"
                                    }
                                >
                                    Clients
                                </NavLink>
                                <NavLink to='/blogs'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-500 dark:hover:text-gray-200 text-rose-700 font-bold"
                                            : "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-500 dark:hover:text-gray-200"
                                    }
                                >
                                    Blog
                                </NavLink>
                                <NavLink to='/contact'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-500 dark:hover:text-gray-200 text-rose-700 font-bold"
                                            : "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-500 dark:hover:text-gray-200"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </div>

                            <div className="flex justify-end mt-6 lg:flex lg:mt-0 lg:-mx-2"> 
                                <Link to='/bookingTable' className='btn btn-warning lg:ml-24 xl:ml-72'>Book a Table</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Spacer div to prevent content from being hidden under fixed header */}
            <div className="h-[72px] lg:h-[80px]"></div>
        </div>
    );
};

export default Header;
