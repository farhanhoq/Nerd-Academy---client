import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { MdOutlineDashboardCustomize } from 'react-icons/md';

const Dashboard = () => {
    const [dashboard, setDashboards] = useState([]);
    const location = useLocation();
    // console.log(location.pathname);

    useEffect(() => {
        fetch('dashboard.json')
            .then(res => res.json())
            .then(data => {
                setDashboards(data)
            })
    }, []);
    return (
        <div className='mx-auto'>
            <h2 className='text-4xl font-bold text-primary text-center my-6'>Welcome to My Dashboard</h2>
            <div class="ml-auto mb-6">
                <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                    <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>

                        {/* <button class="w-12 h-16 -mr-2 border-r lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button> */}

                        <div>
                            {
                                ((location.pathname === '/dashboard') || (location.pathname.startsWith('/dashboard/'))) &&

                                <div className="drawer-content block lg:hidden">
                                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button"><MdOutlineDashboardCustomize className='text-2xl text-white' /></label>
                                </div>
                            }
                        </div>



                        <div class="flex space-x-4">

                            <div hidden class="md:block">
                                <div class="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                    <span class="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                                        <svg xmlns="http://ww50w3.org/2000/svg" class="w-4 fill-current" viewBox="0 0 35.997 36.004">
                                            <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                        </svg>
                                    </span>
                                    <input className='w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition' type="search" id='leadingIcon' />
                                </div>
                            </div>

                            <button aria-label="search" class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                                <svg xmlns="http://ww50w3.org/2000/svg" class="w-4 mx-auto fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                                    <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                </svg>
                            </button>
                            <button aria-label="chat" class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </button>
                            <button aria-label="notification" class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>


                <div class="px-6 pt-6 2xl:container">
                    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {
                            dashboard.map(db => <div key={db.id} className="w-11/12 max-w-sm  rounded-md shadow-md border border-cyan-500 ">
                                <div className="flex justify-end px-4 pt-4">


                                </div>
                                <div className="left-content flex flex-col items-center pb-10">
                                    <img className="w-20 h-20 mb-3 rounded-full shadow-lg border border-zinc-50 my-4" src={db.img} alt='' />
                                    <span className="text-black-500 dark:text-gray-400 text-bold font-semibold text-3xl">{db.count}</span>
                                    <h5 className="mb-1 text-xs font-medium text-gray-900 dark:text-white">{db.title}</h5>


                                </div>
                            </div>)
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;