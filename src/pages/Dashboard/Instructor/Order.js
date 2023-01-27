import React from 'react';

const Order = () => {
    return (
        <div>
            <div class=" card my-12 bg-base-100 shadow-xl">
                <div class="container mx-auto">
                    <div class="flex justify-between w-full px-4 py-2">
                        <div class="text-lg font-bold">
                            Order History
                        </div>
                        <div class="px-2 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                        </div>
                    </div>
                    <div class="mt-6 overflow-x-auto">
                        <table class="w-full border border-collapse table-auto">
                            <thead class="">
                                <tr class="text-base font-bold text-left bg-gray-50">
                                    <th class="px-4 py-3 border-b-2 border-blue-500">Student</th>
                                    <th class="px-4 py-3 border-b-2 border-green-500">Course Name</th>
                                    <th class="px-4 py-3 border-b-2 border-cyan-500">Price</th>
                                    <th class="px-4 py-3 border-b-2 border-red-500">Order No</th>
                                    <th class="px-4 py-3 text-center border-b-2 border-yellow-500 sm:text-left">Purchased On</th>
                                </tr>
                            </thead>
                            <tbody class="text-sm font-normal text-gray-700">
                                <tr class="py-10 border-b border-gray-200 hover:bg-gray-100">
                                    <td class="flex flex-row items-center px-4 py-4">
                                        <div class="flex w-10 h-10 mr-4">
                                            <a href="#" class="relative block">
                                                <img alt="profil" src="https://images.unsplash.com/photo-1560329072-17f59dcd30a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="object-cover w-10 h-10 mx-auto rounded-md" />
                                            </a>
                                        </div>
                                        <div class="flex-1 pl-1">
                                            <div class="font-medium">Barbara Curtis</div>
                                            <div class="text-sm text-blue-600 ">
                                                Account Deactivated
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4">
                                        Web Development
                                    </td>
                                    <td class="px-4 py-4">
                                        $1500
                                    </td>
                                    <td class="px-4 py-4">
                                        MX-8523537435
                                    </td>
                                    <td class="px-4 py-4">
                                        Just Now
                                    </td>
                                </tr>
                                <tr class="py-10 border-b border-gray-200 hover:bg-gray-100">
                                    <td class="flex flex-row items-center px-4 py-4">
                                        <div class="flex w-10 h-10 mr-4">
                                            <a href="#" class="relative block">
                                                <img alt="profil" src="https://images.unsplash.com/photo-1571395443367-8fbb3962e48f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1lbiUyMGZhY2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="object-cover w-10 h-10 mx-auto rounded-md" />
                                            </a>
                                        </div>
                                        <div class="flex-1 pl-1">
                                            <div class="font-medium">Charlie Hawkins</div>
                                            <div class="text-sm text-green-600 ">
                                                Email Verified
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4">
                                        Apps Development
                                    </td>
                                    <td class="px-4 py-4">
                                        $1100
                                    </td>
                                    <td class="px-4 py-4">
                                        MX-9537537436
                                    </td>
                                    <td class="px-4 py-4">
                                        Mar 04, 2018 11:37am
                                    </td>
                                </tr>
                                <tr class="py-10 border-b border-gray-200 hover:bg-gray-100">
                                    <td class="flex flex-row items-center px-4 py-4">
                                        <div class="flex w-10 h-10 mr-4">
                                            <a href="#" class="relative block">
                                                <img alt="profil" src="https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZlbWFsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" class="object-cover w-10 h-10 mx-auto rounded-md" />
                                            </a>
                                        </div>
                                        <div class="flex-1 pl-1">
                                            <div class="font-medium ">Nina Bates</div>
                                            <div class="text-sm text-yellow-600">
                                                Payment On Hold
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4">
                                        Machine Learning
                                    </td>
                                    <td class="px-4 py-4">
                                        $2200
                                    </td>
                                    <td class="px-4 py-4">
                                        MX-7533567437
                                    </td>
                                    <td class="px-4 py-4">
                                        Mar 13, 2018 9:41am
                                    </td>
                                </tr>
                                <tr class="py-10 border-b border-gray-200 hover:bg-gray-100">
                                    <td class="flex flex-row items-center px-4 py-4">
                                        <div class="flex w-10 h-10 mr-4">
                                            <a href="#" class="relative block">
                                                <img alt="profil" src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMGZhY2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="object-cover w-10 h-10 mx-auto rounded-md" />
                                            </a>
                                        </div>
                                        <div class="flex-1 pl-1">
                                            <div class="font-medium ">Hester Richards</div>
                                            <div class="text-sm text-green-600 ">
                                                Email Verified
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4">
                                        Artificial Intelligence
                                    </td>
                                    <td class="px-4 py-4">
                                        $1000
                                    </td>
                                    <td class="px-4 py-4">
                                        MX-5673467743
                                    </td>
                                    <td class="px-4 py-4">
                                        Feb 21, 2018 8:34am
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex flex-col items-center w-full px-4 py-2 space-y-2 text-sm text-gray-500 sm:justify-between sm:space-y-0 sm:flex-row">
                        <p class="flex">Showing&nbsp;<span class="font-bold"> 1 to 4 </span>&nbsp;of 8 entries</p>
                        <div class="flex items-center justify-between space-x-2">
                            <a href="#" class="hover:text-gray-600">Previous</a>
                            <div class="flex flex-row space-x-1">
                                <div class="flex px-2 py-px text-white bg-blue-400 border border-blue-400">1</div>
                                <div class="flex px-2 py-px border border-blue-400 hover:bg-blue-400 hover:text-white">2</div>
                            </div>
                            <a href="#" class="hover:text-gray-600">Next</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Order;