import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { FaStar, FaUserFriends } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';

const StudentAlsoBought = () => {
  const { loading } = useContext(AuthContext);
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    fetch('https://nerd-academy-server.vercel.app/studentAlsoBought')
      .then((res) => res.json())
      .then((data) => setTrendingData(data));
  }, []);

  if(loading){
    return <Loader></Loader>
  }
    return (
        <div className=''>
              <div className="overflow-x-auto border p-3">
            <table className="table w-full">
              {trendingData?.map((data) => (
                <tbody>
                  <tr className="flex justify-between">
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask w-24 rounded-lg h-14">
                            <img src={data?.picture} />
                          </div>
                        </div>
                        <div className="">
                          <div className="font-bold">
                            {data?.name}
                          </div>
                          <div className='flex'>
                            <div className="text-sm mr-2">
                            Video: <span className="opacity-70">
                              {data?.hours} hours
                            </span>
                          </div>
                          <div className="text-sm ">
                            Updated: <span className="opacity-70">{data?.updated}</span>
                          </div>
                          </div>
                          <div>
                            <p className='text-sm badge rounded bg-amber-400 border-none text-black'>Bestseller</p>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                    </td>
                    <td>
                      <div className="text-right">
                        <p className=""><FaStar className='inline'/> 4.7</p>
                      </div>
                    </td>
                    <td>
                      <div className="text-right">
                        <p className=""><FaUserFriends className='inline mr-1 text-xl'/>12643</p>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <p className="font-bold text-lg">
                          ${data?.price}
                        </p>
                      </div>

                    </td>
                    
                  </tr>
                  
                </tbody>
              ))}
            </table>
          </div>
          
              </div>
    );
};

export default StudentAlsoBought;