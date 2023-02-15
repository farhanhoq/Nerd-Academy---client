import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { FaReact } from 'react-icons/fa';

const AllInstructor = () => {

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/all-users`);
            const data = await res.json();
            return data;
        }
    })
    refetch();
    // console.log(users?.body?.picture);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/del-users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.error('Teacher Deleted');
                refetch();
            })
    };

    return (
        <section class="min-w-screen min-h-screen text-gray-600 w-full my-6">
            <div class="flex flex-col justify-center h-full">
                <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header class="px-5 py-4 border-b border-gray-100">
                        <h2 class="font-semibold text-gray-800 text-2xl">Instructors</h2>
                    </header>
                    <div class="p-3">
                        <div class="overflow-x-auto">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Category</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Instructors</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Email</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Actions</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">
                                    {
                                        users.map(user => user.role === "teacher" &&
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="font-medium text-gray-800">{user?.body?.skill}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                            <img class="rounded-full h-8 w-10" src={user?.body?.picture} alt="Student" />
                                                        </div>
                                                        <div class="font-medium text-gray-800">{user.name}</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left">{user.email}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <button
                                                        onClick={() => handleDelete(user._id)}
                                                        class="btn btn-error btn-xs">Delete</button>
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