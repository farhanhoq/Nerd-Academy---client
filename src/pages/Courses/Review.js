import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../Loader/Loader";

const Review = ({ courseId }) => {

    const { data: reviewData = [], isLoading, refetch } = useQuery({
        queryKey: ['reviewData'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://nerd-academy-server.vercel.app/review?courseId=${courseId}`);
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    });

    if (isLoading) {
        return <Loader></Loader>
    }
    refetch();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {
                reviewData.map(data => <div className="">
                    <div className="divider"></div>
                    <div className='flex pb-5 '>
                        <img className='w-12 h-12 rounded-full' src={data?.picture} alt="" />
                        <div className='pl-2'>
                            <h4 className='text-lg font-bold dark:text-white'>{data?.userName}</h4>
                            <p className='pl-1 text-sm dark:text-white'>{data?.date}</p>
                        </div>
                    </div>
                    <p className="dark:text-white">{data?.review}</p>
                </div>)
            }
        </div>
    );
};

export default Review;
