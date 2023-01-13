import React from 'react';
import minus from '../../Assets/minus.png'
import book from '../../Assets/book.png'

const Courses = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-bold '>Trending Courses</h1>
            <div className='grid justify-center '>
                <img className='h-full w-24' src={minus} alt="" srcset="" />
                <img className='w-24' src={book} alt="" srcset="" />
            </div>


            <div className='grid grid-rows-3 gap-4 my-10 mx-8 text-center'>
                <div className="h-56 bg-slate-50 rounded-xl border border-indigo-600">
                    <div className="flex gap-6">
                        <img src="https://placeimg.com/260/400/arch" className="rounded-tl-xl shadow-2xl h-56 w-1/2 mr-2" alt='' />
                        <div className='col-span-2 mr-24 my-6'>

                            <div className=''>
                                <p className="py-6 ml-7  ">We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance and We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance </p>
                            </div>


                            <div className="card-actions justify-center mt-2">
                                <div className="bg-cyan-600 rounded-t-none rounded-b-none rounded-l-lg text-lg p-2 text-white">150$</div>
                                <div className="rounded-r-xl bg-cyan-700 text-white text-lg p-2 ring-offset-2">Join Now</div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="h-56 bg-slate-50 rounded-b-xl rounded-bl-none rounded-tl-xl border">
                    <div className=" flex flex-row-reverse">
                        <img src="https://placeimg.com/260/400/arch" className="rounded-tl-xl shadow-2xl h-56 w-1/2 mr-2" alt='' />
                        <div className='col-span-2 mr-24 my-6'>

                            <div className=''>
                                <p className="py-6 ml-7 ">We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance and We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance </p>
                            </div>


                            <div className="card-actions justify-center mt-2">
                                <div className="bg-cyan-600 rounded-t-none rounded-b-none rounded-l-lg text-lg p-2 text-white">160$</div>
                                <div className="rounded-r-xl bg-cyan-700 text-white text-lg p-2 ring-offset-2">Join Now</div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="h-56 bg-slate-50 rounded-b-xl rounded-bl-none rounded-tl-xl border border-indigo-600">
                    <div className=" flex gap-6">
                        <img src="https://placeimg.com/260/400/arch" className="rounded-tl-xl shadow-2xl h-56 w-1/2 mr-2" alt='' />
                        <div className='col-span-2 mr-24 my-6'>

                            <div className=''>
                                <p className="py-6 ml-7 ">We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance and We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance </p>
                            </div>


                            <div className="card-actions justify-center mt-2">
                                <div className="bg-cyan-600 rounded-t-none rounded-b-none rounded-l-lg text-lg p-2 text-white">170$</div>
                                <div className="rounded-r-xl bg-cyan-700 text-white text-lg p-2 ring-offset-2">Join Now</div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="h-56 bg-slate-50 rounded-b-xl rounded-bl-none rounded-tl-xl">
                    <div className=" flex flex-row-reverse">
                        <img src="https://placeimg.com/260/400/arch" className="rounded-tl-xl shadow-2xl h-56 w-1/2 mr-2" alt='' />
                        <div className='col-span-2 mr-24 my-6'>

                            <div className=''>
                                <p className="py-6 ml-7  ">We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance and We are experts in helping organisations leverage coaching to drive engagement, performance organisations leverage coaching to drive engagement, performance </p>
                            </div>


                            <div className="card-actions justify-center mt-2">
                                <div className="bg-cyan-600 rounded-t-none rounded-b-none rounded-l-lg text-lg p-2 text-white">180$</div>
                                <div className="rounded-r-xl bg-cyan-700 text-white text-lg p-2 ring-offset-2">Join Now</div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div >
    );
};

export default Courses;