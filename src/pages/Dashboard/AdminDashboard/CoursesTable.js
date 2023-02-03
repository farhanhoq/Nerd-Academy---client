import React from 'react';
import { toast } from 'react-hot-toast';
import { FaReact } from 'react-icons/fa';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CoursesTable = ({ course, refetch }) => {

    const { category, description, email, picture, tutor, title, postingDate } = course;


    const deleteProduct = (id) => {
        fetch(`https://nerd-academy-server.vercel.app/deleteCourse/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                    toast.error("Deleted Item Successfully");
                }
            })
    };

    return (
        <tbody class="text-gray-600 text-sm font-light">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="mr-2">
                            {/* <FaReact /> */}
                            <img className='w-4' src={picture} alt="pic" />
                        </div>
                        <span class="font-medium">{category}</span>
                    </div>
                </td>

                <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                        <div class="mr-2">
                            <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" />
                        </div>
                        <span>{tutor}</span>
                    </div>
                </td>
                <td class="py-3 px-6 text-center">
                    <p>{email}</p>
                </td>
                <td class="py-3 px-6 text-center">
                    <Link to={`/details/${course._id}`} className="text-sm btn btn-xs text-white">
                        View More
                    </Link>
                </td>
                <td class="py-3 px-6 text-center">
                    <span class="bg-primary cursor-pointer text-white py-1 px-3 rounded-full">Approved</span>
                </td>
                <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                        <div class="text-xl cursor-pointer w-4 mr-2 transform hover:text-error hover:scale-110">

                            <Link onClick={() => deleteProduct(course._id)} >
                                <RiDeleteBack2Line></RiDeleteBack2Line>
                            </Link>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default CoursesTable;