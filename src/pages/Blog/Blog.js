import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import minusb from "../../Assets/minusb.png";
import book from "../../Assets/book.png";
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';

const Blog = () => {

  const { loading } = useContext(AuthContext);

    const {
        data: blogData = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ['blogData'],
        queryFn: () => fetch('https://nerd-academy-server.vercel.app/blog').then(res => res.json()),
      });

      if(loading){
        return <Loader></Loader>
      }

    return (
        <div className='py-32'>
            <div className='text-center mb-28 mt-10 dark:text-white'>
            <h1 className="text-5xl text-center font-bold capitalize">
          Blogs
        </h1>
        <div className="grid justify-center">
          <img className="h-full w-12" src={minusb} alt="" />
          <img className="h-full w-12" src={book} alt="" />
        </div>
            </div>
            <div className='w-11/12 mx-auto px-22'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                    blogData.map(data => <Link to={`/blog/${data._id}`} className="card card-compact bg-base-100 shadow-xl hover:bg-base-200 hover:shadow-2xl">
                            <figure><img className='h-[170px] w-full object-cover' src={data?.picture} alt="Shoes" /></figure>
                            <div className="p-4">
                                <h2 className="card-title text-lg capitalize">{data?.heading}...</h2>
                                {/* <p className='text-sm text-slate-500'>{data?.about.slice(0, 120)}</p> */}
                                <button className="text-left text-md text-primary underline">Read more...</button>
                                
                            </div>
                            <div className='flex p-4'>
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