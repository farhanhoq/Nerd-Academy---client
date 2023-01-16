import React from 'react';
import instructor from '../../../Assets/instructor.jpg'

const Instructor = () => {
    return (
        <div className='flex sm:flex-col md:flex-row items-center w-11/12 mx-auto shadow-2xl my-28 rounded-xl'>

            <div className='w-6/12'>
                <img src={instructor} alt="" />
            </div>
            {/* ----------------------------------------------------- */}
            <div className='w-6/12 p-5 ml-5'>

                <h1 className='text-5xl font-bold mb-5'>Become an instructor</h1>
                <div className='w-10/12 text-lg text-slate-400'>
                    <p>Instructors from around the world teach millions of students on Nerd Academy. We provide the tools and skills to teach what you love.</p>
                </div>


                <button className='btn btn-primary text-white rounded-full mt-5'>Start teaching today</button>
            </div>

        </div>
    );
};

export default Instructor;