import React from 'react';
import { Link } from 'react-router-dom';

const MyCourse = () => {

    return (
        <div className="card my-6 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">My Courses</h2>
                <hr className='my-2' />


                <div className="drawer drawer-mobile">


                    <ul className="menu p-2 w-80 lg:bg-opacity-0">
                        <div className='flex'>

                            <li>
                                <Link to="/dashboard/pending" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                    <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/512/9526/9526996.png" alt="" srcset="" />
                                    <span class="tab tab-bordered tab-active group-hover:text-gray-700">Pending</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/dashboard/publish" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                    <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/512/9628/9628230.png" alt="" srcset="" />
                                    <span class="tab tab-bordered group-hover:text-gray-700">Publish</span>
                                    {/* <Link to="/dashboard/profile"><span class="group-hover:text-gray-700">Profile</span></Link> */}
                                </Link>
                            </li>

                        </div>
                    </ul>

                </div>


                <hr className='my-2' />



            </div>
        </div>
    );
};

export default MyCourse;