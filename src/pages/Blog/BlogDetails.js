import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
import ScrollToTop from '../ScrollToTop';
import parse from 'html-react-parser';

const BlogDetails = () => {
    const data = useLoaderData();
    const { name, title, date, writerImage, blogImage, blogDetails } = data[0];
    // console.log(name);
    const { loading, user } = useContext(AuthContext);

    const { data: usersData = [], refetch, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await fetch(`https://nerd-academy-server.vercel.app/users/?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    // const { _id } = users;
    refetch();
    // console.log(usersData);

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <ScrollToTop />
            <div className='w-9/12 mx-auto py-40'>
                <h1 className='mb-20 font-bold text-3xl qtext-primary'>{title}</h1>
                <div className='flex mb-8'>
                    <img className='w-20 h-16 rounded-full' src={usersData?.body?.picture} alt="" />
                    <div className='pl-1'>
                        <h4 className='text-primary text-xl font-bold pt-4 p-1'>{name}</h4>
                        <p className='pl-4 underline'>{date}</p>
                    </div>
                </div>
                <img src={blogImage} className="rounded-lg" alt="" />
                <p className='text-xl mt-10'>{parse(blogDetails)}</p>
            </div>
        </div>
    );
};

export default BlogDetails;