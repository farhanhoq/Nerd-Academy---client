import React from 'react';
import { Link } from 'react-router-dom';
// import instructor from '../../../Assets/instructor.jpg'

const Instructor = () => {
    return (
        <div className='flex flex-col md:flex-row items-center w-11/12 mx-auto shadow-2xl my-28 rounded-xl'>

            <div className='w-full md:w-6/12'>
                <img className='rounded-tl-md rounded-bl-md w-9/12' src="https://img.freepik.com/premium-vector/business-people-having-board-meeting_1034-1214.jpg?w=740" alt="instructor" />
            </div>
            <div className='md:w-6/12 p-5 md:ml-5'>

                <h1 className='text-5xl font-bold mb-5'>Become an instructor</h1>
                <div className='w-10/12 text-lg text-slate-400'>
                    <p>Instructors from around the world teach millions of students on Nerd Academy. We provide the tools and skills to teach what you love.</p>
                </div>


                <Link to='/construction' className='btn btn-primary text-white rounded-full mt-5'>Start teaching today</Link>
            </div>

        </div>
    );
};

export default Instructor;