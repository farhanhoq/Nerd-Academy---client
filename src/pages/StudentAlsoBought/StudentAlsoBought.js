import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { FaStar, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
import ScrollToTop from '../ScrollToTop';

const StudentAlsoBought = ({category}) => {
  const { loading } = useContext(AuthContext);
  const [trendingData, setTrendingData] = useState([]);

  
  useEffect(() => {
    fetch(`https://nerd-academy-server.vercel.app/courses-also-bought?category=${category}`)
      .then((res) => res.json())
      .then((data) => setTrendingData(data));
    }, [category]);
    
    console.log(trendingData)
  if(loading){
    return <Loader></Loader>
  }
    return (
      <div className="">
        <ScrollToTop/>
        <div className="overflow-x-auto border p-3">
          <table className="table w-full">
            {trendingData?.map((data) => (
              // <Link to={`/details/${data._id}`}>

              <tbody>
                <tr className="flex justify-between">
                  <td>
                    <Link to={`/details/${data._id}`}>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask w-24 rounded-lg h-14">
                            <img src={data?.picture} alt="" />
                          </div>
                        </div>
                        <div className="">
                          <div className="flex flex-col">
                            <div className="text-sm ">
                              <span className="opacity-70">{data?.title}</span>
                            </div>
                            <div className="text-sm mr-2">
                              Video:{" "}
                              <span className="opacity-70">
                                {data?.hours} hours
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td>
                    <div className="text-right">
                      <p className="">
                        <FaUserFriends className="inline mr-1 text-xl" />
                        {data.bought}
                      </p>
                    </div>
                  </td>

                  <td>
                    <div className="">
                      <p className="font-bold text-lg">${data?.price}</p>
                    </div>
                  </td>
                </tr>
              </tbody>

              // </Link>
            ))}
          </table>
        </div>
      </div>
    );
};

export default StudentAlsoBought;