import React from 'react';
import minus from '../../Assets/minus.png'
import book from '../../Assets/book.png'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Courses = () => {

  const {data: courses = [], isLoading, refetch } = useQuery({
    queryKey: ['courses'],
    queryFn: () => fetch('trendingCourses.json')
    .then(res => res.json())
  });
  // console.log(courses);

  return (
      <div className='w-12/12 mx-auto rounded-lg '>
  <div className='grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 p-10  text-center gap-5'>
    {
      courses?.map(course => <div key={course?._id} className="card bg-base-100 shadow-xl rounded">
      <figure><img className='' src={course?.picture} alt="Shoes" /></figure>
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
