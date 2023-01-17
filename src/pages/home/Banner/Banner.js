import React from 'react';
import "./Banner.css";
import bg from '../../../Assets/background.png';
<<<<<<< HEAD


=======
>>>>>>> f6416fb1f404dcc8630599d04e19dc1fe17d16a7

const Banner = () => {

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <div className='lg:mt-[-200px]'>
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-36">
          <iframe className='aspect-auto lg:aspect-video' width="500" height="315" src="https://www.youtube.com/embed/sTeoEFzVNSc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <div className='w-full lg:w-3/5 text-white'>
            <h1 className="text-6xl font-bold">Online Learning Platform!</h1>
            <p className="py-8">Build skills with courses, certificates, and degrees online from world-class universities and companies</p>
            <button className="btn btn-primary text-white">Join For Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
