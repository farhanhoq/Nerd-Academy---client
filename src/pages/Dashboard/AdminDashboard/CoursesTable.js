import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import SuggestEditModal from './SuggestEditModal';

const CoursesTable = ({ course, refetch }) => {
    const [courseId, setCourseId] = useState('')

    const { _id, category, description, email, picture, tutor, title, postingDate, publish } = course;
    // console.log(course);


    // const deleteProduct = (id) => {
    //     fetch(`https://nerd-academy-server.vercel.app/deleteCourse/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.acknowledged) {
    //                 refetch();
    //                 toast.error("Deleted Item Successfully");
    //             }
    //         })
    // };

    const handelApprove = id => {
        fetch(`https://nerd-academy-server.vercel.app/courses/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Make Verifiy Successful.');
                    refetch();
                }
            })

        fetch(`https://nerd-academy-server.vercel.app/users-publish-increase?email=${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            }
        })
            .then((res) => res.json())


    };



    return (

        <tbody className="text-gray-600 text-sm font-light">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="mr-2">
                            {/* <FaReact /> */}
                            <img className='w-4' src={picture} alt="pic" />
                        </div>
                        <span className="font-medium">{category}</span>
                    </div>
                </td>

                <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                        <div className="mr-2">
                            <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                        </div>
                        <span>{tutor}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <p>{email}</p>
                </td>
                <td className="py-3 px-6 text-center ">
                    <Link to={`/details/${course._id}`} className="text-sm btn btn-xs bg-transparent text-black border-primary border transition ease-in-out duration-300
                             hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary ">
                        View More
                    </Link>
                </td>
                {
                    publish === true ? <td className="py-3 px-6 text-center">
                        <button onClick={() => handelApprove(course._id)}><span className="bg-green-600 cursor-pointer text-white py-1 px-3 rounded-full">Approved</span></button>
                    </td>
                        :
                        <td className="py-3 px-6 text-center">
                            <button onClick={() => handelApprove(course._id)}><span className="bg-gradient-to-r from-primary to-secondary cursor-pointer text-white py-1 px-3 rounded-full">Approve</span></button>
                        </td>

                }

                <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                        <div className="text-xl cursor-pointer w-4 mr-2 transform hover:text-error hover:scale-105">
                            <label
                                onClick={() => setCourseId(_id)}
                                htmlFor="admin-modal"
                                className="btn btn-sm text-xs">
                                Suggest edit
                            </label>
                            {/* {console.log()} */}
                            <SuggestEditModal courseId={_id}></SuggestEditModal>
                        </div>
                    </div>
                </td>

            </tr>
        </tbody>


    );
};

export default CoursesTable;