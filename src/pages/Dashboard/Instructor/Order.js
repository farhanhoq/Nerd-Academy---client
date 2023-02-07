import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Order = () => {
    const {user} = useContext(AuthContext);
    const {
        data: checkoutData = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ['checkoutData'],
        queryFn: () => fetch(`https://nerd-academy-server.vercel.app/checkout-data/${user?.email}`).then(res => res.json()),
      });
      console.log(checkoutData);

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
                                {
                                    checkoutData?.map(data => <tr class="py-10 border-b border-gray-200 hover:bg-gray-100">
                                    <td class="flex flex-row items-center px-4 py-4">
                                        <div class="flex w-10 h-10 mr-4">
                                            <a href="#" class="relative block">
                                                <img alt="profil" src={data?.picture} class="object-cover w-10 h-10 mx-auto rounded-md" />
                                            </a>
                                        </div>
                                        <div class="flex-1 pl-1">
                                            <div class="font-medium">{data?.userName}</div>
                                            <div class="text-sm text-blue-600 ">
                                                {data?.userEmail}
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4">
                                        {data?.title}
                                    </td>
                                    <td class="px-4 py-4">
                                        {data?.price}
                                    </td>
                                    <td class="px-4 py-4">
                                        {data?.transactionId}
                                    </td>
                                    <td class="px-4 py-4">
                                        {data?.date}
                                    </td>
                                </tr>)
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>
                    {/* <div class="flex flex-col items-center w-full px-4 py-2 space-y-2 text-sm text-gray-500 sm:justify-between sm:space-y-0 sm:flex-row">
                        <p class="flex">Showing&nbsp;<span class="font-bold"> 1 to 4 </span>&nbsp;of 8 entries</p>
                        <div class="flex items-center justify-between space-x-2">
                            <a href="#" class="hover:text-gray-600">Previous</a>
                            <div class="flex flex-row space-x-1">
                                <div class="flex px-2 py-px text-white bg-blue-400 border border-blue-400">1</div>
                                <div class="flex px-2 py-px border border-blue-400 hover:bg-blue-400 hover:text-white">2</div>
                            </div>
                            <a href="#" class="hover:text-gray-600">Next</a>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default Order;