import { useQuery } from '@tanstack/react-query';
import React from 'react';

const StudentAssignment = () => {

    const { data: assignment = [] } = useQuery({
        queryKey: ['assignment'],
        queryFn: () => fetch('https://nerd-academy-server.vercel.app/student-assignment')
          .then(res => res.json())
      });

    return (
        <div className='my-12'>
        <h2 className="card-title">Assignment</h2>
        <hr className='my-2' />
        <div
            className="card my-6 bg-base-100 shadow-xl">
            <div className="flex flex-col md:flex-row">
                <ul className="flex flex-row md:flex-col w-full md:w-1/4 mx-auto py-4 md:py-0 sm:mx-0">
                    <li className="md:inline-flex group rounded w-full">
                        <div
                            className="md:visible invisible flex w-1 group-hover:bg-green-500 dark:group-hover:bg-white scale-y-0 group-hover:scale-100 transition-transform origin-top rounded-full duration-400 ease-in">
                        </div>
                        <a className="flex p-2 text-sm md:text-base font-semibold text-gray-500 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-white"
                            href="/">My tasks</a>
                        <div
                            className="md:invisible flex h-1 group-hover:bg-green-500 dark:group-hover:bg-white scale-x-0 group-hover:scale-100 transition-transform origin-top rounded-full duration-500 ease-out">
                        </div>
                    </li>
                    <li className="md:inline-flex group  rounded w-full">
                        <div
                            className="flex w-1 group-hover:bg-green-500 dark:group-hover:bg-white scale-y-0 group-hover:scale-100 transition-transform origin-top rounded-full duration-400 ease-in">
                        </div>
                        <a className="block p-2 text-sm md:text-base font-semibold text-gray-500 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-white"
                            href="/">All tasks</a>
                        <div
                            className="md:invisible flex h-1 group-hover:bg-green-500 dark:group-hover:bg-white scale-x-0 group-hover:scale-100 transition-transform origin-top rounded-full duration-500 ease-out">
                        </div>
                    </li>
                    <li className="md:inline-flex group  rounded w-full">
                        <div
                            className="flex w-1 group-hover:bg-green-500 dark:group-hover:bg-white scale-y-0 group-hover:scale-100 transition-transform origin-top rounded-full duration-400 ease-in">
                        </div>
                        <a className="block p-2 text-sm md:text-base font-semibold text-gray-500 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-white"
                            href="/">Due today</a>
                        <div
                            className="md:invisible flex h-1 group-hover:bg-green-500 dark:group-hover:bg-white scale-x-0 group-hover:scale-100 transition-transform origin-top rounded-full duration-500 ease-out">
                        </div>
                    </li>
                    <li className="md:inline-flex group  rounded w-full">
                        <div
                            className="flex w-1 group-hover:bg-green-500 dark:group-hover:bg-white scale-y-0 group-hover:scale-100 transition-transform origin-top rounded-full duration-400 ease-in">
                        </div>
                        <a className="block p-2 text-sm md:text-base font-semibold text-gray-500 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-white"
                            href="/">Following</a>
                        <div
                            className="md:invisible flex h-1 group-hover:bg-green-500 dark:group-hover:bg-white scale-x-0 group-hover:scale-100 transition-transform origin-top rounded-full duration-500 ease-out">
                        </div>
                    </li>
                </ul>
                <div className="flex w-full md:w-3/4 ">
                    <table className="w-full table-auto ">
                        <thead className="">
                            <tr
                                className="text-sm font-semibold text-left bg-gray-200 divide-x divide-gray-300 text-gray-400 dark:text-gray-500">
                                <th className="px-4 py-3">Assignment Name</th>
                                <th className="px-4 py-3">Total Mark</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-normal text-gray-700 text-left divide-y">
                            {
                                assignment?.map(data => 
                                    <tr className="py-10 font-medium divide-x group hover:bg-gray-50">
                                <td className="flex-row px-2 py-4 items-center">
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 md:h-5 md:w-5 mr-2 text-green-500 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-gray-700"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <div className="flex text-sm group-hover:text-green-500 dark:text-gray-200 dark:group-hover:text-gray-600">
                                            {data?.name}</div>
                                    </div>
                                </td>
                                
                                <td className="px-4 py-4 items-center">
                                    <button
                                        className="px-2 py-2 bg-red-100 dark:bg-gray-300 rounded text-gray-500 dark:text-gray-600 text-xs font-medium ">{data?.mark}</button>
                                </td>
                                <td className="items-center px-4 py-4">
                                    <div className="font-medium text-sm dark:text-gray-50 dark:group-hover:text-gray-600">{data?.status}</div>
                                </td>
                                <td className="px-4 py-4">
                                    <div
                                        className="flex-col lg:flex-row lg:space-x-2 md:text-left text-center items-center space-y-2 lg:space-y-0">
                                        <button
                                            className="items-center px-2 py-2 text-white bg-blue-500 dark:bg-gray-500 rounded-md hover:bg-blue-600 dark:hover:bg-gray-600 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fill-rule="evenodd"
                                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                        <button
                                            className="items-center px-2 py-2 text-white bg-red-500 dark:bg-gray-500 rounded-md hover:bg-red-600 dark:hover:bg-gray-600 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                                    )
                            }
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
    );
};

export default StudentAssignment;