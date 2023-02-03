import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
// import { FaReact } from 'react-icons/fa';
// import { RiDeleteBack2Line } from 'react-icons/ri';
import { AuthContext } from '../../../Context/AuthProvider';
import CoursesTable from './CoursesTable';

const Courses = () => {

    const { user } = useContext(AuthContext);

    const { data: myCourse = [], refetch } = useQuery({
        queryKey: ['myCourse'],
        queryFn: async () => {
            const res = await fetch(`https://nerd-academy-server.vercel.app/my-courses?email=${user?.email}`, {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            })

            const data = await res.json();
            return data;
        }
    });



    return (
        <div class="min-w-screen text-gray-600 w-full my-6">
            <div class="flex flex-col justify-center h-full">
                <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200 p-4">
                    <header class="px-5 py-4 border-b border-gray-100">
                        <h2 class="font-semibold text-gray-800">Courses Approved / Delete</h2>
                    </header>
                    <div class="bg-white shadow-md rounded my-6">
                        <table class="min-w-max w-full table-auto">

                            <thead>
                                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th class="py-3 px-6 text-left">Category</th>
                                    <th class="py-3 px-6 text-left">Instructor</th>
                                    <th class="py-3 px-6 text-center">Email</th>
                                    <th class="py-3 px-6 text-center">Details</th>
                                    <th class="py-3 px-6 text-center">Status</th>
                                    <th class="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            {
                                myCourse.map((course) => <CoursesTable
                                    key={course._id}
                                    course={course}
                                    refetch={refetch}
                                ></CoursesTable>)
                            }
                            {/* <tbody class="text-gray-600 text-sm font-light">
                                <tr class="border-b border-gray-200 hover:bg-gray-100">
                                    <td class="py-3 px-6 text-left whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <FaReact />
                                            </div>
                                            <span class="font-medium">React Developer</span>
                                        </div>
                                    </td>

                                    <td class="py-3 px-6 text-left">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                            </div>
                                            <span>Eshal Rosas</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <p>demo@gmail.com</p>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <span class="bg-primary cursor-pointer text-white py-1 px-3 rounded-full">Approved</span>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <div class="flex item-center justify-center">
                                            <div class="text-xl cursor-pointer w-4 mr-2 transform hover:text-error hover:scale-110">
                                                <RiDeleteBack2Line></RiDeleteBack2Line>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody> */}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;