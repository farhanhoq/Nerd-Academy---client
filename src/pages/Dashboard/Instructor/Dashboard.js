import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [purchasedCourses, setPurchasedCourses] = useState([]);
    const [countOn, setCountOn] = useState(false);

    
    useEffect(() => {
        fetch(`https://nerd-academy-server.vercel.app/my-courses?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
            });
    }, [user?.email])

    useEffect(() => {
        fetch(
            `https://nerd-academy-server.vercel.app/perchased-courses-teacher?email=${user?.email}`)
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

    return (
        <div className='mx-auto mt-10'>
            <div className="ml-auto mb-6">
                {/* <div className="bg-white">
                    <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <div className="flex space-x-4">
                            <div className='ml-24'>
                                {(location.pathname === "/dashboard" ||
                                    location.pathname.startsWith("/dashboard/")) && (
                                        <div className="drawer-content block lg:hidden">
                                            <label htmlFor="dashboard-drawer"
                                                className="btn btn-primary drawer-button">
                                                <MdOutlineDashboardCustomize className="text-sm text-white" />
                                            </label>
                                        </div>
                                    )}
                            </div>
                        </div>

                    </div>
                </div> */}

                <div className="px-6 pt-6 2xl:container">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="w-11/12 max-w-sm  rounded-md shadow-md border border-primary">
                            <div className="left-content flex flex-col items-center pb-10">
                                <img className="w-20 h-20 mb-3 rounded-full shadow-lg border
                                 border-zinc-50 my-4" src="https://cdn-icons-png.flaticon.com/512/5179/5179450.png" alt='' />
                                <ScrollTrigger
                                    onEnter={() => setCountOn(true)}
                                    onExit={() => setCountOn(false)}>
                                    <div>
                                        <h1 className="text-black-500 dark:text-gray-400 
                                        text-bold font-semibold text-3xl text-center">
                                            {countOn && (
                                                <CountUp
                                                    start={0}
                                                    end={pendings.length}
                                                    duration={1.3}
                                                    delay={0}
                                                ></CountUp>
                                            )}
                                        </h1>
                                        <h5 className="mb-1 text-xs font-medium text-gray-900
                                 dark:text-white">Pending Courses</h5>
                                    </div>
                                </ScrollTrigger>
                            </div>
                        </div>

                        <div className="w-11/12 max-w-sm  rounded-md shadow-md border border-secondary ">
                            <div className="left-content flex flex-col items-center pb-10">
                                <img className="w-20 h-20 mb-3 rounded-full shadow-lg border border-zinc-50 my-4" src="https://cdn-icons-png.flaticon.com/512/9573/9573959.png" alt='' />
                                <ScrollTrigger
                                    onEnter={() => setCountOn(true)}
                                    onExit={() => setCountOn(false)}>
                                    <div>
                                        <h1 className="text-black-500 dark:text-gray-400 
                                        text-bold font-semibold text-3xl text-center">
                                            {countOn && (
                                                <CountUp
                                                    start={0}
                                                    end={publish.length}
                                                    duration={1.3}
                                                    delay={0}
                                                ></CountUp>
                                            )}
                                        </h1>
                                        <h5 className="mb-1 text-xs font-medium text-gray-900
                                 dark:text-white">Publish Courses</h5>
                                    </div>
                                </ScrollTrigger>
                            </div>
                        </div>

                        <div className="w-11/12 max-w-sm  rounded-md shadow-md border border-primary ">
                            <div className="left-content flex flex-col items-center pb-10">
                                <img className="w-20 h-20 mb-3 rounded-full shadow-lg border border-zinc-50 my-4" src="https://cdn-icons-png.flaticon.com/512/906/906334.png" alt='' />
                                <ScrollTrigger
                                    onEnter={() => setCountOn(true)}
                                    onExit={() => setCountOn(false)}>
                                    <div>
                                        <h1 className="text-black-500 dark:text-gray-400 
                                        text-bold font-semibold text-3xl text-center">
                                            {countOn && (
                                                <CountUp
                                                    start={0}
                                                    end={courses.length}
                                                    duration={1.3}
                                                    delay={0}
                                                ></CountUp>
                                            )}
                                        </h1>
                                        <h5 className="mb-1 text-xs font-medium text-gray-900
                                 dark:text-white">Total Courses</h5>
                                    </div>
                                </ScrollTrigger>
                            </div>
                        </div>

                        <div className="w-11/12 max-w-sm  rounded-md shadow-md border border-secondary ">
                            <div className="left-content flex flex-col items-center pb-10">
                                <img className="w-20 h-20 mb-3 rounded-full shadow-lg border border-zinc-50 my-4" src="https://cdn-icons-png.flaticon.com/512/2501/2501026.png" alt='' />
                                <ScrollTrigger
                                    onEnter={() => setCountOn(true)}
                                    onExit={() => setCountOn(false)}>
                                    <div>
                                        <h1 className="text-black-500 dark:text-gray-400 
                                        text-bold font-semibold text-3xl text-center">
                                            {countOn && (
                                                <CountUp
                                                    start={0}
                                                    end={students.length}
                                                    duration={1.3}
                                                    delay={0}
                                                ></CountUp>
                                            )}
                                        </h1>
                                        <h5 className="mb-1 text-xs font-medium text-gray-900
                                 dark:text-white">Total Students</h5>
                                    </div>
                                </ScrollTrigger>
                            </div>
                        </div>

                        <div className="w-11/12 max-w-sm  rounded-md shadow-md border border-primary ">
                            <div className="left-content flex flex-col items-center pb-10">
                                <img className="w-20 h-20 mb-3 rounded-full shadow-lg border border-zinc-50 my-4" src="https://cdn-icons-png.flaticon.com/512/9084/9084691.png" alt='' />
                                <ScrollTrigger
                                    onEnter={() => setCountOn(true)}
                                    onExit={() => setCountOn(false)}>
                                    <div>
                                        <h1 className="text-black-500 dark:text-gray-400 
                                        text-bold font-semibold text-3xl text-center">
                                            {countOn && (
                                                <CountUp
                                                    start={0}
                                                    end={total.toFixed(2)}
                                                    duration={1.3}
                                                    delay={0}
                                                ></CountUp>
                                            )}
                                        </h1>
                                        <h5 className="mb-1 text-xs font-medium text-gray-900
                                 dark:text-white">Total Earnings</h5>
                                    </div>
                                </ScrollTrigger>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;