import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import userImg from '../../../Assets/user.png'
import { AuthContext } from '../../../Context/AuthProvider';

const StudentOrderHistory = () => {

    const {user} = useContext(AuthContext);
    const {
        data: studentCheckoutData = []
      } = useQuery({
        queryKey: ['studentCheckoutData'],
        queryFn: () => fetch(`https://nerd-academy-server.vercel.app/student-order-history/${user?.email}`).then(res => res.json()),
      });
      console.log(studentCheckoutData);

    return (
        <div>
        <div className=" card my-20">
            <div className="container mx-auto">
                <div className="px-4 py-2">
                    <div className="text-4xl font-bold">
                        Order History
                    </div>
                </div>
                <div className="mt-6 overflow-x-auto">
                    <table className="w-full border border-collapse table-auto">
                        <thead className="">
                            <tr className="text-base font-bold text-left bg-gray-50">
                                <th className="px-4 py-3 border-b-2 border-blue-500">Student</th>
                                <th className="px-4 py-3 border-b-2 border-green-500">Course Name</th>
                                <th className="px-4 py-3 border-b-2 border-cyan-500">Price</th>
                                <th className="px-4 py-3 border-b-2 border-red-500">Order No</th>
                                <th className="px-4 py-3 text-center border-b-2 border-yellow-500 sm:text-left">Purchased On</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-normal text-gray-700">
                            {
                                studentCheckoutData.map(order => 
                                <tr className="py-10 border-b border-gray-200 hover:bg-gray-100">
                                <td className="flex flex-row items-center px-4 py-4">
                                    <div className="flex w-10 h-10 mr-4">
                                        <a href="/" className="relative block">
                                            <img alt="profil" src={userImg} className="object-cover w-10 h-10 mx-auto rounded-md" />
                                        </a>
                                    </div>
                                    <div className="flex-1 pl-1">
                                        <div className="font-medium">{order?.userName}</div>
                                        <div className="text-sm text-blue-600 ">
                                            {order?.userEmail}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    {order?.title}
                                </td>
                                <td className="px-4 py-4">
                                    ${order?.price}
                                </td>
                                <td className="px-4 py-4">
                                    {order?.transactionId}
                                </td>
                                <td className="px-4 py-4">
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