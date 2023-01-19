import React from 'react';
import bg from '../../../Assets/background.png';
// import ImgSlider from '../../ImgSlider/ImgSlider';

const Banner = () => {

  return (
    <div className="hero min-h-screen relative" style={{ backgroundImage: `url(${bg})` }}>
      <div className='absolute'>
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-36">
          <iframe className='aspect-auto lg:aspect-video w-2/3 h-3/4 ml-[-54px] mt[-54px]' width="500" height="315" src="https://www.youtube.com/embed/sTeoEFzVNSc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <div className='w-full lg:w-3/5 text-white'>
            <h1 className="text-4xl lg:text-6xl font-bold">Online Learning Platform!</h1>
            <p className="py-8 w-full">Build skills with courses, certificates, and degrees online from world-class universities and companies</p>
            <button className="btn btn-primary text-white">Join For Free</button>
          </div>
        </div>
      </div>
      <div className='absolute top-[80%] w-11/12'>
        {/* <ImgSlider /> */}
      </div>
    </div>
  );
};

export default Banner;
