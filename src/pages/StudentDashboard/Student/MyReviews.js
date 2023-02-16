import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import ModalReview from './ModalReview';
import { useQuery } from '@tanstack/react-query';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [modalReviews, setModalReviews] = useState({});

    const { data: reviews = [], refetch } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await fetch(`https://nerd-academy-server.vercel.app/studentsReviews?email=${user?.email}`);
            const data = await res.json();
            return data;
        }

    })
    refetch();


    return (
        <div className='my-12'>
            <h2 className="card-title">My Reviews</h2>
            <hr className='my-2' />

            <div class="card my-6 bg-base-100 shadow-xl">
                {
                    reviews.map(review => <section class="p-6 md:p-12 text-center md:text-left shadow-lg rounded-md">
                        <div class="flex justify-center">
                            <div class="max-w-xl">
                                <div class="block p-6 rounded-lg shadow-md bg-white m-4">
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
                                                        <p class="text-gray-500 font-light">{review._id}</p>
                                                    </div>
                                                    <div className="flex items-center justify-end space-x-3.5 rounded-lg ml-12">

                                                        <label
                                                            onClick={() => setModalReviews(review)}
                                                            htmlFor="my-modal" className="text-sm btn btn-sm bg-gradient-to-r from-sky-600 to-cyan-400 text-white">Edit</label>



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