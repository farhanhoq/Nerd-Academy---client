import React from 'react';
import minusb from '../../../Assets/minusb.png'
import book from '../../../Assets/book.png'


const OurCourses = () => {
    return (
        <div>

            <h1 className='text-5xl text-center font-bold '>OUR COURSES</h1>

            <div className='grid justify-center'>

                <img className='h-full w-24' src={minusb} alt="" srcset="" />
                <img className='h-full w-24' src={book} alt="" srcset="" />

            </div>

            <div className=''>
                <p className='text-center mt-6'> Here are a few courses and more upcoming now just processing. <br />
                    Here are a few courses and more upcoming now just processing.</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-10 mx-8 text-center'>
                    <div className="card w-full rounded-tr-none bg-white-600 shadow-xl">
                        <figure><img className='rounded-tl-2xl' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">
                                Graphic Design

                            </h2>
                            <p className='text-center'>We are experts in helping organizations leverage coaching to drive engagement, performance and </p>
                            <div className="card-actions justify-center mt-2">
                                <div className="badge badge-lg rounded-t-none rounded-b-none rounded-l-lg">150$</div>
                                <div className="badge badge-lg rounded-l-lg bg-slate-100 text-black">Join Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full rounded-tr-none bg-white-600 shadow-xl">
                        <figure><img className='rounded-tl-2xl' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">
                                Graphic Design

                            </h2>
                            <p className='text-center'>We are experts in helping organizations leverage coaching to drive engagement, performance and </p>
                            <div className="card-actions justify-center mt-2">
                                <div className="badge badge-lg rounded-t-none rounded-b-none rounded-l-lg">150$</div>
                                <div className="badge badge-lg rounded-l-lg bg-slate-100 text-black">Join Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full rounded-tr-none bg-white-600 shadow-xl">
                        <figure><img className='rounded-tl-2xl' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">
                                Graphic Design

                            </h2>
                            <p className='text-center'>We are experts in helping organizations leverage coaching to drive engagement, performance and </p>
                            <div className="card-actions justify-center mt-2">
                                <div className="badge badge-lg rounded-t-none rounded-b-none rounded-l-lg">150$</div>
                                <div className="badge badge-lg rounded-l-lg bg-slate-100 text-black">Join Now</div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>


        </div>
    );
};

export default OurCourses;