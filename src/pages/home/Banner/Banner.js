import React from 'react';
import newBg from '../../../Assets/home-banner-bg.png.webp';
import banner from '../../../Assets/banner.webp'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Banner = () => {

  const { data: countAPI = [] } = useQuery({
    queryKey: ["countAPI"],
    queryFn: async () => {
      const res = await fetch(`https://api.countapi.xyz/update/neasher/neasher1/?amount=1`);
      const data = await res.json();
      return data;
    }
  });

  return (
    <div className="hero min-h-screen grid-cols-2 relative" style={{ backgroundImage: `url(${newBg})` }} id="#home">
      <div className='absolute left-[50px] top-[80px]'>
        <div className="hero-content items-center justify-center flex-col md:flex-row">
          <div className='w-full text-white mx-auto'>
            <h1 className="text-4xl font-bold">Online Learning Platform!</h1>
            <p className="py-8 w-2/3">Nerd Academy is an online learning community based in the globally for people who want to learn from educational videos. The courses, which are not accredited, are only available through paid subscription.</p>
            {/* <button className="btn text-white">Join For Free</button> */}
            <Link to="#courses" className="btn bg-white dark:bg-black text-black dark:text-white border-none hover:bg-white hover:shadow-2xl shadow-white">Explore our courses</Link>
          </div>
          <div className=''>
            <img src={banner} alt="" className='hidden md:block' />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
