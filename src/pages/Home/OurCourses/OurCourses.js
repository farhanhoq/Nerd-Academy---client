import minusb from '../../../Assets/minusb.png'
import book from '../../../Assets/book.png';
import { useQuery } from '@tanstack/react-query';
import './OurCourses.css'
import { Link, useLoaderData } from 'react-router-dom';



const OurCourses = () => {

    const service = useLoaderData()

    const { data: singleCourses = [], isLoading, refetch } = useQuery({
        queryKey: ['singleCourses'],
        queryFn: () => fetch('ourCourses.json')
            .then(res => res.json())
    });

    return (
        <div className='mb-32 py-32 bg-cyan-50 mt-[20%]' id='courses'>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-5xl text-center font-bold capitalize'>our courses</h1>
                <div className='grid justify-center'>
                    <img className='h-full w-12' src={minusb} alt="" />
                    <img className='h-full w-12' src={book} alt="" />
                </div>

                <div className='w-12/12 mx-auto rounded-lg'>
                    <div className='grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 p-10 text-center gap-5'>
                        {
                            singleCourses?.map(course => <div key={course?._id} className="card bg-base-100 shadow-xl rounded">
                                <figure><img className='' src={course?.picture} alt="Shoes" /></figure>
                                <div className="card-body text-left">
                                    <h2 className="font-bold text-primary">{course?.name}</h2>
                                    <p className='text-sm text-gray-600'>{course?.about.slice(0, 150)}</p>
                                    <div className="card-actions justify-between items-center">
                                        <p className='font-bold text-primary'>${course?.price}</p>

                                        <Link to={`/details/${course._id}`}><button className="btn rounded text-white btn-primary">Buy Now</button></Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>




                {/* <div className=''>
                    <p className='text-center mt-6'> Here are a few courses and more upcoming now just processing. <br />
                        Here are a few courses and more upcoming now just processing.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mx-8 text-center'>

                        <div className="card w-full rounded-tr-none bg-white-600 shadow-xl">
                            <figure>
                                <img className='rounded-tl-2xl w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title justify-center">
                                    Graphic Design
                                </h2>
                                <p className='text-center'>We are experts in helping organizations leverage coaching to drive engagement, performance and </p>
                                <div className="card-actions justify-center mt-2">
                                    <button className="bg-primary rounded-t-none rounded-b-none rounded-l-lg text-lg p-1 text-white">150$</button>
                                    <button className="rounded-r-xl bg-primary text-white text-lg p-1 ring-offset-2">Join Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="card w-full rounded-tr-none bg-white-600 shadow-xl">
                            <figure><img className='rounded-tl-2xl w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title justify-center">
                                    Graphic Design

                                </h2>
                                <p className='text-center'>We are experts in helping organizations leverage coaching to drive engagement, performance and </p>
                                <div className="card-actions justify-center mt-2">
                                    <div className="bg-cyan-600 rounded-t-none rounded-b-none rounded-l-lg text-lg p-1 text-white">150$</div>
                                    <div className="rounded-r-xl bg-cyan-700 text-white text-lg p-1 ring-offset-2">Join Now</div>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full rounded-tr-none bg-white-600 shadow-xl">
                            <figure><img className='rounded-tl-2xl w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title justify-center">
                                    Graphic Design

                                </h2>
                                <p className='text-center'>We are experts in helping organizations leverage coaching to drive engagement, performance and </p>
                                <div className="card-actions justify-center mt-2">
                                    <div className="bg-cyan-600 rounded-t-none rounded-b-none rounded-l-lg text-lg p-1 text-white">150$</div>
                                    <div className="rounded-r-xl bg-cyan-700 text-white text-lg p-1 ring-offset-2">Join Now</div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div> */}
            </div>
        </div >
    );
};

export default OurCourses;
