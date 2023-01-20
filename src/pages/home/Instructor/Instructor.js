import React from 'react';
import { Link } from 'react-router-dom';
import instructor from '../../../Assets/instructor.jpg'

const Instructor = () => {
    return (
        <div className='flex flex-col md:flex-row items-center w-11/12 mx-auto shadow-2xl my-28 rounded-xl'>

            <div className='w-full md:w-6/12'>
                <img src={instructor} alt="instructor" />
            </div>
            <div className='md:w-6/12 p-5 md:ml-5'>

                <h1 className='text-5xl font-bold mb-5'>Become an instructor</h1>
                <div className='w-10/12 text-lg text-slate-400'>
                    <p>Instructors from around the world teach millions of students on Nerd Academy. We provide the tools and skills to teach what you love.</p>
                </div>

<<<<<<< HEAD

                <Link to='/construction' className='btn btn-primary text-white rounded-full mt-5'>Start teaching today</Link>
=======
                <button className='btn btn-primary text-white rounded-full mt-5'>Start teaching today</button>
>>>>>>> f7ae7ed6562a130756a92ae8a61b0c443be0f8f8
            </div>

        </div>
    );
};

export default Instructor;