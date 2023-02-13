import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Loader/Loader';

const DasboardReview = () => {

    // const [reviewData, setReviewData] = useState([]);
    const { user, loading } = useContext(AuthContext);
    console.log(user);

    // useEffect(() => {
    //     fetch(`https://nerd-academy-server.vercel.app/review?email=${user?.email}`)
    //         .then((res) => res.json())
    //         .then((data) => setReviewData(data));
    // }, []);
    const { data: reviewData = [], isLoading, refetch } = useQuery({
        queryKey: ['reviewData'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://nerd-academy-server.vercel.app/das-review?email=${user?.email}`);
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    });

    console.log(reviewData);
    refetch();
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='my-12'>
            <h2 className="text-3xl font-bold">Testimonial</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {
                    reviewData.map(data => <div className="">
                        <div className="divider"></div>
                        <div className='flex pb-5 '>
                            <img className='w-12 h-12 rounded-full' src={data?.picture} alt="" />
                            <div className='pl-2'>
                                <h4 className='text-lg font-bold '>{data?.name}</h4>
                                <p className='pl-1 text-sm'>{data?.date}</p>
                            </div>
                        </div>
                        <p>{data?.review}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default DasboardReview;