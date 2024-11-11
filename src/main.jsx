import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import AboutNav from './components/upcoming/AboutNav';
import PortfolioNav from './components/upcoming/PortfolioNav';
import ClientsNav from './components/upcoming/Clientsnav';
import BlogNav from './components/upcoming/BlogNav';
import Contact from './components/Contact';
import BookingTable from './pages/BookingTable';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutNav></AboutNav>,
      },
      {
        path: "/portfolio",
        element: <PortfolioNav></PortfolioNav>,
      },
      {
        path: "/clients",
        element: <ClientsNav></ClientsNav>,
      },
      {
        path: "/blogs",
        element: <BlogNav></BlogNav>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/bookingTable",
        element: <BookingTable></BookingTable>,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <div className='max-w-7xl mx-auto'>
        <RouterProvider router={router} />
      </div> 
      <Toaster />
  </StrictMode>,
)
