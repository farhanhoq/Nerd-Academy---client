import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { GiCrossMark } from 'react-icons/gi';


const AllInstructor = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await fetch(`https://nerd-academy-server.vercel.app/all-users`);
            const data = await res.json();
            return data;
        }
    })
    refetch();

    const handleDelete = (id) => {
        fetch(`https://nerd-academy-server.vercel.app/del-users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.error('Teacher Deleted');
                refetch();
            })
    };

    // const { data: courses = [] } = useQuery({
    //     queryKey: ["courses"],
    //     queryFn: async () => {
    //         const res = await fetch(`https://nerd-academy-server.vercel.app/courses`);
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    // console.log(courses);

    return (
        <section className="min-w-screen min-h-screen text-gray-600 w-full my-6">
            <div className="flex flex-col justify-center h-full">
                <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-800 text-2xl">Instructors</h2>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Category</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Instructors</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Email</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Actions</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    {
                                        users.map(user => user.role === "teacher" &&
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-medium text-gray-800">{user?.body?.skill}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                            <img className="rounded-full h-8 w-10" src={user?.body?.picture} alt="Student" />
                                                        </div>
                                                        <div className="font-medium text-gray-800">{user.name}</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">{user.email}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <button
                                                        onClick={() => handleDelete(user._id)}
                                                        className="btn btn-error text-white btn-xs"> <GiCrossMark></GiCrossMark> </button>
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
        </section>
    );
};

export default AllInstructor;