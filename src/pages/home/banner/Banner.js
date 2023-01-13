import React from 'react';
import './Banner.css'
// import bg from '../../../../public/Assets/background.png'

const Banner = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen banner">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-2xl">
    <p className='mb-3'>All You Need To Know</p>
      <h1 className="mb-5 text-6xl ">We Provide Skill Based <br /> Online Class</h1>
      <p className="mb-5 mt-7">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn border-none px-8 mt-3 bg-cyan-500 rounded-full">GET STARTED</button>
    </div>
  </div>
</div>
        </div>
    );
};
