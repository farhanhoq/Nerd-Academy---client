import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
import ScrollToTop from '../ScrollToTop';

const BlogDetails = () => {
    const data = useLoaderData();
    const {about, authorImg, date, heading, name, picture } = data[0];
    // console.log(name);
    const { loading } = useContext(AuthContext);

    if(loading){
        return <Loader></Loader>
    }

    return (    
        <div>
            <ScrollToTop/>
            <div className='w-9/12 mx-auto py-40'>
                <h1 className='mb-20 font-bold text-3xl qtext-primary'>{heading}</h1>
                <div className='flex mb-8'>
                    <img className='w-24 rounded-full' src={authorImg} alt="" />
                    <div className='pl-1'>
                        <h4 className='text-primary text-xl font-bold pt-4 p-1'>{name}</h4>
                        <p className='pl-4 underline'>{date}</p>
                    </div>
                </div>
                <img src={picture} className="rounded-lg" alt="" />
                <p className='text-xl mt-10'>{about}</p>
            </div>
        </div>
    );
};

export default BlogDetails;