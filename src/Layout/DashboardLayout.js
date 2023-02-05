import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Navbar from '../pages/Shared/Navbar';

const DashboardLayout = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Sign Out Successfully");
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (

        <div className='mx-auto'>
            {/* <Navbar></Navbar> */}
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-5 md:px-14 my-16">
                    <Outlet />
                </div>
                <div className="drawer-side border">

                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    {/* Logo here in this div */}
                    <div class="">
                        <Link to="#" title="home">
                            <img className='w-32' src="" alt="" srcset="" />
                        </Link>
                    </div>

                    <div class="mt-2 text-center">
                        <img className='w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28' src={user?.photoURL} alt="" srcset="" />
                        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{user?.displayName}</h5>
                        <span class="hidden text-gray-400 lg:block">Instructor</span>
                    </div>

                    <ul className="menu p-4 w-80 lg:bg-opacity-0 text-white">
                        <div>
                            <ul class="space-y-2 tracking-wide text-white ">
                                <li>
                                    <Link to="/dashboard" aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                                        <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                            <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                            <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-sky-300"></path>
                                        </svg>
                                        <span class="-mr-1 font-medium">Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/myCourse" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                            <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                        </svg>
                                        <span class="group-hover:text-gray-700">My Courses</span>
                                        {/* <Link to="/dashboard/myCourse"><span class="group-hover:text-gray-700">My Courses</span></Link> */}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/add-course" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                            <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                        </svg>
                                        <span class="group-hover:text-gray-700">Add Course</span>
                                        {/* <Link to="/dashboard/myCourse"><span class="group-hover:text-gray-700">My Courses</span></Link> */}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/DasboardReview" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/512/9474/9474993.png" alt="" srcset="" />
                                        <span class="group-hover:text-gray-700">Review</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/order" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="" srcset="" />
                                        <span class="group-hover:text-gray-700">Order History</span>
                                        {/* <Link to="/dashboard/profile"><span class="group-hover:text-gray-700">Profile</span></Link> */}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/profile" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" srcset="" />
                                        <span class="group-hover:text-gray-700">Profile</span>
                                        {/* <Link to="/dashboard/settings"><span class="group-hover:text-gray-700">Settings</span></Link> */}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/my-profile" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" srcset="" />
                                        <span class="group-hover:text-gray-700">My Profile</span>
                                        {/* <Link to="/dashboard/settings"><span class="group-hover:text-gray-700">Settings</span></Link> */}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/settings" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <span class="group-hover:text-gray-700">Setting</span>
                                        {/* <Link to="/dashboard/settings"><span class="group-hover:text-gray-700">Settings</span></Link> */}
                                    </Link>
                                </li>


                                {/* <li>
                                    <Link href="#" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="ml-3">Documentation</span>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </ul>

                    <div class="space-y-2 pt-2">
                        <a href="#" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">

                        </a>

                        {/* <a href="#" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                            <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                            </svg>
                            <span class="ml-3">Components</span>
                        </a>
                        <a href="#" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                            <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="ml-3">Help</span>
                        </a> */}
                    </div>


                </div>

            </div>

        </div>
    );
};

export default DashboardLayout;