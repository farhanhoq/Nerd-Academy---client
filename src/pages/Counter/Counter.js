import React, { useEffect, useState } from 'react';
import users from '../../Assets/users.png'
import instructorf from '../../Assets/instructorf.png'
import learner from '../../Assets/learner.png'
import course from '../../Assets/course.png'

const Counter = () => {
    const [counters, setCounters] = useState([]);

    useEffect(() => {
        fetch('counters.json')
            .then(res => res.json())
            .then(data => {
                setCounters(data)
            })
    }, []);
    return (


        <div style={{
            background: `url(https://img.freepik.com/free-vector/blue-fluid-background_53876-114597.jpg?w=740&t=st=1673891733~exp=1673892333~hmac=f0fa97036719bb019b3d5970ca6bc9d368e91490bf1e3096d3365538f8cb4e92)`,

        }}
            className='grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-8 my-28 w-12/12 mx-24'>

            {
                counters.map(counter => <div key={counter.id} counter={counter} className="w-full max-w-sm  rounded-md shadow-md border border-indigo-700">
                    <div className="flex justify-end px-4 pt-4">


                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg border border-zinc-50 my-4" src={counter.img} alt='' />
                        <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">{counter.title}</h5>
                        <span className="text-black-500 dark:text-gray-400 text-md font-semibold">{counter.digit}</span>

                    </div>
                </div>)
            }
        </div>

    );
};

export default Counter;