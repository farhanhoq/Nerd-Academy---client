import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Loader/Loader';

const DasboardReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    // const { data: reviewData = [], isLoading, refetch } = useQuery({
    //     queryKey: ['reviewData'],
    //     queryFn: async () => {
    //             const res = await fetch(`https://nerd-academy-server.vercel.app/das-review?email=${user?.email}`);
    //             const data = await res.json();
    //             return data;
    //     }
    // });

    useEffect(() => {
    fetch(`https://nerd-academy-server.vercel.app/das-review?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
        setReviews(data);
        });
    }, [user?.email]);

    // console.log(reviewData);
    // if (isLoading) {
    //     return <Loader></Loader>
    // }

    return (
        <div className='my-12'>
            <h2 className="text-3xl font-bold">Testimonial</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {
                    reviews.map(data =>
                        <div className="">
                        <div className='flex pb-5 '>
                            <img className='w-12 h-12 rounded-full' src={data?.picture} alt="" />
                            <div className='pl-2'>
                                <h4 className='text-lg font-bold '>{data?.userName}</h4>
                                <h4 className='text-sm font-bold '>{data?.title}</h4>
                                <p className='pl-1 text-sm'>{data?.date}</p>
                            </div>
                        </div>
                        <p>Review : {data?.review}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default DasboardReview;