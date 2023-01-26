import React from 'react';

const Dashboard = () => {
    return (
        <div className='mx-auto'>
            <h2 className='text-4xl font-bold text-primary text-center my-4'>Welcome to My Dashboard</h2>
            <div class="ml-auto mb-6">
                <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                    <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
                        <button class="w-12 h-16 -mr-2 border-r lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
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
                        <div class="md:col-span-2 lg:col-span-1" >
                            <div class="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">

                                <div>
                                    <h5 class="text-xl text-gray-600 text-center">1st Activities</h5>

                                </div>
                                <table class="w-full text-gray-600">

                                </table>
                            </div>
                        </div>
                        <div>
                            <div class="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">

                                <div class="my-8">
                                    <h1 class="text-3xl font-bold text-gray-800">2nd</h1>

                                </div>


                            </div>
                        </div>


                        <div>
                            <div class="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">

                                <div class="mt-6">
                                    <h5 class="text-xl text-gray-700 text-center">3rd</h5>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;