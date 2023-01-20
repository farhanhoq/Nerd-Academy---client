import React from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './UnderConstruction.css'

const UnderConstruction = () => {
    return (
        <div className='background py-60'>
            <div className='flex flex-col items-center justify-center text-center '>
                <h1 className='text-5xl uppercase'>under construction</h1>
                <p className='text-2xl mt-3'>SITE NEARLY READY</p>
                <div className="radial-progress text-3xl mt-14" style={{ "--value": "75", "--size": "12rem", "--thickness": "5px" }}>75%</div>

                <p className='mt-20 text-2xl'>KEEP IN TOUCH</p>

                <div className="justify-self-center mt-10">
          <ul className="flex gap-x-14">
            <li className="cursor-pointer hover:text-primary text-4xl transition duration-150 ease-in-out border border-stone-800 p-5 rounded-full">
              <FaLinkedinIn />
            </li>
            <li className="cursor-pointer hover:text-primary text-4xl transition duration-150 ease-in-out border border-stone-800 p-5 rounded-full">
              <FaFacebookF />
            </li>
            <li className="cursor-pointer hover:text-primary text-4xl transition duration-150 ease-in-out border border-stone-800 p-5 rounded-full">
              <FaGoogle />
            </li>
            <li className="cursor-pointer hover:text-primary text-4xl transition duration-150 ease-in-out border border-stone-800 p-5 rounded-full">
              <FaTwitter />
            </li>
          </ul>
        </div>
            </div>
        </div>
    );
};

export default UnderConstruction;