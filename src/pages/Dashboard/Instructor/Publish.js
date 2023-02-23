import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Publish = () => {
    const { user } = useContext(AuthContext);
    const [publish, setPublish] = useState();

    useEffect(() => {
        fetch(`https://nerd-academy-server.vercel.app/publish?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setPublish(data));
    }, [user?.email])

    const deleteProduct = (id) => {
        fetch(`https://nerd-academy-server.vercel.app/deleteCourse/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.error("Deleted Item Successfully");
                }
            })
    };

    return (
        <div className="card bg-base-100">
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
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6
                     p-6 text-center'>
                        {
                            publish?.map(p => p.publish === true &&
                                <>
                                    <div
                                        key={p?._id}
                                        className="cursor-pointer rounded-xl bg-white p-2 
                                        shadow-lg hover:shadow-xl h-full w-96 border">
                                        <div className="relative flex items-end overflow-hidden
                                         rounded-xl">
                                            <img
                                                className="w-full h-40"
                                                src={p?.picture}
                                                alt="wallpaper" />
                                        </div>

                                        <div className="mt-1 p-2">
                                            <h2 className="text-slate-700 text-lg font-bold mt-3">{p?.title}</h2>
                                            <p className="mt-1 text-[2px] text-slate-400">
                                                {p?.description.slice(0, 60)}
                                            </p>

                                            <div className="mt-3 flex items-center justify-between">
                                                <p>
                                                    <span className="text-base font-bold text-primary">
                                                        $ {p?.price}
                                                    </span>
                                                    <span className="text-sm font-semibold text-slate-400 mx-3">
                                                        {p?.category}
                                                    </span>
                                                </p>

                                                {/* <div className="group inline-flex rounded-xl bg-indigo-100 p-2 hover:bg-indigo-200">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                                    </svg>
                                                </div> */}
                                            </div>
                                            <div className="flex items-center relative  border-b border-secondary py-1"></div>
                                            <div className="flex items-center relative my-2 justify-between">

                                                <div className="ml-3">
                                                    <p className="font-medium text-gray-800">
                                                        {p?.tutor}
                                                    </p>
                                                    <p className="text-md text-gray-600"></p>
                                                </div>

                                                <div className="flex items-center justify-between space-x-1.5 rounded-lg px-4 py-1.5">
                                                    {/* <Link to={`/details/${p._id}`} className="text-sm text-white bg-gradient-to-r from-primary to-secondary btn btn-sm">
                                                        Edit
                                                    </Link> */}

                                                    <button onClick={() => deleteProduct(p._id)} className='btn btn-sm bg-red-700 border-none text-white'>Delete</button>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Publish;