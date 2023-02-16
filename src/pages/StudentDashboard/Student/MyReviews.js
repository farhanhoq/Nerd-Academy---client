import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { useForm } from "react-hook-form";
import ModalReview from './ModalReview';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const MyReviews = () => {
    const { user } = useContext(AuthContext);

    const [modalReviews, setModalReviews] = useState({});

    const { data: reviews = [], refetch, isLoading } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await fetch(`https://nerd-academy-server.vercel.app/studentsReviews?email=${user?.email}`);
            const data = await res.json();
            return data;
        }

    })
    refetch();

    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/review/${id}`, {
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
        <div className='my-12'>
            <h2 className="card-title">My Reviews</h2>
            <hr className='my-2' />

            <div class="card my-6 bg-base-100 shadow-xl">
                {
                    reviews.map(review => <section class="p-6 md:p-12 text-center md:text-left shadow-lg rounded-md">
                        <div class="flex justify-center">
                            <div class="max-w-xl">
                                <div class="block p-6 rounded-lg shadow-sm bg-white m-4">
                                    <div class="md:flex md:flex-row">
                                        <div
                                            class="md:w-80 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0"
                                        >
                                            <img
                                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                                                class="rounded-full shadow-md w-20 h-20"
                                                alt="woman avatar"
                                            />
                                        </div>
                                        <div class="md:mr-10">
                                            <div>
                                                <p class="text-gray-500 font-light mb-6">
                                                    {review?.review}
                                                </p>

                                                <div className='flex justify-between'>
                                                    <div>
                                                        <p class="font-semibold text-xl mb-2 text-gray-800">{review?.title}</p>
                                                        <p class="font-semibold text-gray-500 mb-0">{review?.userEmail}</p>
                                                        <p class="text-gray-500 font-light">{review?.date}</p>

                                                    </div>
                                                    <div className="flex items-center justify-end space-x-3.5 rounded-lg ml-12">

                                                        <label
                                                            onClick={() => setModalReviews(review)}
                                                            htmlFor="my-modal" className="text-sm btn btn-sm bg-gradient-to-r from-sky-600 to-cyan-400 text-white">Edit</label>

                                                        <Link onClick={() => deleteProduct(review._id)}><button class="items-center px-2 py-2 text-white bg-red-500 dark:bg-gray-500 rounded-md hover:bg-red-600 dark:hover:bg-gray-600 focus:outline-none">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                            </svg>
                                                        </button></Link>



                                                    </div>




                                                </div>


                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </section>)
                }



            </div>
            {
                modalReviews &&
                <ModalReview review={modalReviews} setModalReviews={setModalReviews} refetch />
            }


        </div>
    );
};

export default MyReviews;