import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';
import { FaUsers } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';


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
                                    <Link to="/admin-dashboard/courses" className='text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group'>
                                        {/* <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                        </svg> */}
                                        <RiAdminLine className='text-xl text-grey'></RiAdminLine>
                                        <span class="ml-3 flex-1 whitespace-nowrap">Courses</span></Link>
                                </li>
                                <li>
                                    <Link className='text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group'>
                                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="ml-3 flex-1 whitespace-nowrap">Logout</span></Link>
                                </li>
                                <hr />

                            </ul>
                        </div>
                        {/* <div className='mt-12'>
                            <ul class="tracking-wide text-white ">
                            

                            



                            </ul>
                        </div> */}
                    </ul>



                </div>

            </div>

        </div>
    );
};

export default AdminDashboardLayout;