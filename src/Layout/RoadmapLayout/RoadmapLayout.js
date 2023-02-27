import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer';
import Navbar from '../../pages/Shared/Navbar';

const RoadmapLayout = () => {
    return (
        <div className="dark:bg-accent">
            <Navbar></Navbar>
            <div className='pt-32 w-10/12 mx-auto'>
                <h1 className='text-center text-primary font-bold text-5xl'>Pathway to Follow</h1>

                <ul className="flex flex-col md:flex-row gap-0 md:gap-6 justify-center mb-10 menu menu-horizontal mx-auto">
            <li className="bg-transparent border-2 border-primary rounded-lg mt-6 hover:bg-gradient-to-r hover:from-[#7B33FD]
                hover:to-primary hover:text-white transition-colors ease-linear duration-500"
            >
              <span>Web Developer</span>
              <ul className="bg-base-100">
                <Link to="/roadmap/front-end" className="bg-transparent border-2 border-primary p-3 rounded-lg hover:bg-gradient-to-r hover:from-[#7B33FD]
                hover:to-primary text-black hover:text-white transition-colors ease-linear duration-500"><a>Front-End</a></Link>
                <Link to="/roadmap/back-end" className="bg-transparent border-2 border-primary p-3 rounded-lg hover:bg-gradient-to-r hover:from-[#7B33FD]
                hover:to-primary text-black hover:text-white transition-colors ease-linear duration-500"><a>Back-End</a></Link>
                <Link to='/roadmap/full-stack' className="bg-transparent border-2 border-primary p-3 rounded-lg hover:bg-gradient-to-r hover:from-[#7B33FD]
                hover:to-primary text-black hover:text-white transition-colors ease-linear duration-500"><a>Full-Stack</a></Link>
              </ul>
            </li>
            <button className="bg-transparent border-2 border-primary p-2 rounded-lg mt-6 hover:bg-gradient-to-r hover:from-[#7B33FD]
              hover:to-primary hover:text-white transition-colors ease-linear duration-300"
            >
              App Developer
            </button>
            <button className="bg-transparent border-2 border-primary p-2 rounded-lg mt-6 hover:bg-gradient-to-r hover:from-[#7B33FD]
              hover:to-primary hover:text-white transition-colors ease-linear duration-300"
            >
              Blockchain Developer
            </button>
            <button className="bg-transparent border-2 border-primary p-2 rounded-lg mt-6 hover:bg-gradient-to-r hover:from-[#7B33FD]
              hover:to-primary hover:text-white transition-colors ease-linear duration-150"
            >
              AI Developer
            </button>
          </ul>
            </div>
            <Outlet></Outlet>
            <div className='flex justify-center my-10'>
            <Link to="/all-courses" className='btn btn-wide rounded bg-transparent border-2 border-primary p-3 hover:border-none  hover:bg-gradient-to-r hover:from-[#7B33FD]
                hover:to-primary text-black hover:text-white transition-colors ease-linear duration-700 text-center'>Browse course</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RoadmapLayout;