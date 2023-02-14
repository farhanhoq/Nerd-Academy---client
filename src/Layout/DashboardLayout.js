import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Navbar from '../pages/Shared/Navbar';
import { GoSignOut } from 'react-icons/go';
import "./style.css";
import { AiOutlineHome } from 'react-icons/ai';


const DashboardLayout = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const { data: profile = [], refetch, isLoading } = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const res = await fetch(`https://nerd-academy-server.vercel.app/users/?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    // const { email, fullName, eductaion, phone, address, picture } = profile;
    refetch();

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
                <div className="drawer-content px-5 md:px-14 ">
                    <Outlet />
                </div>
                <div className="drawer-side border">

                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    {/* Logo here in this div */}

                    <div className="mt-12 text-center">
                        <img className='w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28' src={profile?.body?.picture} alt="" srcset="" />
                        <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block uppercase">{profile?.name}</h5>
                        <span className="hidden text-gray-400 lg:block capitalize font-bold">{profile?.role}</span>
                    </div>

                    <ul className="mt-2 menu p-4 w-80 lg:bg-opacity-0 text-white">
                        <div>
                            <ul className="space-y-2 tracking-wide text-white ">
                                <li>
                                    <Link to="/dashboard" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                                        <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                            <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                            <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                                        </svg>
                                        <span className="-mr-1 font-medium text-black">Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/myCourse" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path className="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                            <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                        </svg>
                                        <span className="group-hover:text-gray-700 text-black">My Courses</span>
                                        {/* <Link to="/dashboard/myCourse"><span className="group-hover:text-gray-700">My Courses</span></Link> */}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/add-course" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path className="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                            <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                        </svg>
                                        <span className="group-hover:text-gray-700 text-black">Add Course</span>
                                        {/* <Link to="/dashboard/myCourse"><span className="group-hover:text-gray-700">My Courses</span></Link> */}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/DasboardReview" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/512/9474/9474993.png" alt="" srcset="" />
                                        <span className="group-hover:text-gray-700 text-black">Review</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/order" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="" srcset="" />
                                        <span className="group-hover:text-gray-700 text-black">Order History</span>
                                        {/* <Link to="/dashboard/profile"><span className="group-hover:text-gray-700">Profile</span></Link> */}
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/my-profile" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" srcset="" />
                                        <span className="group-hover:text-gray-700 text-black">My Profile</span>
                                        {/* <Link to="/dashboard/settings"><span className="group-hover:text-gray-700">Settings</span></Link> */}
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <span className='h-5 w-5'><AiOutlineHome></AiOutlineHome></span>
                                        <span className="group-hover:text-gray-700 text-black">Home</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link onClick={handleLogOut} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <GoSignOut></GoSignOut>
                                        <span className="group-hover:text-gray-700 text-black">Log Out</span>
                                    </Link>
                                </li>



                            </ul>
                        </div>
                    </ul>

                    <div className="space-y-2 pt-2">
                        <a href="#" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">

                        </a>

                        {/* <a href="#" target="_blank" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                            <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                            </svg>
                            <span className="ml-3">Components</span>
                        </a>
                        <a href="#" target="_blank" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                            <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-3">Help</span>
                        </a> */}
                    </div>


                </div>

            </div>

        </div>
    );
};

export default DashboardLayout;