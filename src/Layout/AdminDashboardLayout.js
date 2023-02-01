import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';
import { FaUsers } from 'react-icons/fa';


const AdminDashboardLayout = () => {
    return (
        <div className='mx-auto'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="admin-dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-5 md:px-14 my-16">
                    <Outlet />
                </div>
                <div className="drawer-side border">

                    <label htmlFor="admin-dashboard-drawer" className="drawer-overlay"></label>

                    {/* Logo here in this div */}
                    {/* <div class="">
                        <Link to="#" title="home">
                            <img className='w-32' src="" alt="" srcset="" />
                        </Link>
                    </div>

                    <div class="mt-16 text-center">
                        <img className='w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28' src="https://cdn-icons-png.flaticon.com/512/8443/8443255.png" alt="" srcset="" />
                        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Jerge Chamas</h5>
                        <span class="hidden text-gray-400 lg:block">Admin</span>
                    </div> */}

                    <ul className="mt-32 menu p-4 w-80 lg:bg-opacity-0 text-white">
                        <div>
                            <ul class="space-y-2 tracking-wide text-white ">
                                <li>
                                    <Link to="/admin-dashboard" aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                                        <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                            <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                            <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-sky-300"></path>
                                        </svg>
                                        <span class="-mr-1 font-medium">Dashboard</span>
                                    </Link>
                                </li>
                                <li>
<<<<<<< HEAD
                                    <Link to="/admin-dashboard/analytics" className='text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group'>
                                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                        </svg>
                                        <span class="ml-3 flex-1 whitespace-nowrap">Analytics</span>
                                        <span class="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">New</span>
                                    </Link>
                                </li>
                                <li>
=======
>>>>>>> 91c9f7cd6d51c929a006966f48189bbaeb1b5540
                                    <Link to="/admin-dashboard/inbox" className='text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group'>
                                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                                            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                                        </svg>
                                        <span class="ml-3 flex-1 whitespace-nowrap">Inbox</span>
                                        <span class="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin-dashboard/all-instructor" className='text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group'>
                                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="ml-3 flex-1 whitespace-nowrap">Instructor</span></Link>
                                </li>
                                <li>
                                    <Link to="/admin-dashboard/customer" className='text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group'>
                                        {/* <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                        </svg> */}
                                        <FaUsers className='text-xl text-grey'></FaUsers>
                                        <span class="ml-3 flex-1 whitespace-nowrap">Customer</span></Link>
                                </li>
                                <li>
                                    <Link to="/admin-dashboard/products" className='text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group'>
                                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="ml-3 flex-1 whitespace-nowrap">Products</span></Link>
                                </li>
                                <li>
                                    <Link to="/admin-dashboard/earning" className='text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group'>
                                        <img className='w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75' src="https://cdn-icons-png.flaticon.com/512/845/845685.png" alt="" srcset="" />
                                        <span class="ml-3 flex-1 whitespace-nowrap">Earnings</span></Link>
                                </li>
                                <li>
                                    <Link className='text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group'>
                                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="ml-3 flex-1 whitespace-nowrap">Sign In</span></Link>
                                </li>
                                <hr />

                            </ul>
                        </div>
                        <div className='mt-12'>
                            <ul class="tracking-wide text-white ">
                                <li>
                                    <Link to="/admin-dashboard/documentation" href="#" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="ml-3">Documentation</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/admin-dashboard/components" href="#" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                        </svg>
                                        <span class="ml-3">Components</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/admin-dashboard/help" href="#" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="ml-3">Help</span>
                                    </Link>
                                </li>



                            </ul>
                        </div>
                    </ul>



                </div>

            </div>

        </div>
    );
};

export default AdminDashboardLayout;