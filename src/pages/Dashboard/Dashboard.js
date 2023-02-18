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
    }, [user?.email])

    useEffect(() => {
        fetch(
            `https://nerd-academy-server.vercel.app/perchased-courses-teacher?email=${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                setPurchasedCourses(data);
            });
    }, [user?.email])

    const publish = courses.filter((course) => course.publish === true)
    const pendings = courses.filter((course) => course.publish === false)
    const students = [...new Set(purchasedCourses.map((course) => course.buyerEmail))]
    const prices = purchasedCourses.map((course) => course.price * 1)
    const total = prices.reduce((x, y) => (x + y), 0)

    console.log()
    console.log(students, prices, total)


    return (
        <div className='mx-auto mt-10'>
            <div className="ml-auto mb-6">
                <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                    <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>

                        <div className="flex space-x-4">

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