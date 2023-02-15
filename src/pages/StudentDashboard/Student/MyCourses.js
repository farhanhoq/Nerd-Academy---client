import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Loader/Loader';
import StudentFeedback from './StudentFeedback';
import TeacherFeedback from './TeacherFeedback';

const MyCourses = () => {
    const [coursedata, setCourseData] = useState([]);
    const {user , loading} = useContext(AuthContext)

    // useEffect(() => {
    //     fetch(`https://nerd-academy-server.vercel.app/perchased-courses/${user?.email}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setCourseData(data);
    //         });
    // }, []);

    const { data: purchasedCourse = [], refetch } = useQuery({
          queryKey: ["purchasedCourse"],
          queryFn: () => fetch(`https://nerd-academy-server.vercel.app/perchased-courses/${user?.email}`)
          .then(
            res => res.json()
        ),
        });
       console.log(purchasedCourse);


    

    if(loading){
        return <Loader></Loader>
    }
    return (
        <div className="my-20  ">
            <h2 className="text-4xl font-bold">My Courses</h2>
            <hr className='my-2' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8 my-10 text-center">
                {purchasedCourse?.map((course) => (
                    <div className="card lg:card-side bg-base-100 shadow-xl p-2 bg-slate-200">
                        <figure><img className='w-96' src={course.picture} alt="Album" /></figure>
                        <div className="text-left text-black p-3">
                            <h2 className="card-title mt-5">{course.title}</h2>
                            <p className='mt-2'>By {course.tutor}</p>
                            <div className="card-actions mt-5 justify-end">
                                <Link to="/module" className="btn btn-primary rounded text-white bg-gradient-to-r from-sky-600 to-cyan-400">Continue course</Link>
                                <div className='text-right mt-1'>
                                <label htmlFor="teacher-modal" className=" rounded border-none btn-xs text-xs capitalize btn bg-gradient-to-r from-sky-600 to-cyan-400">Add teacher review</label>
                                    <label htmlFor="my-modal" className="block pt-1 mt-1 rounded border-none btn-xs text-xs capitalize btn bg-gradient-to-r from-sky-600 to-cyan-400">Add course review</label>
                                </div>
                                
                            </div>
                        </div>
                        <StudentFeedback course={course}></StudentFeedback>
                        <TeacherFeedback course={course}></TeacherFeedback>
                    </div>
                    
                ))}
            </div>
            


        </div>
    );
};

export default MyCourses;