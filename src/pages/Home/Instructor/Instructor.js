import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../PrimaryButton/PrimaryButton';
// import instructor from '../../../Assets/instructor.jpg'

const Instructor = () => {
    return (
        <div className='flex flex-col md:flex-row md:gap-6 items-center w-11/12 mx-auto shadow-2xl my-28 rounded-xl p-4 dark:text-white'>

            <div className='w-full md:w-6/12 border-r'>
                <img className='rounded-tl-md rounded-bl-md w-full md:w-11/12' src="https://i.ibb.co/xDj3jxj/instructor.png" alt="instructor" />
            </div>
            <div className='md:w-4/6 mr-10'>

                <h1 className='text-4xl md:text-5xl font-bold my-4'>Become an instructor</h1>
                <div className='w-10/12 text-lg text-slate-400'>
                    <p>Instructors from around the world teach millions of students on Nerd Academy. We provide the tools and skills to teach what you love.</p>
                </div>

                {/* <Link to='/construction' className='btn btn-primary text-white rounded-full mt-5'>Start teaching today</Link> */}
                <Link className='my-4' to='/teacher-prerequisites'><PrimaryButton>Start teaching today</PrimaryButton></Link>
            </div>

        </div>
    );
};

export default Instructor;