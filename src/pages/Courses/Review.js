import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Loader/Loader";

const Review = ({ email, courseId }) => {

    // const [reviewData, setReviewData] = useState([]);
    // const { loading } = useContext(AuthContext);

    const { data: reviewData = [], isLoading, refetch } = useQuery({
        queryKey: ['reviewData'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://nerd-academy-server.vercel.app/review?email=${email}&courseId=${courseId}`);
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    });

    // useEffect(() => {
    //     fetch('https://nerd-academy-server.vercel.app/review')
    //         .then((res) => res.json())
    //         .then((data) => setReviewData(data));
    // }, []);
    console.log(reviewData);
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
                            <h4 className='text-lg font-bold '>{data?.userName}</h4>
                            <p className='pl-1 text-sm'>{data?.date}</p>
                        </div>
                    </div>
                    <p>{data?.review}</p>
                </div>)
            }
        </div>
    );
};

export default Review;
