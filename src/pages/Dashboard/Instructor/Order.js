import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Order = () => {
    const { user } = useContext(AuthContext);
    const {
        data: checkoutData = [],
    } = useQuery({
        queryKey: ['checkoutData'],
        queryFn: () => fetch(`https://nerd-academy-server.vercel.app/teacher-order-history?email=${user?.email}`).then(res => res.json()),
    });
    console.log(checkoutData);

    return (
        <div>
            <div className=" card my-12 bg-base-100 shadow-xl dark:bg-accent dark:text-white">
                <div className="container mx-auto ">
                    <div className="flex justify-between w-full px-4 py-2">
                        <div className="text-lg font-bold">
                            Order History
                        </div>
                        <div className="px-2 py-2 text-white bg-gradient-to-r from-primary to-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full border border-collapse table-auto">
                            <thead>
                                <tr className="text-base font-bold text-left bg-gray-50 dark:bg-accent dark:text-white">
                                    <th className="px-4 py-3 border-b-2 border-primary">Student</th>
                                    <th className="px-4 py-3 border-b-2 border-secondary">Course Name</th>
                                    <th className="px-4 py-3 border-b-2 border-primary">Price</th>
                                    <th className="px-4 py-3 border-b-2 border-secondary">Order No</th>
                                    <th className="px-4 py-3 text-center border-b-2 border-primary sm:text-left">Purchased On</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-normal text-gray-700 dark:text-white">
                                {
                                    checkoutData?.map(data => <tr className="py-10 border-b border-gray-200 hover:bg-gray-100">
                                        <td className="flex flex-row items-center px-4 py-4">
                                            <div className="flex w-10 h-10 mr-4">
                                                <a href="/" className="relative block">
                                                    <img alt="profil" src={data?.picture} className="object-cover w-10 h-10 mx-auto rounded-md" />
                                                </a>
                                            </div>
                                            <div className="flex-1 pl-1">
                                                <div className="font-medium dark:text-white">{data?.userName}</div>
                                                <div className="text-sm text-blue-600 ">
                                                    {data?.userEmail}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 dark:text-white">
                                            {data?.title}
                                        </td>
                                        <td className="px-4 py-4 dark:text-white">
                                            {data?.price}
                                        </td>
                                        <td className="px-4 py-4 dark:text-white">
                                            {data?.transactionId}
                                        </td>
                                        <td className="px-4 py-4 dark:text-white">
                                            {data?.date}
                                        </td>
                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Order;