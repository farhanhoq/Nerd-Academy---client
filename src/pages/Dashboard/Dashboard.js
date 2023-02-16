import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { AuthContext } from '../../Context/AuthProvider';

const Dashboard = () => {
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [purchasedCourses, setPurchasedCourses] = useState([]);

    useEffect(() => {
        fetch(`https://nerd-academy-server.vercel.app/my-courses?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
            });
    }, [])

    useEffect(() => {
        fetch(
          `http://localhost:5000/perchased-courses-teacher?email=${user?.email}`
        )
          .then((res) => res.json())
          .then((data) => {
            setPurchasedCourses(data);
          });
    }, [])

    const publish = courses.filter((course) => course.publish === true)
    const pendings = courses.filter((course) => course.publish === false)
    const students = [...new Set(purchasedCourses.map((course) => course.buyerEmail))]
    const prices = purchasedCourses.map((course) => course.price * 1)
    const total = prices.reduce((x, y) => (x + y), 0)

    console.log()
    console.log(students, prices, total)


    return (
        <div className='mx-auto'>
            <h2 className='text-4xl font-bold text-primary text-center my-12'>Welcome to Instructor Dashboard</h2>
            <div className="ml-auto mb-6">
                <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                    <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>

                        <div className="flex space-x-4">

                            <div hidden className="md:block">
                                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                    <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                                        <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 35.997 36.004">
                                            <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                        </svg>
                                    </span>
                                    <input className='w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition' type="search" id='leadingIcon' />
                                </div>
                            </div>

                            <button aria-label="search" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                                <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 mx-auto fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                                    <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                </svg>
                            </button>
                            <button aria-label="chat" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </button>
                            <button aria-label="notification" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </button>

                            <div className='ml-24'>
                                {(location.pathname === "/dashboard" ||
                                    location.pathname.startsWith("/dashboard/")) && (
                                        <div className="drawer-content block lg:hidden">
                                            <label
                                                htmlFor="dashboard-drawer"
                                                className="btn btn-primary drawer-button"
                                            >
                                                <MdOutlineDashboardCustomize className="text-sm text-white" />
                                            </label>
                                        </div>
                                    )}
                            </div>
                        </div>

                    </div>
                </div>


                <div className="px-6 pt-6 2xl:container">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        <div className="w-11/12 max-w-sm  rounded-md shadow-md border border-cyan-500 ">
                            <div className="left-content flex flex-col items-center pb-10">
                                <img className="w-20 h-20 mb-3 rounded-full shadow-lg border border-zinc-50 my-4" src="https://cdn-icons-png.flaticon.com/512/5179/5179450.png" alt='' />
                                <span className="text-black-500 dark:text-gray-400 text-bold font-semibold text-3xl">{pendings.length}</span>
                                <h5 className="mb-1 text-xs font-medium text-gray-900 dark:text-white">Pending Courses</h5>
                            </div>
                        </div>

                        <div className="w-11/12 max-w-sm  rounded-md shadow-md border border-cyan-500 ">
                            <div className="left-content flex flex-col items-center pb-10">
                                <img className="w-20 h-20 mb-3 rounded-full shadow-lg border border-zinc-50 my-4" src="https://cdn-icons-png.flaticon.com/512/9573/9573959.png" alt='' />
                                <span className="text-black-500 dark:text-gray-400 text-bold font-semibold text-3xl">{publish.length}</span>
                                <h5 className="mb-1 text-xs font-medium text-gray-900 dark:text-white">Publish Courses</h5>
                            </div>
                        </div>

                        <div className="w-11/12 max-w-sm  rounded-md shadow-md border border-cyan-500 ">
                            <div className="left-content flex flex-col items-center pb-10">
                                <img className="w-20 h-20 mb-3 rounded-full shadow-lg border border-zinc-50 my-4" src="https://cdn-icons-png.flaticon.com/512/906/906334.png" alt='' />
                                <span className="text-black-500 dark:text-gray-400 text-bold font-semibold text-3xl">{courses.length}</span>
                                <h5 className="mb-1 text-xs font-medium text-gray-900 dark:text-white">Total Courses</h5>
                            </div>
                        </div>

                        <div className="w-11/12 max-w-sm  rounded-md shadow-md border border-cyan-500 ">
                            <div className="left-content flex flex-col items-center pb-10">
                                <img className="w-20 h-20 mb-3 rounded-full shadow-lg border border-zinc-50 my-4" src="https://cdn-icons-png.flaticon.com/512/2501/2501026.png" alt='' />
                                <span className="text-black-500 dark:text-gray-400 text-bold font-semibold text-3xl">{students.length}</span>
                                <h5 className="mb-1 text-xs font-medium text-gray-900 dark:text-white">Total Students</h5>
                            </div>
                        </div>

                        <div className="w-11/12 max-w-sm  rounded-md shadow-md border border-cyan-500 ">
                            <div className="left-content flex flex-col items-center pb-10">
                                <img className="w-20 h-20 mb-3 rounded-full shadow-lg border border-zinc-50 my-4" src="https://cdn-icons-png.flaticon.com/512/9084/9084691.png" alt='' />
                                <span className="text-black-500 dark:text-gray-400 text-bold font-semibold text-3xl">{total}</span>
                                <h5 className="mb-1 text-xs font-medium text-gray-900 dark:text-white">Total Earnings</h5>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;