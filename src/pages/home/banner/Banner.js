import React from 'react';
import "./Banner.css";
import bg from '../../../Assets/background.png';
import Courses from '../../Courses/Courses';


const Banner = () => {
  return (
    <div className="hero h-screen mt-6" style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="relative">
          <p className='mb-3'>All You Need To Know</p>
          <h1 className="mb-5 text-5xl md:text-6xl text-white">We Provide Skill Based <br /> Online Class</h1>
          <p className="mb-5 mt-7">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn border-none px-8 mt-3 bg-cyan-500 rounded-full">GET STARTED</button>
          <div className='absolute my-14'>
            <Courses></Courses>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
