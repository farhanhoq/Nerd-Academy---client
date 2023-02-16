import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import userImg from '../../../Assets/user.png'
import { AuthContext } from '../../../Context/AuthProvider';

const StudentOrderHistory = () => {


    // const { data: orders = [], isLoading, refetch } = useQuery({
    //     queryKey: ['orders'],
    //     queryFn: () => fetch('https://nerd-academy-server.vercel.app/order-history')
    //       .then(res => res.json())
    //   });
    //   console.log(orders);

    const {user} = useContext(AuthContext);
    const {
        data: studentCheckoutData = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ['studentCheckoutData'],
        queryFn: () => fetch(`https://nerd-academy-server.vercel.app/student-order-history?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return data;
            })
      });
      console.log(studentCheckoutData);

    return (
        <div>
        <div class=" card my-20">
            <div class="container mx-auto">
                <div class="px-4 py-2">
                    <div class="text-4xl font-bold">
                        Order History
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
                                studentCheckoutData.map(order => 
                                <tr class="py-10 border-b border-gray-200 hover:bg-gray-100">
                                <td class="flex flex-row items-center px-4 py-4">
                                    <div class="flex w-10 h-10 mr-4">
                                        <a href="#" class="relative block">
                                            <img alt="profil" src={userImg} class="object-cover w-10 h-10 mx-auto rounded-md" />
                                        </a>
                                    </div>
                                    <div class="flex-1 pl-1">
                                        <div class="font-medium">{order?.userName}</div>
                                        <div class="text-sm text-blue-600 ">
                                            {order?.userEmail}
                                        </div>
                                    </div>
                                </td>
                                <td class="px-4 py-4">
                                    {order?.title}
                                </td>
                                <td class="px-4 py-4">
                                    ${order?.price}
                                </td>
                                <td class="px-4 py-4">
                                    {order?.transactionId}
                                </td>
                                <td class="px-4 py-4">
                                    {order?.date}
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

export default StudentOrderHistory;