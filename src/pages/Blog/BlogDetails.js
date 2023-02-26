import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
import ScrollToTop from '../ScrollToTop';
import parse from 'html-react-parser';
import useProfileAPI from "../../Hooks/useProfileAPI"

const BlogDetails = () => {
    const data = useLoaderData();
    const { name, title, date, blogImage, blogDetails } = data[0];
    const { loading, user } = useContext(AuthContext);

    const url = "https://nerd-academy-server.vercel.app/users"
    const query = user?.email
    const queryName = "email"

    const { datas } = useProfileAPI(url, queryName, query)
    console.log(datas)

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <ScrollToTop />
            <div className='w-9/12 mx-auto py-40'>
                <h1 className='mb-20 font-bold text-3xl text-primary dark:text-white'>{title}</h1>
                <div className='flex mb-8'>
                    <img className='w-20 h-16 rounded-full' src={datas?.picture} alt="" />
                    <div className='pl-1'>
                        <h4 className='text-primary dark:text-white text-xl font-bold pt-4 p-1'>{name}</h4>
                        <p className='pl-4 underline dark:text-white'>{date}</p>
                    </div>
                </div>
                <img src={blogImage} className="rounded-lg" alt="" />
                <p className='text-xl mt-10 bg-white dark:bg-accent'>{parse(blogDetails)}</p>
            </div>
        </div>
    );
};

export default BlogDetails;