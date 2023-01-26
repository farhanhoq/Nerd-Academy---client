import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {

    const {
        data: blogData = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ['blogData'],
        queryFn: () => fetch('https://nerd-academy-server.vercel.app/blog').then(res => res.json()),
      });
      console.log(blogData);

    return (
        <div className='py-32'>
            <div className='text-center mb-28 mt-10'>
                <h1 className='text-5xl'>BLOGS</h1>
            </div>
            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                    blogData.map(data => <Link to={`/blog/${data._id}`} className="card card-compact bg-base-100 shadow-xl hover:bg-base-200 hover:shadow-2xl">
                            <figure><img className='h-[320px]' src={data?.picture} alt="Shoes" /></figure>
                            <div className="p-4">
                                <h2 className="card-title text-2xl text-primary">{data?.heading}...</h2>
                                <p className='text-lg'>{data?.about.slice(0, 250)}</p>
                                <button className="text-left text-lg text-primary underline">Read more...</button>
                                
                            </div>
                            <div className='flex p-4 text-primary'>
                                    <p className='pr-0 mr-3'>{data?.name}</p>
                                    <p>{data?.date}</p>
                            </div>
                                
</Link>
                    )
                }
                </div>
                
            </div>
        </div>
    );
};

export default Blog;