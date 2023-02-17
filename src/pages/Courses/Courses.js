import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ScrollCarousel from 'scroll-carousel';

const Courses = () => {

  new ScrollCarousel(".my-carousel", {
    direction: 'ltr'
  });


  const { data: courses = [] } = useQuery({
    queryKey: ['courses'],
    queryFn: () => fetch('trendingCourses.json')
      .then(res => res.json())
  });

  return (
    <div className='w-11/12 mx-auto rounded-lg hidden lg:block my-carousel'>
      <div className='grid grid-cols-3 p-10  text-center gap-5 my-slide'>
        {
          courses?.map(course => <div key={course?._id} className="card bg-base-100 shadow-xl rounded">
            <figure><img className='w-full' src={course?.picture} alt="Shoes" /></figure>
            <div className="card-body text-left">
              <h2 className="font-bold text-primary">{course?.name}</h2>
              <p className='text-sm text-gray-600'>{course?.about.slice(0, 150)}</p>
              <div className="card-actions justify-between items-center">
                <p className='font-bold text-primary'>${course?.price}</p>
                <button className="btn rounded text-white btn-primary">Buy Now</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>


  );
};

export default Courses;
