import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaStar, FaUserFriends } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import bg from '../../Assets/instructorDetailsBg.png';
import userImage from '../../Assets/userImg.jpg';
import ScrollToTop from '../ScrollToTop';

const InstructorDetails = () => {
  const data = useLoaderData();
  const [publish, setPublish] = useState();
  // console.log(publish);

  useEffect(() => {
    fetch(`https://nerd-academy-server.vercel.app/publish?email=${data?.email}`)
      .then(res => res.json())
      .then(data => setPublish(data));
  }, [data?.email]);
  // console.log(data);
  return (
    <div className="">
      <ScrollToTop></ScrollToTop>
      <div className="py-[50px]" style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content mx-auto relative py-16">
          <div className="text-left mx-auto w-7/12 mx-auto">
            <h1 className="mt-20 text-5xl font-bold ">{data?.name}</h1>
            <p className="pt-3 text-lg">{data?.body?.skill}</p>
          </div>
        </div>
      </div>

      <div className="absolute top-[170px] left-24">
        <img className="w-[250px] w-[250px] rounded-full " src={userImage} />
      </div>

      <div className="my-24 w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div>
            <h1 className="text-5xl border-b-2 w-5/12 border-purple-800 pb-3">
              About me
            </h1>
            <p className="text-lg pt-5 text-justify">{data?.body?.about}</p>
          </div>
          <div className="md:ml-7 w-full">
            <h1 className="text-5xl border-b-2 mb-5 border-purple-800 pb-3">
              My Courses
            </h1>
            {publish?.map(singleData => (
              <div className='w-full mt-5'>
                <tr className="flex justify-between mb-5">
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="">
                        <div className=" rounded">
                          <img
                            className="w-[100px] h-[70px] rounded"
                            src={singleData?.picture}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="font-bold">{singleData?.title}</div>
                        <div className=''>By {singleData?.tutor}</div>
                        <div className="flex">
                          <div className="text-sm mr-2">
                            Video:{' '}
                            <span className="opacity-70">
                              {singleData?.hours} hours
                            </span>
                          </div>
                          <div className="text-sm ">
                            Published:{' '}
                            <span className="opacity-70">
                              {singleData?.postingDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* <td>
                                    <div className="text-right">
                                      <p className=""><FaStar className='inline'/> 4.7</p>
                                    </div>
                                  </td> */}
                  {/* <td>
                                    <div className="text-right">
                                      <p className=""><FaUserFriends className='inline mr-1 text-xl'/>12643</p>
                                    </div>
                                  </td> */}
                  <td>
                    <div className="">
                      <p className="font-bold text-lg text-primary">
                        ${singleData?.price}
                      </p>
                    </div>
                  </td>
                </tr>
                <div className="divider"></div> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
