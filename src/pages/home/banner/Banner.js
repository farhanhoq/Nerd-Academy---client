import React from 'react';
import bg from '../../../Assets/background.png';
import ImgSlider from '../../ImgSlider/ImgSlider';

const Banner = () => {

  return (
    <div className="hero min-h-screen relative" style={{ backgroundImage: `url(${bg})` }} id="#home">
      <div className='absolute'>
        <div className="hero-content flex-col items-center justify-center text-center">
          {/* <iframe className='aspect-auto lg:aspect-video w-2/3 h-3/4 ml-[-54px] mt[-54px]' width="500" height="315" src="https://www.youtube.com/embed/sTeoEFzVNSc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
          <div className='w-full text-white mx-auto'>
            <h1 className="text-4xl lg:text-6xl font-bold">Online Learning Platform!</h1>
            <p className="py-8 w-full md:w-2/4 mx-auto">Nerd Academy is an online learning community based in the globally for people who want to learn from educational videos. The courses, which are not accredited, are only available through paid subscription.</p>
            {/* <button className="btn text-white">Join For Free</button> */}
            <a href="#courses" className="btn bg-white dark:bg-black text-black dark:text-white border-none">Explore our courses</a>
          </div>
        </div>
      </div>
      <div className='absolute top-[80%] w-11/12 hidden md:block'>
        <ImgSlider />
      </div>
    </div>
  );
};

export default Banner;
