import React from 'react';
import newBg from '../../../Assets/home-banner-bg.png.webp';
import ImgSlider from '../../ImgSlider/ImgSlider';
import banner from '../../../Assets/banner.webp'

const Banner = () => {

  return (
    <div className="hero min-h-screen relative grid-cols-2" style={{ backgroundImage: `url(${newBg})` }} id="#home">
      <div className='absolute left-[50px] top-[80px]'>
        <div className="hero-content items-center justify-center">
          <div className='w-full text-white mx-auto'>
            <h1 className="text-4xl font-bold">Online Learning Platform!</h1>
            <p className="py-8 w-2/3">Nerd Academy is an online learning community based in the globally for people who want to learn from educational videos. The courses, which are not accredited, are only available through paid subscription.</p>
            {/* <button className="btn text-white">Join For Free</button> */}
            <a href="#courses" className="btn bg-white dark:bg-black text-black dark:text-white border-none hover:bg-white hover:shadow-2xl shadow-white">Explore our courses</a>
          </div>
          <div className=''>
        {/* <ImgSlider /> */}
        <img src={banner} alt="" />
      </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
