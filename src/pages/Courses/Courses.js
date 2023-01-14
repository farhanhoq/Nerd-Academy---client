import React from 'react';
import minus from '../../Assets/minus.png'
import book from '../../Assets/book.png'
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div>
      <h1 className='text-5xl text-center font-bold '>Trending Courses</h1>
      <div className='grid justify-center '>
        <img className='h-full w-24' src={minus} alt="" />
        <img className='w-24' src={book} alt="" />
      </div>


      <div className='grid grid-rows-1 gap-8 my-10 mx-8 text-center'>

        <div className="hero bg-slate-50 shadow-xl rounded-xl ring-2 ring-cyan-500 ring-offset-zinc-300">
          <div className="flex-col lg:flex-row-reverse flex gap-4 lg:gap-12">
            <img src="https://placeimg.com/260/400/arch" className="rounded-tl-xl shadow-2xl h-56 w-full lg:w-1/2 rounded-xl" alt='' />

            <div className='col-span-2 lg:mr-24 lg:my-6 mb-3 lg:mb-0'>
              <p className="p-4 lg:py-6 lg:ml-7">We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance and We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance </p>
              <div className="card-actions text-center justify-center">
                <Link to="/" className="bg-cyan-600 rounded-t-none rounded-b-none rounded-l-lg text-lg p-2 text-white">160$</Link>
                <Link to="/" className="rounded-r-xl bg-cyan-700 text-white text-lg p-2 ring-offset-2">Join Now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero bg-slate-50 shadow-xl rounded-xl ring-2 ring-cyan-500 ring-offset-zinc-300">
          <div className="flex-col lg:flex-row flex gap-4 lg:gap-12">
            <img src="https://placeimg.com/260/400/arch" className="rounded-tl-xl shadow-2xl h-56 w-full lg:w-1/2 rounded-xl" alt='' />

            <div className='col-span-2 lg:mr-24 lg:my-6 mb-3 lg:mb-0'>
              <p className="p-4 lg:py-6 lg:ml-7">We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance and We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance </p>
              <div className="card-actions text-center justify-center">
                <Link to="/" className="bg-cyan-600 rounded-t-none rounded-b-none rounded-l-lg text-lg p-2 text-white">160$</Link>
                <Link to="/" className="rounded-r-xl bg-cyan-700 text-white text-lg p-2 ring-offset-2">Join Now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero bg-slate-50 shadow-xl rounded-xl ring-2 ring-cyan-500 ring-offset-zinc-300">
          <div className="flex-col lg:flex-row-reverse flex gap-4 lg:gap-12">
            <img src="https://placeimg.com/260/400/arch" className="rounded-tl-xl shadow-2xl h-56 w-full lg:w-1/2 rounded-xl" alt='' />

            <div className='col-span-2 lg:mr-24 lg:my-6 mb-3 lg:mb-0'>
              <p className="p-4 lg:py-6 lg:ml-7">We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance and We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance </p>
              <div className="card-actions text-center justify-center">
                <Link to="/" className="bg-cyan-600 rounded-t-none rounded-b-none rounded-l-lg text-lg p-2 text-white">160$</Link>
                <Link to="/" className="rounded-r-xl bg-cyan-700 text-white text-lg p-2 ring-offset-2">Join Now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero bg-slate-50 shadow-xl rounded-xl ring-2 ring-cyan-500 ring-offset-zinc-300">
          <div className="flex-col lg:flex-row flex gap-4 lg:gap-12">
            <img src="https://placeimg.com/260/400/arch" className="rounded-tl-xl shadow-2xl h-56 w-full lg:w-1/2 rounded-xl" alt='' />

            <div className='col-span-2 lg:mr-24 lg:my-6 mb-3 lg:mb-0'>
              <p className="p-4 lg:py-6 lg:ml-7">We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance and We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance </p>
              <div className="card-actions text-center justify-center">
                <Link to="/" className="bg-cyan-600 rounded-t-none rounded-b-none rounded-l-lg text-lg p-2 text-white">160$</Link>
                <Link to="/" className="rounded-r-xl bg-cyan-700 text-white text-lg p-2 ring-offset-2">Join Now</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
};

export default Courses;
