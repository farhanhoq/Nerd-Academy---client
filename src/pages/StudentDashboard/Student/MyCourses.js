import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyCourses = () => {
    const [coursedata, setCourseData] = useState([]);

    useEffect(() => {
        fetch("https://nerd-academy-server.vercel.app/perchased-courses")
            .then((res) => res.json())
            .then((data) => {
                setCourseData(data);
            });
    }, []);

    
    console.log(coursedata);
    return (
        <div className="my-20  ">
                <h2 className="text-4xl font-bold">My Courses</h2>
                <hr className='my-2' />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8 my-10 text-center">
                        {coursedata?.map((course) => (
                            <div className="card lg:card-side bg-base-100 shadow-xl p-2 bg-slate-200">
                                <figure><img className='w-96' src={course.picture} alt="Album"/></figure>
                                <div className="text-left text-black p-3">
                                <h2 className="card-title mt-5">{course.title}</h2>
                                <p className='mt-2'>By {course.tutor}</p>
                                    <div className="card-actions mt-10 justify-end">
                                        <button className="btn btn-primary rounded text-white bg-gradient-to-r from-sky-600 to-cyan-400">Continue course</button>
                                    </div>
                                </div>
                          </div>
                        ))}
                    </div>
            
        </div>
    );
};

export default MyCourses;