import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Publish = () => {


    const [publish, setPublish] = useState();
    useEffect(() => {
        fetch('https://nerd-academy-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setPublish(data));
    }, [])

    return (
        <div className="card my-6 bg-base-100">
            <div className="card-body">
                <h2 className="card-title">My Courses</h2>
                <hr className='my-2' />
                <ul className="menu p-2 w-80 lg:bg-opacity-0">
                    <div className='flex'>

                        <li>
                            <Link to="/dashboard/pending" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/512/9526/9526996.png" alt="" srcset="" />
                                <span class="tab tab-bordered group-hover:text-gray-700">Pending</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/dashboard/publish" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/512/9628/9628230.png" alt="" srcset="" />
                                <span class="tab tab-bordered tab-active group-hover:text-gray-700">Publish</span>
                                {/* <Link to="/dashboard/profile"><span class="group-hover:text-gray-700">Profile</span></Link> */}
                            </Link>
                        </li>

                    </div>
                </ul>

                <div className="drawer drawer-mobile">

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-center'>

                        {
                            publish?.map(p => p.publish === true &&
                                <>
                                    <div
                                        key={p?._id}
                                        className="cursor-pointer rounded-xl bg-white p-2 shadow-lg hover:shadow-xl h-96 border"
                                    >
                                        <div className="relative flex items-end overflow-hidden rounded-xl">
                                            <img
                                                className="w-full h-40"
                                                src={p?.picture}
                                                alt="wallpaper"
                                            />
                                        </div>

                                        <div className="mt-1 p-2">
                                            <h2 className="text-slate-700 text-lg font-bold mt-3">{p?.title}</h2>
                                            <p className="mt-1 text-[2px] text-slate-400">
                                                {p?.description.slice(0, 60)}
                                            </p>
                                            {/* <p>{p?.tutor}</p> */}

                                            <div className="mt-3 flex items-center justify-between">
                                                <p>
                                                    <span className="text-base font-bold text-primary">
                                                        $ {p?.price}
                                                    </span>
                                                    <span className="text-sm font-semibold text-slate-400 mx-3">
                                                        {p?.category}
                                                    </span>
                                                </p>

                                                <div className="group inline-flex rounded-xl bg-indigo-100 p-2 hover:bg-indigo-200">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex items-center relative  border-b border-cyan-500 py-1"></div>
                                            <div className="flex items-center relative my-2">

                                                <div className="ml-3">
                                                    <p className="font-medium text-gray-800">
                                                        {p?.tutor}
                                                    </p>
                                                    <p className="text-md text-gray-600"></p>
                                                </div>

                                                <div className="flex items-center justify-between space-x-1.5 rounded-lg px-4 py-1.5">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg> */}

                                                    <Link to={`/details/${p._id}`} className="text-sm btn btn-sm">
                                                        Edit
                                                    </Link>

                                                </div>
                                                {/* <Link onClick={() => deleteProduct(p._id)}>
                                                    <button class="items-center px-2 py-2 text-white bg-red-500 dark:bg-gray-500 rounded-md hover:bg-red-600 dark:hover:bg-gray-600 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                        </svg>
                                                    </button>
                                                </Link> */}

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>


                <hr className='my-2' />

            </div>


        </div>
    );
};

export default Publish;