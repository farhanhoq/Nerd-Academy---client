import React from 'react';
import "./Banner.css";
import bg from '../../../Assets/background.png';
import Courses from '../../Courses/Courses';

const Banner = () => {

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <div className='lg:mt-[-220px] absolute'>
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-36">
          <iframe className='aspect-auto lg:aspect-video w-2/3 h-3/4 ml-[-54px] mt[-54px]' width="500" height="315" src="https://www.youtube.com/embed/sTeoEFzVNSc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <div className='w-full lg:w-3/5 text-white'>
            <h1 className="text-4xl lg:text-6xl font-bold">Online Learning Platform!</h1>
            <p className="py-8 w-3/4 lg:w-full">Build skills with courses, certificates, and degrees online from world-class universities and companies</p>
            <button className="btn btn-primary text-white">Join For Free</button>
          </div>
        </div>
      </div>
      <div className='relative top-2/4 w-11/12'>
        <Courses></Courses>
      </div>
    </div>
  );
};

export default Banner;
