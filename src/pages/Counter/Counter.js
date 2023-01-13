import React from 'react';
import users from '../../Assets/users.png'
import instructorf from '../../Assets/instructorf.png'
import learner from '../../Assets/learner.png'
import course from '../../Assets/course.png'

const Counter = () => {
    // const { name, number, icon } = data;
    // console.log(data);
    return (

        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 my-16 w-11/12 mx-auto'>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">


                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={users} alt='' />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">USERS</h5>
                        <span className="text-black-500 dark:text-gray-400 text-md font-semibold">60489</span>

                    </div>
                </div>

                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">

                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={instructorf} alt='' />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">INSTRUCTOR
                        </h5>
                        <span className=" text-black-500 dark:text-gray-400 text-md font-semibold">200</span>

                    </div>
                </div>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">


                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={learner} alt='' />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">LEARNERS</h5>
                        <span className="text-black-500 dark:text-gray-400 text-md font-semibold">500</span>

                    </div>

                </div>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">


                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={course} alt='' />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">COURSES</h5>
                        <span className="text-black-500 dark:text-gray-400 text-md font-semibold">150</span>

                    </div>

                </div>



            </div>
        </div>
    );
};

export default Counter;