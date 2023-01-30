import React, { useState , useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Loader/Loader";

const Review = () => {

    const [reviewData, setReviewData] = useState([]);
    const { loading } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://nerd-academy-server.vercel.app/review')
            .then((res) => res.json())
            .then((data) => setReviewData(data));
    }, []);
    // console.log(reviewData);
   if(loading){
    return <Loader></Loader>
   }
    return (
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
                    <p>{data?.about}</p>
                </div>)
            }
        </div>
    );
};

export default Review;
