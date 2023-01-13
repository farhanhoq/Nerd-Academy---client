import React from 'react';
import minusb from '../../../Assets/minusb.png'
import book from '../../../Assets/book.png'


const OurCourses = () => {
    return (
        <div>

            <h1 className='text-3xl text-center font-bold uppercase'>our courses</h1>

            <div className='grid justify-center'>

                <img className='h-full w-24' src={minusb} alt="" srcset="" />
                <img className='h-full w-24' src={book} alt="" srcset="" />

            </div>

            <div className=''>
                <p className='text-center mt-6'> Here are a few courses and more upcoming now just processing.
                    Here are a few courses and more upcoming now just processing.</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 container px-20 mt-12 sm:grid-cols-1 gap-6 my-10 mx-8 text-center'>
                    <div className="card w-full rounded-tr-none bg-white-600 shadow-xl">
                        <figure><img className='rounded-tl-2xl' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">
                                Graphic Design
                            </h2>
                            <p className='text-center'>We are experts in helping organizations leverage coaching to drive engagement, performance and </p>
                            <div className="card-actions justify-center mt-2">
                                <button className="bg-primary rounded-t-none rounded-b-none rounded-l-lg text-lg py-1 px-2 text-white">150$</button>
                                <button className="rounded-r-xl bg-primary text-white text-lg py-1 px-3 ring-offset-2">Join Now</button>
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
                            <button className="bg-primary rounded-t-none rounded-b-none rounded-l-lg text-lg py-1 px-2 text-white">150$</button>
                                <button className="rounded-r-xl bg-primary text-white text-lg py-1 px-3 ring-offset-2">Join Now</button>
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
                            <button className="bg-primary rounded-t-none rounded-b-none rounded-l-lg text-lg py-1 px-2 text-white">150$</button>
                                <button className="rounded-r-xl bg-primary text-white text-lg py-1 px-3 ring-offset-2">Join Now</button>
                            </div>
                        </div>

                    </div>
                </div>



            </div>


        </div>
    );
};

export default OurCourses;